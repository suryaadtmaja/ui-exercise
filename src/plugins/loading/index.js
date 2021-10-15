import Loading from "./src/index";
import appLoading from "./src/directive";

export default {
  install(app) {
    app.directive("loading", appLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: appLoading,
  service: Loading,
};

// export default {
//   install: (app, options) => {
//     app.config.globalProperties.$translate = (key) => {
//       return key.split('.')
//         .reduce((o, i) => { if (o) return o[i] }, options)
//     }

//     app.provide('i18n', options)

//     app.directive('my-directive', {
//       mounted (el, binding, vnode, oldVnode) {
//         // some logic ...
//       }
//       ...
//     })

//     app.mixin({
//       created() {
//         // some logic ...
//       }
//       ...
//     })
//   }
// }
