<template>
  <div class="about">
    <h1>About route</h1>
    <h2>{{ aboutdata }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutdata: 'aboutdata'
    }
  }
}
</script>

<style scoped>
div {
  background-color: violet;
}
</style>
