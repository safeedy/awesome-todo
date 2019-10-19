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
export default {
    props: ['name'],
    directives: {
        selectAll: {
            inserted(el) {
                let input = el.querySelector('.q-field__native')
                input.addEventListener('focus', () => {
                    if(input.value.length) {
                        input.select()
                    }
                })
            }
        }
    }
}
</script>