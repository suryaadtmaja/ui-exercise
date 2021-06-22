<template>
  <div class="w-full px-4 py-4">
    <div id="container-drag" class="grid-cols-3 grid w-full gap-x-4 gap-y-4">
      <draggable-list :value="dummy">
        <template v-slot="{ items }">
          <draggable-item v-for="i in items" :key="i.id">
            <div class="sortable-items border border-gray-400 h-72">
              <button @click="addSomething(i.id)">Hello {{ i }}</button>
              <draggable-handle>
                <svg
                  class="
                    ml-2
                    h-4
                    w-4
                    cursor-move
                    text-grey
                    hover:text-grey-darkest
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                  />
                </svg>
              </draggable-handle>
            </div>
          </draggable-item>
        </template>
      </draggable-list>
    </div>
  </div>
</template>

<script>
import { Swappable } from "@shopify/draggable";
import DraggableList from "../components/ui/card/DraggableList.vue";
import DraggableItem from "../components/ui/card/DraggableItem.vue";
import DraggableHandle from "../components/ui/card/DraggableHandle.vue";
export default {
  components: {
    DraggableList,
    DraggableItem,
    DraggableHandle,
  },
  data() {
    return {
      dummy: [
        {
          name: "Hey",
          id: 0,
        },
        {
          name: "Hey",
          id: 1,
        },
        {
          name: "Hey",
          id: 2,
        },
        {
          name: "Hey",
          id: 3,
        },
        {
          name: "Hey",
          id: 4,
        },
        {
          name: "Hey",
          id: 5,
        },
      ],
    };
  },
  methods: {
    addSomething(id) {
      this.dummy[id].name = "ubah";
    },
  },
  // mounted() {
  //   const containerSelector = "#dashboard-container";
  //   const containers = document.querySelector(containerSelector);

  //   if (containers.length === 0) return false;
  //   const swappable = new Swappable(containers, {
  //     draggable: "[swapItem]",
  //     delay: 0,
  //   });
  //   swappable.on("drag:start", () => {
  //     console.log("drag:start");
  //   });
  //   swappable.on("swappable:swapped", () => {
  //     console.log("drag:swapped");
  //   });
  //   swappable.on("drag:stop", () => {
  //     console.log("drag:stop");
  //   });
  //   swappable.on("drag:move", () => {
  //     console.log("drag:move");
  //   });
  // },
};
</script>
