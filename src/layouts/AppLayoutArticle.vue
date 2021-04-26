<template>
  <main>
    <header class="shadow h-72 bg-blue-300 place-content-start">
      <div class="link mt-8 flex items-center justify-between h-16">
        <h1 class="text-2xl font-bold text-gray-900">Blog</h1>
        <div class="flex space-x-8">
          <h1 class="text-1xl text-gray-900">Portfolio</h1>
          <h1 class="text-1xl text-gray-900">About</h1>
          <h1 class="text-1xl text-gray-900">Contact</h1>
        </div>
      </div>
    </header>
    <div class="article h-full rounded-lg w-full bg-gray-100 shadow">
      <slot />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 80px 1fr 4fr 1fr 80px;
}

header {
  grid-row: 1 / span 2;
  grid-column: 1 / span 5;
  display: grid;
  grid-template-columns: 80px 1fr 1fr 1fr 80px;
}

.link {
  grid-column: 2/5;
}

.article {
  grid-column: 2 / 5;
  grid-row: 2 / span 4;
  z-index: 1;
}
</style>
