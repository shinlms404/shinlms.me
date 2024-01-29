<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleNavigation() {
  router.push('/helloworld')
}
</script>

<template>
  <h1>sub page</h1>
  <span
    class="text-green-600 underline decoration-rose-500 cursor-pointer"
    @click="handleNavigation"
  >
    /helloworld
  </span>
</template>
