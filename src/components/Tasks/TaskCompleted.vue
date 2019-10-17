<template>
    <q-list bordered separator
    v-show="Object.keys(tasksCompleted).length > 0"
    >
      <task 
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"></task>
    </q-list>
</template>

<script>
export default {
    props: ['tasksCompleted'],
    components: {
        'task': require('components/Tasks/Task.vue').default
    }
}
</script>