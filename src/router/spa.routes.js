export const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: "/",
        component: () => import("pages/index.vue")
      }
    ]
  },
 
];
