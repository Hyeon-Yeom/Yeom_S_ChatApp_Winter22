<template>
  <section id="app">

    <header>
      <h1 class="hidden">Welcome to Chat App</h1>
      <h2 class="hidden">Chat App With Vue CLI, Express and Socket.io</h2>
      <a class="hogwartsLogo" href="App.vue" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png" width="100" alt="hogwarts logo shadopro deviantart" /></a>
      <h3 class="banner">Our Hearts Are Bigger Than Our Fear, Gryffindor</h3>
      <!-- <h3>*** Slytherin Is Not Welcome here. ***</h3> -->
    </header>

    <!-- <h3>[ HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY ]</h3> -->

    <router-view></router-view>
    <!-- <h3>Don't Run With Swords In Your Mouth. - Dan Meyer</h3> -->
  </section>

  <!-- <h2>We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. This is the chat room for Gryffindor student.</h2> -->

</template>

<style>

section {
  font-family: 'Roboto';
  color: #000000;
}

header {
  text-align: center;
  font-family: 'roboto';
  background-image: linear-gradient(#EEBA30, #D3A625);
  padding-top: 4em;
  padding-bottom: 2.8em;
}

.hidden {
  display: none;
}

.banner {
  font-size: 1.5em;
}

p {
  display: none;
}

h3 {
  text-align: center;
  font-size: 15px;
  margin: 1em auto;
}

</style>

<script>
import Home from './views/Home.vue'

export default {
    name: 'App',

    views: {
      Home
    }
  }
</script>