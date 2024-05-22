<template>
      <div class="col-lg-12" style="height: 100vh;">
        <h1>Track managerment</h1>
      <div class="d-flex">
        <div class="left col-5 border-end">
          <form-md></form-md>
        </div>
        <div class="right col-7">
          <table-normal></table-normal>
        </div>
      </div>
    </div> 
     <artistManagerment></artistManagerment>
  </template>
  
  <script>
import formMd from '../components/form/form-md.vue';
import tableNormal from '../components/table/table-normal.vue';
  export default {
    name: "tracked-managerment",
    components :{
      formMd,
      tableNormal
    },
    data() {
      return {
       
      };
    },
    created() {
    },
  
    methods: {
        deletetrack(){

        },
        updatetrack(){

        },
        showPopup(track) {
      this.updatetrackData = track;
    },
    },
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.trackData.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.trackData.length / this.perPage);
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-images {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .custom-img-animation {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    transform: scale(100%);
    transition: 0.2s ease-in;
    z-index: 998;
  }
  
  .custom-img-animation:hover {
    transform: scale(102%);
  }
  </style>
  