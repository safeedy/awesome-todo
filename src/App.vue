<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('settingsStore', ['getSettings']),
    ...mapActions('authStore', ['handleAuthStateChangeAction'])
  },
  mounted() {
    this.getSettings()
    this.handleAuthStateChangeAction()
  }
}
</script>
