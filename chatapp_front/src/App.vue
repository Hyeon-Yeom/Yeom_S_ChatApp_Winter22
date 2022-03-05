<template>
  <section id="app">
    <header>
      <h1 class="hidden">Welcome to Chat App!</h1>
      <h2 class="hidden">Chat App With Vue CLI, Express and Socket.io</h2>
      <a class="hogwartsLogo" href="https://www.freepnglogos.com/pics/hogwarts" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png" width="100" alt="hogwarts logo shadopro deviantart" /></a>
      <h2>Our Hearts Are Bigger Than Our Fear, Gryffindor</h2>
      <h3>*** Slytherin Is Not Welcome here. ***</h3>
    </header>

    <h3>[ HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY ]</h3>
      <router-view></router-view>
    <h3>Don't Run With Swords In Your Mouth. - Dan Meyer</h3>
  </section>
</template>

<style>

section {
  font-family: 'Roboto';
  color: #AE0001;
}

header {
  text-align: center;
  font-family: 'roboto';
  background-image: linear-gradient(#EEBA30, #D3A625);
  padding: 3em 0.8em;
}

.hidden {
  display: none;
}

header h2 {
  font-size: 2em;
  margin-bottom: 0.8em;
}

.hogwartsLogo {
  
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