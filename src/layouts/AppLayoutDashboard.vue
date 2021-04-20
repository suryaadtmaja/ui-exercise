<template>
  <main>
    <header class="w-full h-72 bg-header">
      <Navbar />
      <div class="sub-header mx-auto container mt-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-200">
          {{ $route.meta.title }} Page
        </h1>
      </div>
    </header>
    <div
      class="w-full rounded-lg bg-white -mt-24 container mx-auto border border-gray-400 border-opacity-25 shadow-sm mb-4"
    >
      <slot />
    </div>
  </main>
</template>
<script>
import Navbar from "../components/ui/Navbar.vue";
export default {
  name: "AppLayoutDashboard",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.bg-header {
  background-color: #0a4e75;
}
</style>
