import { createApp } from "vue";
import "./tailwind.css";
import "./styles/base/main.scss";
import App from "./App.vue";
import { routes } from "./routes.js";
import AppLayout from "./layouts/AppLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import appLoading from "@/plugins/loading/index.js";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(appLoading);
app.component("AppLayout", AppLayout);
app.mount("#app");
