import {
  createVNode,
  h,
  reactive,
  ref,
  render,
  toRefs,
  Transition,
  vShow,
  withCtx,
  withDirectives,
} from "vue";
import { removeClass } from "@/plugins/utils";

export function createLoadingComponent({ options, globalLoadingOption }) {
  let vm = null;
  let afterLeaveTimer = null;

  const afterLeaveFlag = ref(false);
  const data = reactive({
    ...options,
    originalPosition: "",
    originalOverflow: "",
    visible: false,
  });

  function setText(text) {
    data.text = text;
  }

  function destroySelf() {
    const target = data.parent;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        removeClass(target, "app-loading-parent--relative");
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      removeClass(target, "app-loading-parent--hidden");
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el);
    }
  }

  function close() {
    const target = data.parent;
    target.vLoadingAddClassList = null;
    if (data.fullscreen) {
      globalLoadingOption.fullscreenLoading = undefined;
    }
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false;
        destroySelf();
      }
    }, 400);
    data.visible = false;
  }

  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return;
    afterLeaveFlag.value = false;
    destroySelf();
  }

  const componentSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave,
  };

  const appLoadingComponent = {
    name: "AppLoading",
    setup() {
      return componentSetupConfig;
    },
    render() {
      const spinner = h("div", {
        class:
          "loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4",
      });
      return h(
        Transition,
        {
          name: "el-loading-fade",
          onAfterLeave: this.handleAfterLeave,
        },
        {
          default: withCtx(() => [
            withDirectives(
              createVNode(
                "div",
                {
                  style: {
                    backgroundColor: this.background || "",
                  },
                  class: [
                    "absolute top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-gray-600 opacity-75 flex flex-col items-center justify-center",
                    this.customClass,
                    this.fullscreen ? "is-fullscreen" : "",
                  ],
                },
                [
                  h(
                    "div",
                    {
                      class: "el-loading-spinner",
                    },
                    [
                      !this.spinner ? spinner : noSpinner,
                      this.text ? spinnerText : null,
                    ]
                  ),
                ]
              ),
              [[vShow, this.visible]]
            ),
          ]),
        }
      );
    },
  };
  vm = createVNode(appLoadingComponent);

  render(vm, document.createElement("div"));

  return {
    ...componentSetupConfig,
    vm,
    get $el() {
      return vm.el;
    },
  };
}
