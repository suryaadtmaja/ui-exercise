import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Sidebar from "./views/Sidebar.vue";
import TeamSection from "./views/TeamSection.vue";
import SupportPage from "./views/Support.vue";
import Login from "./views/Login.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About", layout: "AppLayout" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/sidebar",
    meta: {
      title: "Sidebar",
      layout: "AppLayoutHome",
    },
    component: Sidebar,
  },
  {
    path: "/teams",
    meta: {
      title: "Team Section",
      layout: "AppLayoutHome",
    },
    component: TeamSection,
  },
  {
    path: "/login",
    meta: {
      title: "Login Page",
      layout: "AppLayoutLogin",
    },
    component: Login,
  },
  {
    path: "/support",
    meta: {
      title: "Contact Support",
      layout: "AppLayoutHome",
    },
    component: SupportPage,
  },
  { path: "/:path(.*)", component: NotFound },
];
