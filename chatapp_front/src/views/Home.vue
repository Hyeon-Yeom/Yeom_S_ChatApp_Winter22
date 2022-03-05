<template>
  <section id="welcome-wrapper">
  <h1 class="hidden">Sign In</h1>
  <h2>We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. This is the chat room for Gryffindor student.</h2>

  <input type="text" name="username" v-model="username" placeholder="Your Name">

  <div>
    <button
      :class="{ 'disabled': canJoin }"
      :disabled='canJoin'
      @click="goToChat"
    >Join Chat!</button>
    <button @click="goToChat">Join Anonymously</button>
  </div>

  </section>
</template>

<script>
export default {
  name: "TheLoginPage",
  
  data() {
    return {
      loggedIn: false,
      username: ''
    }
  },

  computed: {
    canJoin: function() {
      // check the value of the input - if it's blank, can't join the chat.
      return (this.username.trim() === "")
    }
  },

  methods: {
    goToChat() {
      this.$router.push({ name: "Chat", params: { chatUserName: this.username || "anonymous" }});
      // || means "Or"
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/home.scss";
</style>