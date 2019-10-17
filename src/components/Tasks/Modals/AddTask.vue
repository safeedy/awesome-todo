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
export default {
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
      onSubmit() {
        this.$refs.modalTaskName.$refs.name.validate()
        if(!this.$refs.modalTaskName.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.addTask(this.taskToSubmit)
        this.$emit('close')
      }
    },
    components: {
      'modal-header' : require('components/Tasks/Modals/Shared/ModalHeader').default,
      'modal-task-name' : require('components/Tasks/Modals/Shared/ModalTaskName').default,
      'modal-due-date' : require('components/Tasks/Modals/Shared/ModalDueDate').default,
      'modal-due-time' : require('components/Tasks/Modals/Shared/ModalDueTime').default,
      'modal-buttons' : require('components/Tasks/Modals/Shared/ModalButtons').default
    }
}
</script>