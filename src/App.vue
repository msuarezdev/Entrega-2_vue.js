<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>

import navbar from '@/components/nav-bar.vue'



export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>

</style>
