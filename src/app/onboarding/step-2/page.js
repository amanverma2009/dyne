"use client";
import { useState } from "react";
import { Leaf, DrumstickIcon, Vegan, Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const dietType = [
    { content: "Vegetarian", icon: "Leaf" },
    { content: "Non-Veg", icon: "DrumstickIcon" },
    { content: "Vegan", icon: "Vegan" },
    { content: "Everything", icon: "Plus" },
  ];
  const ICON_MAP = {
    Leaf: Leaf,
    DrumstickIcon: DrumstickIcon,
    Vegan: Vegan,
    Plus: Plus,
  };
  const [selectedDiet, setSelectedDiet] = useState(null);

  return (
    <div className="h-screen bg-linear-to-b from-orange-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-12">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your Preferences
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Help us personalize your experience
          </p>
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Diet Type
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {dietType.map((type) => {
                const Icon = ICON_MAP[type.icon];
                const isSelected = selectedDiet === type.content;
                return (
                  <button
                    key={type.content}
                    onClick={() => setSelectedDiet(type.content)}
                    className={`py-4 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white cursor-pointer ${
                      isSelected
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-400"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                          isSelected ? "bg-orange-100" : "bg-gray-100"
                        }`}
                      >
                        {Icon && <Icon className="w-6 h-6 text-orange-500" />}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? "text-orange-600" : "text-gray-700"
                        }`}
                      >
                        {type.content}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-6">
          <Link href="/home">
            <button 
              disabled={!selectedDiet}
              className={`w-full py-4 rounded-full font-semibold text-base shadow-lg transition-all
            ${
              selectedDiet
                ? "bg-orange-500 text-white cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
              onClick={() => console.log(selectedDiet)}
            >
              Start Discovering
            </button>
          </Link>

          <div className="flex gap-2 mt-6 justify-center">
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
