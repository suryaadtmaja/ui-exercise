<template>
  <div class="w-full flex flex-col mx-auto container divide-y divide-gray-500">
    <div class="w-full flex justify-between space-x-4 items-center mt-4">
      <div class="flex space-x-4 items-center">
        <img
          src="https://www.vultr.com/favicon/android-chrome-512x512.png"
          alt=""
          srcset=""
          class="h-8"
        />
        <div class="flex space-x-8 items-center">
          <router-link
            exact
            class="text-md text-gray-200"
            v-for="(i, index) in routes"
            :key="index"
            :to="i.path"
            :tag="a"
            active-class="active-link"
          >
            {{ i.name }}
          </router-link>
        </div>
      </div>
      <div class="flex">
        <Input :label="'Search'" type="text" />
        <button class="ml-8">
          <svg
            class="w-6 h-6 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <button class="ml-4">
          <div
            class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <p class="text-gray-900 text-center text-sm">SA</p>
          </div>
        </button>
      </div>
    </div>
    <div class="w-full mt-3"></div>
  </div>
</template>

<script>
import Input from "./input.vue";
export default {
  components: {
    Input,
  },
  computed: {
    routes() {
      const data = this.$router.options.routes.map((x) => x);
      const url = data.filter((x) => x.meta.showLink == true);
      return url;
    },
  },
  data() {
    return {
      url: [
        {
          name: "Dashboard",
          link: "Dashboard",
        },
        {
          name: "Jobs",
          link: "Home",
        },
        {
          name: "Applicants",
          link: "Home",
        },
        {
          name: "Company",
          link: "Login",
        },
      ],
    };
  },
};
</script>

<style scoped>
.active-link {
  @apply bg-gray-700 rounded px-2 py-2 outline-none focus:outline-none;
}
</style>
