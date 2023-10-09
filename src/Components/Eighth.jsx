import React from "react";

const Eighth = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col  md:mt-2 gap-6 bg-slate-100 mt-[3rem] pt-4 pb-0">
      <div className=" flex flex-col items-center justify-center">
        <span className="md:text-[40px] text-[25px] font-bold text-black">
          Pellentesque Suscipit
        </span>
        <span className="md:text-[40px] text-[25px] font-bold text-black">
          fringilla libero eu
        </span>
        <button
          type="button"
          class="text-white mt-3 bg-green-600 hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-medium rounded-sm text-sm px-16 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-600"
        >
          Get a Demo{" "}
        </button>
      </div>
     

      <footer class="bg-white dark:bg-black w-full">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <a href="#" class="flex items-center mb-5">
              <svg
                className="mr-2"
                width="35"
                height="24"
                viewBox="0 0 35 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg "
              >
                {" "}
                <path
                  d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z"
                  fill="#263238"
                ></path>{" "}
                <path
                  d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z"
                  fill="#263238"
                ></path>{" "}
                <path
                  d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z"
                  fill="#4CAF4F"
                ></path>{" "}
                <path
                  d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z"
                  fill="#4CAF4F"
                ></path>{" "}
                <path
                  d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z"
                  fill="#4CAF4F"
                ></path>{" "}
                <path
                  d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z"
                  fill="#4CAF4F"
                ></path>{" "}
              </svg>{" "}
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Nexcent
              </span>
            </a>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      About us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Contact us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Help center
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Terms of services
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Stay up to date
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Privacy policy
                    </a>
                  </li>
                  {/* <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Status
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Stay up to date
                </h2>

                <label
                  for="email-address-icon"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Eighth;
