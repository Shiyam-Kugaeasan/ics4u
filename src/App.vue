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
  background-color: rgb(63, 63, 63);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.app {
  width: 100%;
  height: 100%;
}
</style>