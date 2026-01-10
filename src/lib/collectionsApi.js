/**
 * Lightweight client for the backend-driven collections feature.
 *
 * Contract (what backend should support):
 * - GET {baseUrl}/collections/liked?userId=...  -> { ids: Array<string|number> }
 * - GET {baseUrl}/collections/saved?userId=...  -> { ids: Array<string|number> }
 *
 * Notes:
 * - This frontend currently has no auth; we pass userId as a query param (or omit it).
 * - If NEXT_PUBLIC_API_BASE_URL isn't set, we fall back to same-origin and allow
 *   using Next.js route handlers later (e.g. /api/collections/liked).
 */

function toIdsArray(payload) {
  // Allow common shapes from backends.
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.ids)) return payload.ids;
  if (Array.isArray(payload.data)) return payload.data;
  return [];
}

function normalizeIds(ids) {
  return (ids || [])
    .map((x) => (x == null ? null : String(x)))
    .filter(Boolean);
}

async function fetchJson(url, { signal } = {}) {
  const res = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal,
  });

  if (!res.ok) {
    const msg = `Failed to fetch ${url} (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "";
}

function readMockCollections(type) {
  if (typeof window === "undefined") return null;
  // Allow enabling mocks via env var AND via a localStorage flag for QA.
  const useMockEnv = process.env.NEXT_PUBLIC_USE_MOCK_COLLECTIONS === "1";
  const raw = (() => {
    try {
      return window.localStorage.getItem("dyne:mockCollections");
    } catch (e) {
      return null;
    }
  })();

  if (!useMockEnv && !raw) return null;

  try {
    const parsed = raw ? JSON.parse(raw) : null;
    const ids = parsed && parsed[type];
    if (Array.isArray(ids)) return normalizeIds(ids);
  } catch (e) {
    // ignore parse errors
  }

  // Fallback defaults if env is on but storage isn't set.
  if (useMockEnv) {
    if (type === "saved") return normalizeIds(["1", "2"]);
    if (type === "liked") return normalizeIds(["3", "1", "4"]);
  }
  return null;
}

const _cache = new Map();
const DEFAULT_TTL_MS = 15_000;

function getCacheKey({ type, userId, baseUrl }) {
  return `${baseUrl}::${type}::${userId || ""}`;
}

function buildCollectionsUrl({ type, userId, baseUrl }) {
  const origin = typeof window !== "undefined" ? window.location.origin : "http://localhost";
  const url = new URL(`/collections/${encodeURIComponent(type)}`, baseUrl ? baseUrl : origin);
  if (userId) url.searchParams.set("userId", String(userId));
  return url;
}

export async function fetchCollectionIds(
  type,
  { userId, signal, ttlMs = DEFAULT_TTL_MS, force = false } = {}
) {
  if (!type) throw new Error("collection type required");

  // If mock collections are enabled, skip network entirely.
  const mock = readMockCollections(type);
  if (mock) return mock;

  const baseUrl = getApiBaseUrl();
  const key = getCacheKey({ type, userId, baseUrl });
  const now = Date.now();

  const cached = _cache.get(key);
  if (!force && cached && cached.value && cached.expiresAt > now) {
    return cached.value;
  }

  if (!force && cached && cached.promise) {
    return cached.promise;
  }

  const url = buildCollectionsUrl({ type, userId, baseUrl });
  const promise = (async () => {
    const payload = await fetchJson(url.toString(), { signal });
    const value = normalizeIds(toIdsArray(payload));
    _cache.set(key, { value, expiresAt: now + ttlMs });
    return value;
  })();

  _cache.set(key, { promise });

  try {
    return await promise;
  } catch (e) {
    const current = _cache.get(key);
    if (current && current.promise) _cache.delete(key);
    throw e;
  }
}

export function invalidateCollectionCache({ type, userId } = {}) {
  const baseUrl = getApiBaseUrl();
  if (!type) {
    // clear all
    _cache.clear();
    return;
  }
  const key = getCacheKey({ type, userId, baseUrl });
  _cache.delete(key);
}

export async function fetchLikedIds(opts) {
  try {
    return await fetchCollectionIds("liked", opts);
  } catch (e) {
    return readLocalIds("liked");
  }
}

export async function fetchSavedIds(opts) {
  try {
    return await fetchCollectionIds("saved", opts);
  } catch (e) {
    return readLocalIds("saved");
  }
}

// --- Client-side persistence helpers ---
// Until the backend supports writes, we persist user actions in localStorage.
// This is intentionally lightweight and resilient: failures are swallowed.

const LS_KEYS = {
  saved: "dyne:savedIds",
  liked: "dyne:likedIds",
};

function readLocalIds(type) {
  if (typeof window === "undefined") return [];
  const key = LS_KEYS[type];
  if (!key) return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return normalizeIds(Array.isArray(parsed) ? parsed : []);
  } catch (e) {
    return [];
  }
}

function writeLocalIds(type, ids) {
  if (typeof window === "undefined") return;
  const key = LS_KEYS[type];
  if (!key) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(normalizeIds(ids)));
  } catch (e) {
    // ignore
  }
}

export function addToSaved(id) {
  const norm = id == null ? null : String(id);
  if (!norm) return;
  const current = readLocalIds("saved");
  if (current.includes(norm)) return;
  writeLocalIds("saved", [norm, ...current]);
  invalidateCollectionCache({ type: "saved" });
}

export function addToLiked(id) {
  const norm = id == null ? null : String(id);
  if (!norm) return;
  const current = readLocalIds("liked");
  if (current.includes(norm)) return;
  writeLocalIds("liked", [norm, ...current]);
  invalidateCollectionCache({ type: "liked" });
}

export function removeFromSaved(id) {
  const norm = id == null ? null : String(id);
  if (!norm) return;
  const current = readLocalIds("saved");
  writeLocalIds(
    "saved",
    current.filter((x) => x !== norm)
  );
  invalidateCollectionCache({ type: "saved" });
}

export function removeFromLiked(id) {
  const norm = id == null ? null : String(id);
  if (!norm) return;
  const current = readLocalIds("liked");
  writeLocalIds(
    "liked",
    current.filter((x) => x !== norm)
  );
  invalidateCollectionCache({ type: "liked" });
}

export function fetchLocalLikedIds() {
  return readLocalIds("liked");
}

export function fetchLocalSavedIds() {
  return readLocalIds("saved");
}
