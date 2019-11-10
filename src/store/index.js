import Vue from 'vue'
import Vuex from 'vuex'

import taskStore from './store-tasks'
import settingsStore from './store-settings'
import authStore from './store-auth'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      taskStore,
      settingsStore,
      authStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
