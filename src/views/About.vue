<template>
  <div class="about">
    <div class="container">
      <h1 class="title">About route</h1>
      <h2 class="subtitle">{{ aboutdata }}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, perspiciatis quae! Ea soluta repellat molestiae,
        officia odit fugit vitae beatae aspernatur asperiores et placeat, omnis nulla nostrum sit maiores saepe.
      </p>
      <TheChart />
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import TheChart from "@/components/TheChart.vue";

export default {
  data() {
    return {
      aboutdata: 'aboutdata'
    }
  },
  components:{
    TheChart
  }
}
</script>

<style scoped>
div {
  background-color: violet;
}
</style>
