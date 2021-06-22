<script>
import { Swappable } from "@shopify/draggable";
export default {
  props: {
    value: {
      required: true,
    },
    handleClass: {
      default: "sortable-handle",
    },
  },
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
    swappable.on("swappable:swapped", () => {
      console.log("drag:swapped");
    });
    swappable.on("drag:stop", () => {
      console.log("drag:stop");
    });
    swappable.on("drag:move", () => {
      console.log("drag:move");
    });
  },
};
</script>
