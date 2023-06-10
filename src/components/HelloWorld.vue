<template>
  <h1>Nama : {{ nama }} </h1>
  <button v-on:click="changeName" id="btnChange">Change</button>
</template>

<script>
export default {
  data() {
    return {
      nama: "Rifqi",
    };
  },
  methods: {
    changeName() { 
      this.nama = "Abdul";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#btnChange {
  padding: 6px;
}
</style>
