<template>
    <q-list bordered separator
    v-show="Object.keys(tasksTodo).length > 0"
    >
      <task 
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"></task>
    </q-list>
</template>

<script>
export default {
    props: ['tasksTodo'],
    components: {
        'task': require('components/Tasks/Task.vue').default
    }
}
</script>