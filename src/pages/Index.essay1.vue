<template>
  <q-page padding>
    <button @click="counter++"> {{ counter }}</button>
    <br/>
    <input type="text" 
    v-model="message" 
    @keyup.esc="clearMessage" 
    @keyup.enter="alertMessage"
    v-autofocus
    :class="{ 'error' : message.length > 22}"
    :style="errorStyle"
    ref="messageInput">

    <button @click="clearMessage">Clear</button>

    <div>{{ message.length }}</div>


    <h5 class="border-grey"
    v-if="message.length"> {{ message }}</h5>
    <h6 v-else>No message entered</h6>

    <hr>

    <p>Uppercase message : {{ messageUppercase }}</p>
    <p>Lowercase message : {{ message | messageLowerCase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love vuejs",
      counter: 0
    }
  },
  computed: {
      messageUppercase() {
        console.log("message uppercase was fired")
        return this.message.toUpperCase()
      },
      errorStyle() {
        if(this.message.length > 28){
          return {
            'font-weight': 'bold'
          }
        }
      }
  },
  methods: {
    clearMessage () {
      this.message = ''
    },
    alertMessage() {
      alert(this.message)
    }
  },
  filters: {
    messageLowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus()
      }
    }
  }, 
  mounted(){
    this.$refs.messageInput.className = 'bg-green'
  }
}
</script>

<style lang="stylus" scoped>
.border-grey {
  border: 1px solid green;
}
input, button {
  font-size: 36px;
}
.error {
  color: red;
  background : pink;
}
</style>
