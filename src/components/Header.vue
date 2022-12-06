<script setup>
import {useRouter} from "vue-router"
</script>

<template>
<div class="header">
    <h1>Movie Site</h1>
    <br>
    <RouterLink to="/login" custom v-slot="{navigate}">
        <button @click="navigate" role="link">Login</button>
    </RouterLink>
</div>
</template>

<style scoped>
h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>