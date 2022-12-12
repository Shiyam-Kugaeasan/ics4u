<script setup>
import HeaderVue from '../components/Header.vue';
import HeroVue from '../components/Hero.vue';
import FooterVue from '../components/Footer.vue';
import { useStore } from '../store/store';

const store = useStore();
store.getMovies();
</script>

<template>
    <div class="home">
        <HeaderVue />
        <HeroVue />
        <FooterVue />
    </div>
</template>

<style scoped>
.home {
    color: white;
}
</style>