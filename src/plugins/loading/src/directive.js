import Loading from "./index.js";

const createInstance = (el, binding) => {
  const vm = binding.instance;
  el.instance = Loading({
    visible: true,
    fullscreen: !!binding.modifiers.fullscreen,
    target: !!binding.modifiers.fullscreen ? null : el,
  });
};

const appLoading = {
  mounted(el, binding) {
    console.log("heyyyyy");
    if (!!binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el.instance;
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        createInstance(el, binding);
      } else {
        instance.close();
      }
    }
  },
  unmounted(el) {
    el?.instance?.close();
  },
};

export default appLoading;
