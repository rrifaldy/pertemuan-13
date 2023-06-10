<template>
    <h1>Two Data Binding</h1>
    <input type="text" v-model="nama" />
    {{ nama }}
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                nama: ""
            }
        }
    }
</script>
