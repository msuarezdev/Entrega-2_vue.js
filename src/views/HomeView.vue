<template>
  <div class="home">
    <navbar />
    <carousel />
    <products />
  </div>
</template>

<script>

import carousel from '@/components/HCarousel.vue'
import products from '@/components/Products.vue'


export default {
  name: 'HomeView',
  components: {
    carousel, 
    products,
  }
}
</script>
