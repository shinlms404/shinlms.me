<script setup></script>

<template>
  <div>
    <span class="icon-[ph--alarm-duotone]"></span>
    <span class="icon-[fluent-emoji-flat--alarm-clock]"></span>
    <span class="icon-[carbon--edit-off]"></span>
  </div>
  <RouterView />
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
