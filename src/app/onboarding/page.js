"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);

        // this will go to backend
        router.push("/onboarding/step-2");
      },
      () => {
        alert("Location permission denied");
      }
    );
  };
  return (
    <div className="max-h-screen bg-linear-to-b from-orange-50 to-white flex flex-col">
      <div className="flex flex-col items-center justify-between px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            width={96}
            height={96}
            alt="Logo"
            className="mb-8"
            src="/temp-logo.png"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Find Your Next Meal
          </h1>
          <p className="text-base text-gray-600 mb-12 max-w-xs">
            Discover amazing restaurants nearby with a simple swipe
          </p>
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Enable Location
          </h2>
          <p className="text-sm text-gray-500 max-w-xs mb-8">
            We need your location to show you the best restaurants nearby
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Button content="Enable Location" onClick={requestLocation} />

          <button className="min-w-fit px-6 text-gray-500 py-3 text-sm cursor-pointer">
            Skip for now
          </button>
        </div>
        <div className="flex gap-2 mt-6">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
