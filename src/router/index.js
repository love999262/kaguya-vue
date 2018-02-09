import Vue from 'vue';
import Router from 'vue-router';
import Kaguya from '@/components/Kaguya';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Kaguya',
      component: Kaguya
    }
  ]
});
