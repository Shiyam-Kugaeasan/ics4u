<script setup>
import axios from "axios";
import Movies from "../components/Movies.vue";
</script>

<template>
<div>
  <p>Hello</p>
  <Suspense>
    <Movies />
  </Suspense>
</div>
</template>

<style scoped>

</style>