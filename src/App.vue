<script setup>
import HelloWorld from './components/HelloWorld.vue';
import EventHandler from './components/EventHandle.vue';

tabs = ['HelloWorld', 'EventHandler'];
currentTab = 'HelloWorld';
</script>

<template>
  <!-- <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
    {{ tab }}
  </button> -->
  <HelloWorld msg="Halo Bang" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
