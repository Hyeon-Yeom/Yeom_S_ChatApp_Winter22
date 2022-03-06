<template>
  <section id="app">

    <header>
      <h1 class="hidden">Welcome to Chat App</h1>
      <h2 class="hidden">Chat App With Vue CLI, Express and Socket.io</h2>
      <a href="Greeting.vue" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png" width="100" alt="hogwarts logo shadopro deviantart" /></a>
      <h3 class="banner">Our Hearts Are Bigger Than Our Fear, Gryffindor</h3>
      <h4>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h4>
    </header>

    <router-view></router-view>
  </section>
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
  color: #886607;
  margin: 1em auto;
}

h4 {
  color: #886607;
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