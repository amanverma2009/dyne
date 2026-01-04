export default function Home() {
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
              <button className="py-4 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                    <i className="ri-leaf-line text-2xl text-gray-400"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Vegetarian
                  </span>
                </div>
              </button>
              <button className="py-4 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                    <i className="ri-restaurant-line text-2xl text-gray-400"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Non-Veg
                  </span>
                </div>
              </button>
              <button className="py-4 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                    <i className="ri-plant-line text-2xl text-gray-400"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Vegan
                  </span>
                </div>
              </button>
              <button className="py-4 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                    <i className="ri-checkbox-multiple-line text-2xl text-gray-400"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Everything
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Budget Range
            </h3>
            <div className="space-y-3">
              <button className="w-full py-4 px-5 rounded-2xl border-2 transition-all text-left border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      Budget Friendly
                    </div>
                    <div className="text-sm text-gray-500">
                      $ - Under $15 per person
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-gray-300"></div>
                </div>
              </button>
              <button className="w-full py-4 px-5 rounded-2xl border-2 transition-all text-left border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      Moderate
                    </div>
                    <div className="text-sm text-gray-500">
                      $$ - $15 to $30 per person
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-gray-300"></div>
                </div>
              </button>
              <button className="w-full py-4 px-5 rounded-2xl border-2 transition-all text-left border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      Premium
                    </div>
                    <div className="text-sm text-gray-500">
                      $$$ - $30+ per person
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-gray-300"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <button
            disabled=""
            className="w-full py-4 rounded-full font-semibold text-base shadow-lg transition-all bg-gray-200 text-gray-400 cursor-not-allowed"
          >
            Continue
          </button>
          <div className="flex gap-2 mt-6 justify-center">
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
