<template>
  <!-- <nav>
    <router-link to="/welcome">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/basic">basic</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: .07);
}
</style>
