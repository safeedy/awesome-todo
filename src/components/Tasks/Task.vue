<template>
    <q-item
        @click="updateTask({ id: id, updates: { completed: !task.completed } })"
        :class="task.completed ? 'bg-green-1 ' : 'bg-orange-1'"
        clickable
       v-ripple>
        <q-item-section side top>
          <q-checkbox :value="task.completed" class="no-pointer-events" />
        </q-item-section>

        <q-item-section>
          <q-item-label> {{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section 
        side
        v-if="task.dueDate">
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="24px" class="q-mr-xs"/>
            </div>
            <div class="column">
              <q-item-label>{{ task.dueDate }}</q-item-label>
              <q-item-label>
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>

        <q-item-section side>
            <q-btn 
            flat
            round 
            color="red" 
            icon="delete"
            @click.stop="promptDelete(id)"/>
        </q-item-section>
      </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['task', 'id'],
    data() {
        return {
            myData: "here is the data"
        }
    },
    methods: {
        ...mapActions('taskStore', ['updateTask', 'deleteTask']),
        promptDelete(id) {
            this.$q.dialog({
                title: 'Confirm',
                message: 'Are you sure to delete?',
                cancel: true,
                persistent: true
            }).onOk(() => {
                console.log(this.myData)
                this.deleteTask(id)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>