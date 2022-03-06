<template>
    <section>
        <h1 class="hidden">Login Component</h1>

        <div>
            <form @submit.prevent="handleSubmit">
                <h2 class="loggingIn">Log In</h2>

                <div class="username form-group">
                    <label for="username">USERNAME</label>
                    <input class="form-control" name="username" v-model="username" placeholder="Type Your Username.">
                </div>

                <div class="password form-group">
                    <label for="password">PASSWORD</label>
                    <input class="form-control" name="password" v-model="password" type="password" placeholder="Type Your Password.">
                </div>

                <button @click="goToHome" class="btn btn-primary btn-block">Log In</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
    @import "@/assets/sass/login.scss";
</style>

<script>
import axios from 'axios'

export default {
    name: 'Login',

    data() {
        return {
            username: '',
            password: ''
        };
    },

    methods: {
        handleSubmit() {
            const data = {
                username: this.username,
                password: this.password,
            };
            
            axios.post('http://localhost:1111/#/register', data)
                .then (
                    res => {
                        console.log(res)
                    }
                ) .catch(
                    err => {
                        console.log(err)
                    }
                )
        },

        goToHome() {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>