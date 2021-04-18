import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Sidebar from "./views/Sidebar.vue";
import TeamSection from "./views/TeamSection.vue";
import LoginPage from "./views/Login.vue";
import SupportPage from "./views/Support.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
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
    },
    component: Sidebar,
  },
  {
    path: "/teams",
    meta: {
      title: "Team Section",
    },
    component: TeamSection,
  },
  {
    path: "/login",
    meta: {
      title: "Login Page",
    },
    component: LoginPage,
  },
  {
    path: "/support",
    meta: {
      title: "Contact Support",
    },
    component: SupportPage,
  },
  { path: "/:path(.*)", component: NotFound },
];
