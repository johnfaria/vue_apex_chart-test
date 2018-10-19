<template>
  <div id="app">
    <h1>{{ foo }}</h1>
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


<style scoped>
h1 {
  color: aquamarine;
}
</style>
