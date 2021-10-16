import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Sidebar from "./views/Sidebar.vue";
import TeamSection from "./views/TeamSection.vue";
import SupportPage from "./views/Support.vue";
import Login from "./views/Login.vue";
import DashboardPage from "./views/Dashboard.vue";
import Blog from "./views/Blog.vue";

import LayoutDashboard from "./layouts/AppLayoutDashboard.vue";
import LayoutHome from "./layouts/AppLayoutHome.vue";
import LayoutLogin from "./layouts/AppLayoutLogin.vue";
import LayoutArticle from "./layouts/AppLayoutArticle.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: { title: "Home", layout: LayoutDashboard, showLink: false },
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    meta: {
      title: "Dashboard",
      layout: LayoutDashboard,
      showLink: true,
    },
    component: DashboardPage,
  },
  {
    name: "Teams",
    path: "/teams",
    meta: {
      title: "Team Section",
      layout: LayoutDashboard,
      showLink: true,
    },
    component: TeamSection,
  },
  {
    name: "Sidebar Component",
    path: "/sidebar",
    meta: {
      title: "Sidebar",
      layout: LayoutHome,
      showLink: false,
    },
    component: Sidebar,
  },
  {
    name: "Login",
    path: "/login",
    meta: {
      title: "Login Page",
      layout: LayoutLogin,
      showLink: true,
    },
    component: Login,
  },
  {
    name: "Support",
    path: "/support",
    meta: {
      title: "Contact Support",
      layout: LayoutDashboard,
      showLink: true,
    },
    component: SupportPage,
  },
  {
    name: "Blog",
    path: "/blog",
    meta: { title: "Blog", layout: LayoutArticle, showLink: true },
    component: Blog,
  },
  {
    name: "Not Found",
    path: "/:path(.*)",
    component: NotFound,
    meta: {
      showLink: false,
    },
  },
];
