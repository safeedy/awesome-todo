<template>
    <q-input outlined 
    v-model="searchField" 
    label="Search"
    v-select-all
    class="col">
        <template v-slot:append>
          <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
</template>
<script>
import { selectAll } from 'src/directives/directive-select-all'
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('taskStore', ['search']),
        searchField: {
            get() {
                return this.search
            },
            set(value) {
                this.setSearch(value)
            }
        }
    },
    methods: {
        ...mapActions('taskStore', ['setSearch'])
    },
    directives: {
        selectAll
    }
}
</script>