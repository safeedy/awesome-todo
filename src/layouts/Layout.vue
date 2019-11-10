<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn 
        to="/auth"
        flat
        icon-right="account_circle"
        label="Log in"
        class="absolute-right"
        />

      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab v-for="(navItem, idx) in navs" :key="idx" :name="navItem.label" :icon="navItem.icon" :label="navItem.label" :to="navItem.to" />
      </q-tabs>

      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item 
        v-for="(navItem, idx) in navs" 
        :key="idx" 
        clickable 
        class="text-grey-4"
        tag="a" 
        :to="navItem.to" 
        exact
        >
          <q-item-section avatar>
            <q-icon :name="navItem.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ navItem.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px){
    .q-footer {
      display: none
    }
  }

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
