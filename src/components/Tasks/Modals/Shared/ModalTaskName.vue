<template>
    <div class="row q-mb-sm">
        <q-input 
        autofocus
        outlined :value="name" 
        @input="$emit('update:name', $event)"
        label="Task name" class="col"
        ref="name"
        v-select-all
        :rules="[val => !!val || 'Field is required']"
        clearable/>
    </div>
</template>
<script>
import { selectAll } from 'src/directives/directive-select-all'
export default {
    props: ['name'],
    directives: {
        selectAll
    }
}
</script>