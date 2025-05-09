import { PAGE_ROUTES } from "@/shared/config";
import type { RouterConfig } from "@nuxt/schema";
// import { AboutPage } from "@/views/AboutPage";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "home",
      path: PAGE_ROUTES.home.link,
      meta: {
        header: "main",
      },
      component: () => import("@/pages/index.vue").then((r) => r.default || r),
    },
    {
      name: "scroll",
      path: '/scroll',
      component: () => import("@/pages/scroll.vue").then((r) => r.default || r),
    },
    {
      name: "about",
      path: PAGE_ROUTES.about.link,
      component: () =>
        import("@/views/AboutPage/ui/AboutPage.vue").then((r) => r.default || r),
      // component: () => AboutPage.then((r: typeof AboutPage) => r.default || r),
      // component: () => import("@/pages/about.vue").then((r) => r.default || r),
    },
    {
      name: "works",
      path: PAGE_ROUTES.works.link,
      component: () =>
        import("@/views/WorksPage/ui/WorksPage.vue").then((r) => r.default || r),
    },
    {
      name: "archieve",
      path: PAGE_ROUTES.archieve.link,
      component: () =>
        import("@/views/ArchievePage/ui/ArchievePage.vue").then((r) => r.default || r),
    },
    {
      name: "contact",
      path: PAGE_ROUTES.contact.link,
      component: () =>
        import("@/views/ContactPage/ui/ContactPage.vue").then((r) => r.default || r),
    },
    {
      name: "price",
      path: PAGE_ROUTES.price.link,
      component: () =>
        import("@/views/CountPage/ui/CountPage.vue").then((r) => r.default || r),
    },
    {
      name: "agreement",
      path: PAGE_ROUTES.agreement.link,
      component: () =>
        import("@/views/AgreementPage/ui/AgreementPage.vue").then((r) => r.default || r),
    },
  ],
} satisfies RouterConfig;
