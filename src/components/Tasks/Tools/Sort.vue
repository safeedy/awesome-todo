<template>
    <q-select 
    filled 
    v-model="sortBy" 
    emit-value
    map-options
    :options="options" 
    label="Sort by" 
    stack-label 
    class="col q-ml-sm"/>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
        options: [
            {
                label: 'Name',
                value: 'name'
            },
            {
                label: 'Date',
                value: 'dueDate'
            }
        ]
        }
    },
    computed: {     
        ...mapState('taskStore', ['sort']),
        sortBy: {
            get() {
                return this.sort
            },
            set(value) {
                this.setSortBy(value)
            }
        }
    },
    methods: {
        ...mapActions('taskStore', ['setSortBy'])
    }
}
</script>
<style scoped>
    .q-select {
       flex: 0 0 112px; 
    }
</style>