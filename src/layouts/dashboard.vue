<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayout from "./AppLayout";
import { markRaw, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const layout = markRaw(AppLayout);
    const route = useRoute();

    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || AppLayout;
        } catch (e) {
          layout.value = AppLayout;
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
