<template>
    <q-card>
      <modal-header>Add Task</modal-header>

      <q-form
        @submit="onSubmit"
      >
        <q-card-section>
          <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName"/>
          <modal-due-date :duedate.sync="taskToSubmit.dueDate"/>
          <modal-due-time v-if="taskToSubmit.dueDate" :duetime.sync="taskToSubmit.dueTime"/>
        </q-card-section>
        <modal-buttons/>
      </q-form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'
export default {
    mixins: [mixinAddEditTask],
    data() {
      return {
        taskToSubmit: {
          name: '',
          completed: false,
          dueDate: '',
          dueTime: ''
        }
      }
    },
    methods: {
      ...mapActions('taskStore', ['addTask']),
      submitTask() {
        this.addTask(this.taskToSubmit)
        this.$emit('close')
      }
    }
}
</script>