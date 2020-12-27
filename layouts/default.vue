<template>
  <div class="relative h-screen w-screen overflow-x-hidden">
    <nav-bar />
    <Nuxt />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>
