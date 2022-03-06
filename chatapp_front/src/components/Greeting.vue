<template>
    <section>
        <h1 class="hidden">Greeting Message</h1>
        <div>
            <h2 class="hello">Welcome, Gryffindor!</h2>
        </div>

        <button class="btn-join" @click="goToRegister">JOIN
        </button>
    </section>
</template>

<style lang="scss">
    @import "@/assets/sass/greeting.scss";
</style>

<script>
export default {
    name: 'Greeting',

methods: {
    goToRegister() {
        this.$router.push({ name: "Register" })
        }
    }
}
</script>