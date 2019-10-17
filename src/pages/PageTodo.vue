<template>
  <q-page class="q-ma-md">
    <q-list bordered separator
    v-show="Object.keys(getTasksTodo).length > 0"
    >
      <task 
        v-for="(task, key) in getTasksTodo"
        :key="key"
        :task="task"
        :id="key"></task>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        dense
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('taskStore', ['getTasksTodo'])
  },
  components: {
    'task' : require('components/Tasks/Task.vue').default,
    'add-task' : require('components/Tasks/Modals/AddTask.vue').default
  }
}
</script>

<style lang="stylus" scoped>

</style>
