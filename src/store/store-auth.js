import { firebaseAuth } from 'boot/firebase'

const state = {
    loggedIn: false
}

const mutations =  {
    setLoggedInMutation( state, value) {
        state.loggedIn = value
    }
}

const actions = {
    handleAuthStateChangeAction({ commit }) {
        console.log('handleAuthStateChangeAction fired')
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                commit('setLoggedInMutation', true)
            }
            else {
                commit('setLoggedInMutation', false)
            }
          });
    },
    registerUserAction({}, payload) {
        console.log('register user ', payload)
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log('response ',  response)
            })
            .catch(error => {
                console.log('error message', error.message)
            })
    },
    loginUserAction({}, payload) {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log('response ',  response)
            })
            .catch(error => {
                console.log('error message', error.message)
            })
    },
    logoutUserAction() {
        firebaseAuth.signOut()
    }
}

const getters =  {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}