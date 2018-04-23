import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main/index.vue";
import Login from "./views/Login/index.vue";
import Register from "./views/Register/index.vue";
import Admin from "./views/Main/Admin/index.vue";
import Tickets from "./views/Main/Tickets/index.vue";
import Buyins from "./views/Main/BuyIns/index.vue";
import Profile from "./views/Main/Profile/index.vue";
import { Authenticate } from "./asyncUtil/cryptopins";
// import ACTION_CONSTANTS from "./store/ACTION_CONSTANTS";
// import store from "./store";
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
          },
          beforeEnter(to, from, next) {
            Authenticate()
              .then(() => {
                next(true);
              })
              .catch(() => {
                next("/login");
              });
          }
        },
        {
          path: "buyins",
          component: Buyins,
          props: {
            title: "My Buyins"
          },
          beforeEnter(to, from, next) {
            Authenticate()
              .then(() => {
                next(true);
              })
              .catch(() => {
                next("/login");
              });
          }
        },
        {
          path: "profile",
          component: Profile,
          props: {
            title: "Profile"
          },
          beforeEnter(to, from, next) {
            Authenticate()
              .then(() => {
                next(true);
              })
              .catch(() => {
                next("/login");
              });
          }
        },
        {
          path: "settings",
          component: Profile,
          props: {
            title: "Settings"
          },
          beforeEnter(to, from, next) {
            Authenticate()
              .then(() => {
                next(true);
              })
              .catch(() => {
                next("/login");
              });
          }
        },
        {
          path: "admin",
          component: Admin,
          props: {
            title: "Admin"
          },
          beforeEnter(to, from, next) {
            Authenticate()
              .then(() => {
                next(true);
              })
              .catch(() => {
                next("/login");
              });
          }
        },
        {
          path: "*",
          redirect: "/app/tickets"
        }
      ],
      beforeEnter(to, from, next) {
        Authenticate()
          .then(() => {
            next(true);
          })
          .catch(() => {
            next("/login");
          });
      }
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});
router.beforeEach((to, from, next) => {
  // console.log(store);
  // store.dispatch(ACTION_CONSTANTS.VERIFY_ME);
  // if (store.getters.isVerified) next();
  // elsenext('/login')
  next();
});
router.beforeResolve((to, from, next) => {
  next();
});
export default router;
