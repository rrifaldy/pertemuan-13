<template>
<h1>Conditional and Loop</h1>
<div v-if="products.length">
    <ul>
        <li v-for="item in products" :key="item.id">
            {{ item.nama }} - {{ item.harga }}
        </li>
    </ul>
</div>
<div v-else>
    <h2>Data tidak ditemukan</h2>
</div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                products:[
                    { id: 1, nama: "Product 1", harga: 12000 },
                    { id: 2, nama: "Product 2", harga: 13000 },
                    { id: 3, nama: "Product 3", harga: 14000 },
                    { id: 4, nama: "Product 4", harga: 15000 },
                    { id: 5, nama: "Product 5", harga: 16000 }   
                ]    
        }
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