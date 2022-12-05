<script setup></script>

<template>
    <div class="app">
        <RouterView />
    </div>
</template>

<style scoped>
*,
::before,
::after {
    padding: 0;
    margin: 0;
    color: white;
    box-sizing: border-box;
    background-color: grey;
}

.app {
    width: 100vw;
    height: 100vh;
}
</style>