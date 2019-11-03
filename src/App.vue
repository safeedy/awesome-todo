<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('settingsStore', ['getSettings'])
  },
  mounted() {
    this.getSettings()
  }
}
</script>
