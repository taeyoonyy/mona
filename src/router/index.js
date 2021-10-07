import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Index'),
    children: [
      {
        path: '/',
        name: 'join',
        component: () => import('@/pages/default/Join.vue')
      }
    ]
  },
  {
    path: '/memo',
    component: () => import('@/layouts/leftNav/Index'),
    children: [
      {
        path: '/',
        name: 'memo',
        component: () => import('@/pages/leftNav/Memo.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
