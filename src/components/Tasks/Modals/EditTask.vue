<template>
    <q-card>
      <modal-header>Edit Task</modal-header>

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
    props: ['task', 'id'],
    mixins: [mixinAddEditTask],
    data() {
      return {
        taskToSubmit: {}
      }
    },
    methods: {
      ...mapActions('taskStore', ['updateTask']),
      submitTask() {
        this.updateTask({
          id: this.id,
          updates: this.taskToSubmit
        })
        this.$emit('close')
      }
    },
    mounted() {
      // this.taskToSubmit = Object.assign({}, this.task)
      this.taskToSubmit = {...this.task}
    }
}
</script>