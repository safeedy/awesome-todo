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
        firebaseAuth.onAuthStateChanged(user => {
            if (user) {
                commit('setLoggedInMutation', true)
                this.$router.push('/')
            }
            else {
                commit('setLoggedInMutation', false)
                this.$router.replace('/auth')
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