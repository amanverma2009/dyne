import { CircleDollarSign, MapPin, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { fetchSavedIds } from "@/lib/collectionsApi";
import { getRestaurantById } from "@/lib/restaurants";

export default function SavedRestaurants() {
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const fetched = await fetchSavedIds({ signal: controller.signal });
        setIds(fetched);
      } catch (e) {
        setError(e);
        setIds([]);
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  const savedRestaurants = useMemo(() => {
    const list = [];
    const missing = [];

    for (const id of ids || []) {
      const r = getRestaurantById(id);
      if (r) list.push(r);
      else missing.push(id);
    }

    if (process.env.NODE_ENV !== "production" && missing.length) {
      console.warn(
        "[SavedRestaurants] Backend returned unknown restaurant ids:",
        missing
      );
    }

    return list;
  }, [ids]);

  return (
    <div>
      <div className="px-6 py-6">
        <div className="flex flex-col gap-2">
          {loading ? (
            <div className="text-sm text-gray-500">Loading saved restaurants…</div>
          ) : error ? (
            <div className="text-sm text-gray-500">
              Couldn’t load saved restaurants yet. (Backend not connected)
            </div>
          ) : savedRestaurants.length === 0 ? (
            <div className="text-sm text-gray-500">No saved restaurants.</div>
          ) : (
            savedRestaurants.map((restaurant) => (
              <Link
                key={String(restaurant.id)}
                href={`/restaurant/${encodeURIComponent(String(restaurant.id))}`}
              >
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden active:scale-98 transition-transform">
                <div className="flex gap-4 p-4">
                  <Image
                    alt={restaurant.name}
                    className="w-20 h-20 rounded-xl object-cover object-top shrink-0"
                    src={restaurant.image}
                    width={80}
                    height={80}
                    loading="eager"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate pr-2">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-full shrink-0">
                        <Star className="w-4 text-orange-500" />
                        <span className="text-xs font-bold text-gray-900">
                          {restaurant.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 truncate">
                      {restaurant.cuisine.join(", ")}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <CircleDollarSign className="w-4 text-gray-600" />
                        {restaurant.price}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 text-primary" />
                        {restaurant.distance}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 flex gap-2">
                  <button className="flex-1 bg-orange-500 text-white py-2.5 rounded-xl text-sm font-medium active:scale-95 transition-transform cursor-pointer">
                    View Details
                  </button>

                  <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center active:scale-95 transition-transform cursor-pointer">
                    <Trash2 className="text-lg text-gray-600" />
                  </button>
                </div>
              </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
