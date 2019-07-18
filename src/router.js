import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Tasks from './views/Tasks.vue'
import Documents from './views/Documents.vue'
import ViewIPRight from './views/ViewIPRight.vue'


Vue.use(Router)

// export default new Router({
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '*',
    //   redirect: '/login',
    //   meta: {
    //     public: true
    //   }
    // },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
      meta: {
        public: false
      }
    },
    {
      path: '*',
      name: 'default',
      component: Home,
      meta: {
        public: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        public: false
      }
    },
    {
      path: '/IRRight/:IpRightId',
      name: 'ViewIPRight',
      component: ViewIPRight,
      meta: {
        public: false
      }
    },
    {
      path: '/IRRight/:Id/documents',
      name: 'documents',
      component: Documents
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

// router.beforeEach((to, from, next) => {
// // If Authentication is required

//   const currentUser = firebase.auth().currentUser
//   // const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   const publicRoute = to.matched.some(record => record.meta.public)

//   if (publicRoute) next()
//   else if (!publicRoute && !currentUser) next('login')
//   // else if (requiresAuth && !currentUser) next('login');
//   // else if (!requiresAuth && currentUser) next('home');
//   else next()
// })

export default router
