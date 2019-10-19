<template>
  <q-page class="q-ma-md">
    <no-task
     v-if="Object.keys(getTasksTodo).length == 0"></no-task>
    <task-todo :tasksTodo="getTasksTodo"
    v-else/>


    <task-completed :tasksCompleted="getTasksCompleted"
    v-show="Object.keys(getTasksCompleted).length > 0"
    class="q-mt-lg"
    />

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
    ...mapGetters('taskStore', ['getTasksTodo', 'getTasksCompleted'])
  },
  components: {
    'add-task' : require('components/Tasks/Modals/AddTask.vue').default,
    'task-todo' : require('components/Tasks/TaskTodo.vue').default,
    'task-completed' : require('components/Tasks/TaskCompleted.vue').default,
    'no-task' : require('components/Tasks/NoTask.vue').default

  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
