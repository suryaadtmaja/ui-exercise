<template>
  <div class="container mx-auto px-8 py-8">
    <div class="w-full grid grid-cols-3 cols-gap-8 gap-x-8 gap-y-64">
      <div
        class="bg-white rounded-lg flex flex-col px-8 py-8 shadow"
        v-for="i in 3"
        :key="i"
      >
        <div
          class="-mt-14 rounded-lg bg-indigo-500 h-14 w-14 text-white flex items-center justify-center"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
        </div>
        <h3 class="mt-8 text-gray-900 text-lg">Sales</h3>
        <p class="text-gray-600 text-md py-4">
          Snare faith law aversion joy. Ideal ascetic gains passion society
          gains insofar. Mountains god ocean right ultimate deceptions abstract
        </p>

        <p class="text-indigo-600 flex text-md mt-8 items-center">
          Contact us
          <span>
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-img {
  background-image: url(https://images.unsplash.com/photo-1560264418-c4445382edbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
}
</style>
