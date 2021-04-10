<template>
  <div class="bg-gray-800 w-1/6 h-screen">
    <div class="flex flex-col h-full justify-between">
      <div class="mx-2 flex flex-col">
        <div class="ml-2 logo flex items-center space-x-2 mt-6">
          <img
            src="https://www.vultr.com/favicon/android-chrome-512x512.png"
            alt=""
            srcset=""
            class="h-8"
          />
          <h3 class="font-semi text-2xl text-white">Manage</h3>
        </div>
        <div class="link mt-4 flex flex-col">
          <div
            class="flex justify-between w-full bg-gray-900 py-3 px-2 rounded-md mt-2"
          >
            <div class="flex space-x-4">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <h3 class="text-gray-200 text-md">Dashboard</h3>
            </div>
          </div>

          <div class="flex justify-between w-full py-3 px-2 mt-2">
            <div class="flex space-x-4">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h3 class="text-gray-300 text-md">Team</h3>
            </div>
            <div class="rounded-full bg-gray-900 flex items-center px-2">
              <p class="text-gray-300 text-xs text-center">3</p>
            </div>
          </div>

          <div class="flex justify-between w-full py-3 px-2 mt-2">
            <div class="flex space-x-4">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              <h3 class="text-gray-300 text-md">Projects</h3>
            </div>
            <div class="rounded-full bg-gray-900 flex items-center px-2">
              <p class="text-gray-300 text-xs text-center">14</p>
            </div>
          </div>

          <div class="flex justify-between w-full py-3 px-2 mt-2">
            <div class="flex space-x-4">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <h3 class="text-gray-300 text-md">Reports</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="flex bg-gray-700 w-full py-4">
        <div class="flex items-center ml-4 space-x-4">
          <img
            src="https://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw.jpg"
            alt=""
            srcset=""
            class="rounded-full h-10 w-10"
          />
          <div class="flex flex-col">
            <h3 class="text-gray-300 text-md">Tom Cook</h3>
            <p class="text-sm text-gray-400">View profile</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        {
          link: "Home",
          icon: "",
        },
      ],
    };
  },
};
</script>
