<template>
  <q-page padding>
    <ul>
      <task 
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
      :parentDeleteTask="deleteTask"
      >{{ task.name }}
      </task>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate : 'today',
          dueTime: 'noon'
        },
        {
          id: 2,
          name: 'Get bananas',
          dueDate : 'today',
          dueTime: 'noon'
        },
        {
          id: 3,
          name: 'Get apples',
          dueDate : 'today',
          dueTime: 'noon'
        }
      ]
    }
  },
  methods: {
    deleteTask(index) {
      console.log(index)
      // this.tasks = this.tasks.filter( (value, idx) => {
      //     return idx !== index
      // })
      this.tasks.splice(index, 1)
    }
  },
  components: {
    'task' : require('components/task.vue').default
  }
}
</script>

<style lang="stylus" scoped>

</style>
