<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Data Binding</router-link> |
    <router-link to="/twoBinding">Two Data Binding</router-link> |
    <router-link to="/conditionalLoop">Conditional Loop</router-link> |
    <router-link to="/lifecycleHook">Lifecycle Hook</router-link> |

  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: "App",
    created() {
      document.title = "Pertemuan 13";
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
