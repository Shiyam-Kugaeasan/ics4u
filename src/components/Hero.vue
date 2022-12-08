<script setup></script>

<template>
<div class="hero">
    <p class="text">There are movies here.</p>
</div>
</template>

<style scoped>
.hero {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-image: url("hero-background.jpg");
}

.text {
    z-index: 2;
}
</style>