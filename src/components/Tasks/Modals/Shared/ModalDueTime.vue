<template>
    <div class="row q-mb-sm"
    >  
    <q-input outlined clearable :value="duetime" @input="$emit('update:duetime', $event)" label="Due time">
        <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time :value="duetime" @input="$emit('update:duetime', $event)"/>
            </q-popup-proxy>
        </q-icon>
        </template>
    </q-input>
    </div>
</template>
<script>
export default {
    props: ['duetime']
}
</script>