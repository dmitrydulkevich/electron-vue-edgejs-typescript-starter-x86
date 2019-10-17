import { RouteConfig } from 'vue-router';

import home from '@/components/home.vue';
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const about = () => import(/* webpackChunkName: "about" */ '@/components/about.vue');

const routes: RouteConfig[] = [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ];

export default routes;
