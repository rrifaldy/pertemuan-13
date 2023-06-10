<template>
    <h1>Lifecycle Hooks</h1>
</template>

<script>
    export default {
        name: "App",
    beforeCreate() {
        console.log("Before Created")
    },
    created() {
        console.log("Created")
    },
    beforeMount() {
        console.log("Before Mount")
    },
    mounted() {
        console.log("Mounted")
    }
};
</script>