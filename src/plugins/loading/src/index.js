import { nextTick } from "vue";
import { hasOwn } from "@vue/shared";
import { createLoadingComponent } from "./createLoading.js";

import { addClass, removeClass, getStyle } from "@/plugins/utils";
const defaults = {
  parent: null,
  fullscreen: true,
  body: false,
};

const globalLoadingOption = {
  fullscreenLoading: null,
};
const addStyle = async (options, parent, instance) => {
  const maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, "position");
    instance.originalOverflow.value = getStyle(document.body, "overflow");
  } else if (options.body) {
    instance.originalPosition.value = getStyle(document.body, "position");
    /**
     * await dom render when visible is true in init,
     * because some component's height maybe 0.
     * e.g. el-table.
     */
    await nextTick();
    ["top", "left"].forEach((property) => {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] =
        options.target.getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] -
        parseInt(getStyle(document.body, `margin-${property}`), 10) +
        "px";
    });
    ["height", "width"].forEach((property) => {
      maskStyle[property] =
        options.target.getBoundingClientRect()[property] + "px";
    });
  } else {
    instance.originalPosition.value = getStyle(parent, "position");
  }
  Object.keys(maskStyle).forEach((property) => {
    instance.$el.style[property] = maskStyle[property];
  });
};

const addClassList = (options, parent, instance) => {
  if (
    instance.originalPosition.value !== "absolute" &&
    instance.originalPosition.value !== "fixed"
  ) {
    addClass(parent, "app-loading-parent--relative");
  } else {
    console.log("remove kah?");
    removeClass(parent, "app-loading-parent--relative");
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, "app-loading-parent--hidden");
  } else {
    removeClass(parent, "app-loading-parent--hidden");
  }
};

const Loading = function (options) {
  if (typeof window === "undefined") return;
  options = {
    ...defaults,
    ...options,
  };

  if (typeof options.target === "string") {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }

  if (options.fullscreen && globalLoadingOption.fullscreenLoading) {
    globalLoadingOption.fullscreenLoading.close();
  }

  const parent = options.body ? document.body : options.target;
  options.parent = parent;

  const instance = createLoadingComponent({
    options,
    globalLoadingOption,
  });

  addStyle(options, parent, instance);
  addClassList(options, parent, instance);
  console.log(options.parent, "???");

  options.parent.vLoadingAddClassList = () => {
    addClassList(options, parent, instance);
  };

  /**
   * add loading-number to parent.
   * because if a fullscreen loading is triggered when somewhere
   * a v-loading.body was triggered before and it's parent is
   * document.body which with a margin , the fullscreen loading's
   * destroySelf function will remove 'el-loading-parent--relative',
   * and then the position of v-loading.body will be error.
   */
  let loadingNumber = parent.getAttribute("loading-number");
  if (!loadingNumber) {
    loadingNumber = 1;
  } else {
    loadingNumber = Number.parseInt(loadingNumber) + 1;
  }
  parent.setAttribute("loading-number", loadingNumber.toString());

  parent.appendChild(instance.$el);

  // after instance render, then modify visible to trigger transition
  nextTick().then(() => {
    instance.visible.value = hasOwn(options, "visible")
      ? options.visible
      : true;
  });

  return instance;
};

export default Loading;
