<template>
  <div class="mx-auto container py-4 px-4">
    <div class="heading py-4">
      <h3 class="font-bold text-2xl text-gray-900">Our Team</h3>
      <p class="description text-md text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="grid-cols-3 grid gap-8 mt-4">
      <div class="card" v-for="(item, index) in teams" :key="index">
        <img
          :src="item.image"
          alt=""
          srcset=""
          class="h-64 w-full object-cover rounded-md"
        />
        <div class="mt-4 space-y-1 flex flex-col">
          <h3 class="text-md text-gray-900 font-semi">{{ item.name }}</h3>
          <p class="text-blue-600 text-md font-semi">{{ item.job }}</p>
        </div>
        <div class="flex space-x-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            class="text-gray-400"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            class="text-gray-400"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Lindsay Walton",
          job: "Front-end Developer",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          socialMedia: {
            linkedin: "",
            twitter: "",
          },
        },
        {
          name: "Courtney Henry",
          job: "Designer",
          image:
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
          socialMedia: {
            linkedin: "",
            twitter: "",
          },
        },
        {
          name: "Rob Scallon",
          job: "Musician",
          image:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          socialMedia: {
            linkedin: "",
            twitter: "",
          },
        },
        {
          name: "Rob Braddle",
          job: "QA Engineer",
          image:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80",
          socialMedia: {
            linkedin: "",
            twitter: "",
          },
        },
        {
          name: "Asthon Kutcher",
          job: "Photographer",
          image:
            "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=739&q=80",
          socialMedia: {
            linkedin: "",
            twitter: "",
          },
        },
        {
          name: "George Willis",
          job: "Backend Developer",
          image:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          socialMedia: {
            linkedin: "",
            twitter: "",
          },
        },
      ],
    };
  },
};
</script>
