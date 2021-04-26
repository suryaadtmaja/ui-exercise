<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutHome from "./AppLayoutHome.vue";
import { shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "AppLayout",
  setup() {
    const layout = shallowRef(AppLayoutHome);
    const route = useRoute();

    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await import(
            /* @vite-ignore */ `./${meta.layout}.vue`
          );
          console.log(component, "heo");
          layout.value = component?.default.name || AppLayoutHome;
        } catch (e) {
          layout.value = AppLayoutHome;
        }
      },
      {
        immediate: true,
      }
    );

    return {
      layout,
    };
  },
};
</script>
