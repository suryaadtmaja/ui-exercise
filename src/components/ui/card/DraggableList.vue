<script>
import { Swappable } from "@shopify/draggable";

function move(items, original, over) {
  const originalSource = original.tabIndex;
  const newSource = over.tabIndex;
  items[originalSource].tabIndex = over.tabIndex;
  items[newSource].tabIndex = original.tabIndex;
  return items;
}

export default {
  props: {
    value: {
      required: true,
    },
    handleClass: {
      default: "sortable-handle",
    },
  },
  emits: ["update:value"],
  provide() {
    return {
      handleClass: this.handleClass,
    };
  },
  setup(props, context) {
    return () =>
      context.slots.default({
        items: props.value,
      });
  },
  mounted() {
    const containerSelector = "#container-drag";
    const containers = document.querySelectorAll(containerSelector);
    if (containers.length === 0) {
      return false;
    }
    const swappable = new Swappable(containers, {
      draggable: ".sortable-items",
      handle: `.${this.handleClass}`,
      mirror: {
        constrainDimensions: true,
      },
      delay: 0,
    });
    swappable.on("drag:start", () => {
      console.log("drag:start");
    });
    swappable.on("swappable:swapped", (data) => {
      const originalSource = data.dragEvent.data.originalSource;
      const newSource = data.dragEvent.data.over;
      console.log("old", data.dragEvent.data.originalSource.tabIndex);
      console.log("new", data.dragEvent.data.over.tabIndex);
      this.$emit("update:value", move(this.value, originalSource, newSource));
    });
    swappable.on("drag:stop", () => {
      // this.$emit("update:value");
      console.log("drag:stop");
    });
    swappable.on("drag:move", () => {
      console.log("drag:move");
    });
  },
};
</script>
