<template>
  <div class="home">
    <h1>Home View</h1>
    <h2>{{ homedata }}</h2>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      homedata: 'homedata'
    }
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  background-color: darkgray;
}
</style>

