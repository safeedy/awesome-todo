<template>
    <li>
        <div>{{ index }} - <slot></slot></div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="doDeleteTask(index)">X</button>
    </li>
</template>

<script>
export default {
    props: ['task', 'index', 'parentDeleteTask'],
    methods: {
        doDeleteTask(index) {
            this.parentDeleteTask(index)
        }
    }
}
</script>

<style>

</style>