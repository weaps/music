import Vue from 'vue'
import Router from 'vue-router'
import MRecommend from './views/recommend/recommend'
import MSinger from './views/singer/singer'
import MSearch from './views/search/search'
import MUser from './views/user/user'
import home from './views/Home'
import about from './views/About'
import store from './store'
Vue.use(Router)
store.dispatch('setTestData', 123)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'MRecommend',
      component: MRecommend,
      // redirect: '/recommend',
      // props: true
    },
    {
      path: '/singer',
      name: 'MSinger',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: MSinger
    },
    {
      path: '/search',
      name: 'MSearch',
      component: MSearch
    },
    {
      path: '/user',
      name: 'MUser',
      component: MUser
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    }
  ]
})
