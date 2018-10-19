<template>
  <div class="home">
    <div class="container">
      <h1 class="title">Home View</h1>
      <h2 class="subtitle">{{ homedata }}</h2>
      <div class="container">
        <ol v-if="showstats">
          <li type="1" v-for="pessoa in pessoas" v-bind:key="pessoa.id">{{ pessoa.name }}</li>
        </ol>
      </div>
      <button class="button is-link" v-on:click="handleClick">Mostrar Pessoas</button> <br>
      <input type="text" v-model="nome"> <br>
      {{ nome }}
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {

  data() {
    return {
      homedata: "homedata",
      pessoas: [
        { id: 0, name: "beltrano", age: 20 },
        { id: 1, name: "john", age: 12 },
        { id: 2, name: "wesley", age: 11 },
        { id: 3, name: "paul", age: 13 },
        { id: 4, name: "sime", age: 10 }
      ],
      showstats: true,
      nome: ""
    };
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
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.home {
  background-color: cadetblue;
}
</style>

