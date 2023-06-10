<template>
  <h1>Data Binding</h1>
  <a v-bind:href="url">Go To Instagram</a>
</template>
<script>
  export default {
    name: "App",
    data() {
          return {
            url: "http://instagram.com/rrifaldy_",
          };
        }
  };
</script>