<template>
    <div class="row q-mb-sm"> 
    <q-input clearable outlined :value="duedate"
    @input="$emit('update:duedate', $event)" 
    label="Due date">
        <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date :value="duedate" @input="$emit('update:duedate', $event); $refs.qDateProxy.hide()" />
            </q-popup-proxy>
        </q-icon>
        </template>
    </q-input>
    </div>
</template>
<script>
export default {
    props: ['duedate']
}
</script>