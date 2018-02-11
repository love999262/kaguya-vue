import Vue from 'vue';
import Router from 'vue-router';
import Kaguya from './../views/kaguya.vue';
import path1 from './../views/path1.vue';
import path2 from './../views/path2.vue';
import path3 from './../views/path3.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Kaguya',
      component: Kaguya
    },
    {
      path: 'home',
      component: Kaguya,
      alias: '/'
    },
    {
      path: '/path1',
      name: 'path1',
      component: path1
    },
    {
      path: '/path2',
      name: 'path2',
      component: path2
    },
    {
      path: '/path3',
      name: 'path3',
      component: path3
    }
  ]
});
