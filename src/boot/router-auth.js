import { LocalStorage } from 'quasar'

// "async" is optional
export default ({ router }) => {
  // something to do
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    if(!loggedIn && to.path !== '/auth') {
      next('/auth')
    } else {
      next()
    }
  })
}
