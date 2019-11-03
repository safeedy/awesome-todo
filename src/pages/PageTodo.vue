<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
      <search/>

      <sort/>
    </div>

    <p v-if="Object.keys(getTasksFiltered).length == 0">No search results</p>

    <q-scroll-area class="q-scroll-area-tasks">
      <no-task
      v-if="Object.keys(getTasksTodo).length == 0"></no-task>
      <task-todo :tasksTodo="getTasksTodo"
      v-else/>


      <task-completed :tasksCompleted="getTasksCompleted"
      v-show="Object.keys(getTasksCompleted).length > 0"
      class="q-mt-lg q-mb-xl"
      />
    </q-scroll-area>

    <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
      <q-btn
        round
        dense
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
        class="all-pointer-events"
      />
    </div>
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
    ...mapGetters('taskStore', ['getTasksTodo', 'getTasksCompleted', 'getTasksFiltered'])
  },
  components: {
    'add-task' : require('components/Tasks/Modals/AddTask.vue').default,
    'task-todo' : require('components/Tasks/TaskTodo.vue').default,
    'task-completed' : require('components/Tasks/TaskCompleted.vue').default,
    'no-task' : require('components/Tasks/NoTask.vue').default,
    'search' : require('components/Tasks/Tools/Search.vue').default,
    'sort' : require('components/Tasks/Tools/Sort.vue').default

  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
}
</script>

<style>
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>
