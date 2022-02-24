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
          name: "Admin",
          component: () =>
            import("/src/components/Dashboard.vue"),
          meta: {
            title: "Admin Dashboard",
          },          
        },
        {
          path: "/Inbox",
          name: "Inbox",
          component: () =>
            import("/src/components/Inbox.vue"),
          meta: {
            title: "Inbox ",
          },          
        },
        {
          path: "/Calender",
          name: "Calender",
          component: () =>
            import("/src/components/Calender.vue"),
          meta: {
            title: "Calender",
          },          
        },
        {
          path: "/MarketMaker",
          name: "MarketMaker",
          component: () =>
            import("/src/components/MarketMaker.vue"),
          meta: {
            title: "MarketMaker",
          },          
        },
        {
          path: "/ReservationManager",
          name: "ReservationManager",
          component: () =>
            import("/src/components/ReservationManager.vue"),
          meta: {
            title: "ReservationManager",
          },          
        },
        {
          path: "/Performance",
          name: "Performance",
          component: () =>
            import("/src/components/Performance.vue"),
          meta: {
            title: "Performance",
          },          
        },
        {
          path: "/Property",
          name: "Property",
          component: () => import("/src/components/PropertyForms/FormTabs.vue"),
          meta: {
            title: "Property",
          },          
        },
        {
          path: "/LocalLaws",
          name: "LocalLaws",
          component: () => import("/src/components/LocalLaws.vue"),
          meta: {
            title: "LocalLaws",
          },          
        },
        {
          path: "/BaseRates",
          name: "BaseRates",
          component: () => import("/src/components/Tabs.vue"),
          meta: {
            title: "Base Rates and Discounts",
          },          
        },
        {
          path: "/Listings",
          name: "Listings",
          component: () => import("/src/components/PropertyListings.vue"),
          meta: {
            title: "Property Listings",
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