<template>
  <div class="about">
    <div class="container">
      <h1 class="title">About route</h1>
      <h2 class="subtitle">{{ aboutdata }}</h2>
    </div>
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
