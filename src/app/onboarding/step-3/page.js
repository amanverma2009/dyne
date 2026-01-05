export default function Home(params) {
  return (
    <div className="h-screen bg-linear-to-b from-orange-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-12">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Favorite Cuisines
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Select at least one cuisine you love
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-restaurant-2-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Italian
                </span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-bowl-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Chinese
                </span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-fire-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Indian
                </span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-cake-3-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Japanese
                </span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-restaurant-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Mexican
                </span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-leaf-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">Thai</span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-burger-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  American
                </span>
              </div>
            </button>
            <button className="py-5 px-4 rounded-2xl border-2 transition-all border-gray-200 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gray-100">
                  <i className="ri-goblet-line text-2xl text-gray-400"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Mediterranean
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="pt-6">
          <button
            disabled=""
            className="w-full py-4 rounded-full font-semibold text-base shadow-lg transition-all bg-gray-200 text-gray-400 cursor-not-allowed"
          >
            Start Discovering
          </button>
          <div className="flex gap-2 mt-6 justify-center">
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
