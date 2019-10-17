<template>
  <q-page class="q-ma-md">
    <task-todo :tasksTodo="getTasksTodo"/>

    <hr/>

    <task-completed :tasksCompleted="getTasksCompleted"/>

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
    'task-completed' : require('components/Tasks/TaskCompleted.vue').default

  }
}
</script>

<style lang="stylus" scoped>

</style>
