<template>
  <div id="app">
    <h1>{{ foo }}</h1>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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

</style>
