<template>
  <div class="w-full px-4 py-4">
    <div id="container-drag" class="grid-cols-3 grid w-full gap-x-4 gap-y-4">
      <draggable-list :value="dummy">
        <template v-slot="{ items }">
          <draggable-item v-for="i in items" :key="i.id">
            <div
              class="sortable-items border border-gray-400 h-72"
              :tabindex="i.tabIndex"
            >
              <button @click="addSomething(i.id)">Hello {{ i.name }}</button>
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
          name: "Hey 0",
          id: 0,
          tabIndex: 0,
        },
        {
          name: "Hey 1",
          id: 1,
          tabIndex: 1,
        },
        {
          name: "Hey 2",
          id: 2,
          tabIndex: 2,
        },
        {
          name: "Hey 3",
          id: 3,
          tabIndex: 3,
        },
        {
          name: "Hey 4",
          id: 4,
          tabIndex: 4,
        },
        {
          name: "Hey 5",
          id: 5,
          tabIndex: 5,
        },
      ],
    };
  },
  methods: {
    addSomething(id) {
      this.dummy[id].name = "ubah";
    },
  },
};
</script>
