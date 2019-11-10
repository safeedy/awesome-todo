<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
            <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
            </template>
            {{ tab | titleCase }} to access your todos anywhere
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input 
            class="col" 
            outlined 
            v-model="formData.email" 
            ref="email"
            :rules="[ val => isValidEmail(val) || 'Please enter a valid email address']"
            label="Email"
            lazy-rules
            stack-label />
        </div>

        <div class="row q-mb-md">
            <q-input 
            class="col" 
            outlined 
            ref="password"
            v-model="formData.password" 
            :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']"
            lazy-rules
            label="Password"
            type="password"
            stack-label />
        </div>
        <div class="row">
            <q-space/>
            <q-btn color="primary" :label="tab" type="submit"/>
        </div>
    </form>
</template>

<script>
export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.email.validate()
            this.$refs.password.validate()

            if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
                if(this.tab=="login") {
                    console.log("login now")
                } else {
                    console.log("register now")
                }
            }
        },
        isValidEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    },
    filters: {
        titleCase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>