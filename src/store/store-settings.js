import { LocalStorage } from 'quasar'

const state = {
    settings: {
        show12HourTimeFormat: false
    }
}

const mutations =  {
    setShow12HourTimeFormatMutation(state, value) {
        state.settings.show12HourTimeFormat = value
    },
    setSettings(state, settings) {
        Object.assign(state.settings, settings)
    }
}

const actions = {
    setShow12HourTimeFormat({ commit, dispatch }, value) {
        commit('setShow12HourTimeFormatMutation', value)
        /* native javascript */
        //localStorage.setItem('show12HourTimeFormat', value)

        /* call another action within an action with dispatch */
        dispatch('saveSettings')
    },
    saveSettings({ state }) {
        /* using quasar LocalStorage plugin*/
        LocalStorage.set('settings', state.settings)
    },
    getSettings({ commit }) {
        let settings = LocalStorage.getItem('settings')
        if(settings) {
            commit('setSettings', settings)
        }
    }
}

const getters =  {
    getSettings: (state) => {
        return state.settings
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}