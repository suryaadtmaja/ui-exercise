<template>
  <div class="relative flex">
    <span
      class="z-10 h-full leading-snug font-normal text-center text-gray-200 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </span>
    <input
      :placeholder="label"
      :aria-labelledby="label"
      :type="type"
      class="bg-indigo-300 bg-opacity-10 text-white rounded placeholder-gray-200 border-transparent pl-12 relative outline-none border-opacity-75 focus:outline-none focus:ring"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
  },
};
</script>
