import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Admin",
      component: () => import("../src/components/BaseLayout/Drawer.vue"),
      meta: {
        requireAuth: true,
        title: "Admin",
      },
      //child components
      children: [
        {
          path: "/",
          name: "AdminDashboard",
          component: () =>
            import("/src/components/Tabs.vue"),
          meta: {
            title: "Admin Dashboard ",
          },          
        },
        {
          path: "/Tabs2",
          name: "AdminDashboard",
          component: () =>
            import("/src/components/Tabs2.vue"),
          meta: {
            title: "Admin Dashboard ",
          },          
        },

      ],
    },
  
  ],
});
//route guard
//router.beforeEach(async (to, from, next) => {
//  if (to.matched.some((record) => record.meta.requireAuth)) {
//    if (!JSON.parse(localStorage.getItem("token"))) {
//      next({
//        name: "Login",
//      });
//    } else {
//      next();
//    }
//  } else {
//    next();
//  }
//});
export default router;