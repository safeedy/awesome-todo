import { uid } from 'quasar'
import Vue from 'vue'

const state = {
    settings: {
        show12HourTimeFormat: false
    }
}

const mutations =  {
    setShow12HourTimeFormatMutation(state, value) {
        state.settings.show12HourTimeFormat = value
    }
}

const actions = {
    setShow12HourTimeFormat({ commit }, value) {
        commit('setShow12HourTimeFormatMutation', value)
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