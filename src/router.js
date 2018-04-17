import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main/Main.vue";
import Admin from "./views/Main/Admin.vue";
import Tickets from "./views/Main/Tickets.vue";
import Buyins from "./views/Main/Buyins.vue";
import Profile from "./views/Main/Profile.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
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
          path: "",
          redirect: "tickets"
        }
      ]
    },
    {
      path: "login",
      component: Login
    },
    {
      path: "register",
      component: Register
    }
  ]
});
export default router;
