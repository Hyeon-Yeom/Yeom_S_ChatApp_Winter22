<template>
    <section>
        <h1 class="hidden">Login Component</h1>

        <div>
            <form>
                <h2 class="loggingIn">Log In</h2>

                <div class="username form-group">
                    <label for="username">USERNAME</label>
                    <input class="form-control" name="username" v-model="username" placeholder="Type Your Username.">
                </div>

                <div class="password form-group">
                    <label for="password">PASSWORD</label>
                    <input class="form-control" name="password" type="password" placeholder="Type Your Password.">
                </div>

                <button class="btn btn-primary btn-block">Log In</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
    @import "@/assets/sass/login.scss";
</style>

<script>
export default {
    name: 'Login'
}
</script>