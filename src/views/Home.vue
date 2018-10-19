<template>
  <div class="home">
    <h1>Home View</h1>
    <h2>{{ homedata }}</h2>
    <ul v-if="showstats">
      <li v-for="pessoa in pessoas">{{ pessoa.name }}</li>
    </ul>
    <button @click="handleClick" >Mostrar Pessoas</button> <br>
    <input type="text" v-model="nome"> <br>
    {{ nome }}
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      homedata: 'homedata',
      pessoas: [
        { name: 'john', age: 12 },
        { name: 'wesley', age: 11 },
        { name: 'paul', age: 13 },
        { name: 'sime', age: 10 },
      ],
      showstats: true,
      nome: ''
    }
  },
  methods: {
    handleClick() {
      if (this.showstats === true) {
        this.showstats = false;
      } else {
        this.showstats = true;
      }
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

