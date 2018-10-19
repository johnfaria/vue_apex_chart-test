<template>
  <div id="app">
    <TheNavBar/>
    <TheSection/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
import TheSection from "./components/TheSection.vue";


export default {
  data() {
    return {
      titulo: "Meu título"
    }
  },
  components:{
    TheNavBar,
    TheFooter,
    TheSection
  }
};
</script>

<style>
#app {
  /* text-align: center; */
  color: #2c3e50;
}
</style>
