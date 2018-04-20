import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main/index.vue";
import Login from "./views/Login/index.vue";
import Register from "./views/Register/index.vue";
import Admin from "./views/Main/Admin/index.vue";
import Tickets from "./views/Main/Tickets/index.vue";
import Buyins from "./views/Main/BuyIns/index.vue";
import Profile from "./views/Main/Profile/index.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/app",
      component: Main,
      children: [
        {
          path: "tickets",
          component: Tickets,
          props: {
            title: "Tickets"
          }
        },
        {
          path: "buyins",
          component: Buyins,
          props: {
            title: "My Buyins"
          }
        },
        {
          path: "profile",
          component: Profile,
          props: {
            title: "Profile"
          }
        },
        {
          path: "admin",
          component: Admin,
          props: {
            title: "Admin"
          }
        },
        {
          path: "*",
          redirect: "/app/tickets"
        }
      ]
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});
router.beforeEach((to, from, next) => {
  next();
});
router.beforeResolve((to, from, next) => {
  next();
});
export default router;
