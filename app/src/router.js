import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Books from './views/Books.vue';
import BookSearch from './views/BookSearch.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/livros',
      name: 'livros',
      component: Books,
    },
    {
      path: '/adicionar',
      name: 'add',
      component: BookSearch,
    },
  ],
});
