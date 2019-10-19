<template>
<transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
>
<div>
    <list-header bgColor="bg-green-4">Task Completed</list-header>
    <q-list bordered separator
    v-show="Object.keys(tasksCompleted).length > 0"
    >
      <task 
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"></task>
    </q-list>
</div>
</transition>
</template>

<script>
export default {
    props: ['tasksCompleted'],
    components: {
        'task': require('components/Tasks/Task.vue').default,
        'list-header': require('components/Shared/ListHeader.vue').default
    }
}
</script>