<template>
  <div id="app">
    <h1>{{ foo }}</h1>
    <div>
      <router-link to="/home">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 'bar'
    }
  }
};
</script>


<style>
h1 {
  color: aquamarine;
}
</style>
