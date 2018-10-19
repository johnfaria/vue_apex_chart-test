<template>
    <div>
     <apexcharts width="550" type="bar" :options="chartOptions" :series="series"></apexcharts>
     <div>
       <button @click="updateChart">Update!</button>
    </div>
 
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          animations: {
            enabled: false,
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  methods: {
    updateChart() {
      this.$apexcharts.exec("vuechart-example", "updateSeries", [
        {
          data: [40, 55, 65, 11, 23, 44, 54, 33]
        }
      ]);
    }
  }
};
</script>

<style>
</style>
