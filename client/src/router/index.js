import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
import paths from './paths'

Vue.use(VueRouter)

function route(path, view, name) {
  return {
    name: name || view,
    path,
    component: (resolve) => import(
      `@/views/${view}.vue`
    ).then(resolve)
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: paths.map(path => route(path.path, path.view, path.name)).concat([{
    path: '*',
    redirect: '/'
  }]),
})

// router.beforeEach((to, from, next) => {
//   if ((store.state.userInfo.UserRights !== 1 && store.state.userInfo.UserRights !== 3) && (to.path.substr(0, 8) == '/master/' || to.path.substr(0, 10) == '/analysis/')) {
//     next(from.path)
//   } else {
//     if (to.path !== '/login') {
//       if (store.state.userInfo.isLogin) {
//         next()
//       } else {
//         next('/login')
//         // next()
//       }
//     } else if (to.path === '/login' && store.state.userInfo.isLogin) {
//       next(from.path)
//       // next()
//     } else {
//       next()
//     }
//   }
// })


export default router