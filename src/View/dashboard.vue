<template>
  <div class="container-fuild">
    <h1>Dashboard</h1>
    <div class="d-flex justify-content-around">
        <div class="col-4 border  btn "><h4> User Total : {{ user }}</h4></div>
        <div class="col-4 border  btn"><h4> Artist Total : {{ artist }}</h4></div>
        <div class="col-4 border  btn"><h4> Song Total : {{ songTotal }}</h4></div>
    </div>
    <div class=" pt-2">
      <div class="p-2">
        <a class="btn col-12 bg-success text-white fs-2 " href="https://dashboard.stripe.com/login?redirect=%2Ftest%2Fdashboard">Blance</a>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-lg-12"><canvas id="bar"></canvas></div>
    </div>
  </div>
 
</template>
<script>
import { totalUser , totalSong , totalArtist , songStatistical } from '../firebase/fire_store/fire_store';
import Chart from 'chart.js/auto'
export default {
    data(){
        return {
          user : 0,
          artist : 0,
          songData:[],
          songTotal :0,
        }
    },
    created(){
        this.init();
        
    },
    methods:{
       async init(){
          await  this.dataAll();

            // this.lineChart();
            this.barChart();
            // this.pieChart();
        },
      async dataAll(){
       this.user = await totalUser();
       this.songData = await songStatistical();
       this.artist = await totalArtist();
       this.songTotal = await totalSong();
      },
    // lineChart() {
    //   const ctx = document.getElementById("revenueChart").getContext("2d");
    //   new Chart(ctx, {
    //     type: "line",
    //     data: {
    //       labels: this.chartData.map((item) => `Month ${item.month}`),
          
          
    //       datasets: [
    //         {
    //           label: "Revenue",
    //           backgroundColor: "rgba(115, 134, 213)",
    //           borderColor: "#2b2c34",
    //           borderWidth: 2,
    //           data: this.chartData.map((item) => item.revenue),
    //         },
    //       ],
    //     },
        
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true,
    //         },
    //       },
    //     },
    //   });
    // },
    barChart() {
      const ctx = document.getElementById("bar").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.songData.map((item) => `${new Date(item.date).getDate()}/${new Date(item.date).getMonth()} `),
          datasets: [
            { 
              label: "Số bài hát trong tháng",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              data: this.songData.map((item) => item.numofSong),
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
    // pieChart() {
    //   const ctx = document.getElementById("pie").getContext("2d");
    //   new Chart(ctx, {
    //     type: "pie",
    //     data: {
    //       labels: this.songData.map((item) => `Month ${new Date(item.date).getMonth()}`),
    //       datasets: [
    //         {
    //           label: "Revenue",
    //           backgroundColor: [
    //             "#b91d47",
    //             "#00aba9",
    //             "#2b5797",
    //             "#e8c3b9",
    //             "#1e7145",
    //             "#1e7145",
    //             "#1e7145",
    //             "#1e7145",
    //             "#1e7145",
    //           ],
    //           borderWidth: 1,
    //           data: this.songData.map((item) => item.numofsong),
    //         },
    //       ],
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true,
    //         },
    //       },
    //     },
    //   });
    // },
    },

}
</script> -->

<style>

</style>