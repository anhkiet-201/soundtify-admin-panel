<template>
  <div class="container-fuild">
    <h1>Dashboard</h1>
    <div class="d-flex justify-content-around">
        <div class="col-5"></div>
        <div class="col-5"></div>
    </div>
    <div class=" pt-2">
      <div class="col-lg-12 border border-3 custom-rounded">
        <span class="fs-5 p-2" >Revenue by month</span>
        <canvas id="revenueChart" height="70"></canvas>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-lg-6"><canvas id="bar"></canvas></div>
    <div class="col-lg-6"><canvas id="pie"></canvas></div>
    </div>
  </div>
 
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.lineChart();
            this.barChart();
            this.pieChart();
        },
    lineChart() {
      const ctx = document.getElementById("revenueChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.chartData.map((item) => `Month ${item.month}`),
          
          
          datasets: [
            {
              label: "Revenue",
              backgroundColor: "rgba(115, 134, 213)",
              borderColor: "#2b2c34",
              borderWidth: 2,
              data: this.chartData.map((item) => item.revenue),
            },
          ],
        },
        
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    barChart() {
      const ctx = document.getElementById("bar").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.chartData.map((item) => `Month ${item.month}`),
          datasets: [
            { 
              label: "Revenue",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              data: this.chartData.map((item) => item.revenue),
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    pieChart() {
      const ctx = document.getElementById("pie").getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: this.chartData.map((item) => `Month ${item.month}`),
          datasets: [
            {
              label: "Revenue",
              backgroundColor: [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
              ],
              borderWidth: 1,
              data: this.chartData.map((item) => item.revenue),
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    },

}
</script>

<style>

</style>