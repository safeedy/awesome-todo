<template>
    <q-banner v-if="search.length == 0" class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check " color="primary" />
      </template>
      No task to do today !
      <template v-slot:action>
        <q-btn flat color="primary" label="Add task" @click="$root.$emit('showAddTask')" />
      </template>
    </q-banner>
</template>
<script>
import { mapState} from "vuex"
export default {
    computed: {
      ...mapState('taskStore', ['search'])
    }
}
</script>