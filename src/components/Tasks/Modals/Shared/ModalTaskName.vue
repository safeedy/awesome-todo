<template>
    <div class="row q-mb-sm">
        <q-input 
        autofocus
        outlined :value="name" 
        @input="$emit('update:name', $event)"
        label="Task name" class="col"
        ref="name"
        :rules="[val => !!val || 'Field is required']"
        clearable/>
    </div>
</template>
<script>
export default {
    props: ['name']
}
</script>