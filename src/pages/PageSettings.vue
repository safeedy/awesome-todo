<template>
  <q-page padding>
    <q-list bordered padding class="q-mb-md">
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle 
          color="blue"
          v-model="show12HourTimeFormat"
           />
        </q-item-section>
      </q-item>

    </q-list>

    <q-list bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple @click="visitOurWebsite">
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple @click="emailUs">
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { openURL } from 'quasar'
export default {
  computed: {
    ...mapGetters('settingsStore', ['getSettings']),
    show12HourTimeFormat: {
      get() {
        return this.getSettings.show12HourTimeFormat;
      },
      set(value) {
        this.setShow12HourTimeFormat(value);
      }
    }
  },
  methods: {
    ...mapActions('settingsStore', ['setShow12HourTimeFormat']),
    visitOurWebsite() {
      openURL('http://www.google.com')
    },
    emailUs() {
      window.location.href = 'mailto:hello@me.com'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
