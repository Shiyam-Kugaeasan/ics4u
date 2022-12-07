<script setup>
import {useRouter} from "vue-router"
</script>

<template>
<div class="header">
    <h1>Movie Site</h1>
    <br>
    <RouterLink to="/login" custom v-slot="{navigate}">
        <button @click="navigate" role="link" class="button">Login</button>
    </RouterLink>
</div>
</template>

<style scoped>
.header {
    background-color: black;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    z-index: 3;
}

.button {
    background-color: red;
    border: 5px solid black;
    border-radius: 10px;    
    /* padding-left: 10%;
    padding-right: 10%; */
    padding: 1%;
}

.button:hover {
    background-color: white;
}
</style>