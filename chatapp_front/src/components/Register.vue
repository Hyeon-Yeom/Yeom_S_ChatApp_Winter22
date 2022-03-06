<template>
    <section>
        <form @submit="handleSubmit.prevent">
            <h2 class="registering">Register</h2>

            <div class="form-group">
                <label>FIRST NAME</label>
                <input type="text" class="form-control" v-model="first_name" placeholder="Type Your First Name">
            </div>

            <div class="form-group">
                <label>LAST NAME</label>
                <input type="text" class="form-control" v-model="last_name" placeholder="Type Your Last Name">
            </div>

            <div class="form-group">
                <label>PASSWORD</label>
                <input type="password" v-model="password" placeholder="Type The Password">
            </div>

            <div class="confirming form-group">
                <label>CONFIRM PASSWORD</label>
                <input type="password" v-model="password_confirm" placeholder="Confirm The Password Once Again">
            </div>

            <button class="btn">Register</button>
        </form>

        <hr class="line">

        <div class="enrolled-box">
            <h2 class="enrolled">Are You Already Enrolled?</h2>
            <button class="btn-enrolled" @click="goToHome">Welcome</button>
        </div>
    </section>
</template>

<style lang="scss">
    @import "@/assets/sass/register.scss";
</style>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    data() {
        return {
            first_name: '',
            last_name: '',
            password: '',
            password_confirm: '',
        };
    },

    methods: {
        handleSubmit() {
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                password: this.password,
                password_confirm: this.password_confirm
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

            this.$router.push('/login');
        },

        goToHome() {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>