<template>
  <main>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>
