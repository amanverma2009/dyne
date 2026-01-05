import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-8">
        <div className="text-center mb-12">
          <Image
            width={72}
            height={72}
            alt="Logo"
            className="mx-auto mb-4"
            src="/temp-logo.png"
          />
          <p className="text-gray-600 text-sm">
            Welcome back! Sign in to continue
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex bg-gray-100 rounded-full p-1 mb-8">
              <button className="flex-1 py-2.5 rounded-full text-sm font-medium transition-all bg-orange-500 text-white">
                Sign In
              </button>
              <button className="flex-1 py-2.5 rounded-full text-sm font-medium transition-all text-gray-600">
                Sign Up
              </button>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                    <i className="ri-mail-line text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required=""
                    value=""
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                    <i className="ri-lock-line text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required=""
                    value=""
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
                  >
                    <i className="ri-eye-line text-gray-400 text-lg"></i>
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-orange-500 font-medium"
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-medium shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors"
              >
                Sign In
              </button>
            </form>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10.2V12.05H15.6109C15.3727 13.3 14.6636 14.3591 13.6045 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M10.2 20C12.9 20 15.1709 19.1045 16.8273 17.5773L13.6045 15.0682C12.7091 15.6682 11.5636 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.58636 11.9H1.25455V14.4909C2.90182 17.7591 6.30909 20 10.2 20Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M4.58636 11.9C4.38636 11.3 4.27273 10.6591 4.27273 10C4.27273 9.34091 4.38636 8.7 4.58636 8.1V5.50909H1.25455C0.572727 6.85909 0.2 8.38636 0.2 10C0.2 11.6136 0.572727 13.1409 1.25455 14.4909L4.58636 11.9Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10.2 3.97727C11.6864 3.97727 13.0182 4.48182 14.0682 5.47273L16.9227 2.61818C15.1664 0.986364 12.8955 0 10.2 0C6.30909 0 2.90182 2.24091 1.25455 5.50909L4.58636 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span className="font-medium text-gray-700">Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
