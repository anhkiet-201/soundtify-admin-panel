<template>
  <section class="container-fluid">
    <h1 class="ms-auto">Report managerment</h1>
    <table class="table text-dark">
      <thead>
        <tr>
          <th scope="col-1">#</th>
          <th scope="col-1">Name</th>
          <th scope="col-1">num of report</th>
          <th scope="col-1">thumbnail</th>
          <th scope="col-2 ">user report</th>
          <th scope="col-3">action</th>
        </tr>
      </thead>
      <tbody v-if="!this.isLoading">
        <tr :key="flag" v-for="flag in paginatedData">
          <th>1</th>
          <td>{{ flag.song.name }}</td>
          <td>{{ flag.numOfreport }}</td>
          <td>
            <img :src="flag.song.cover" alt="thumbnail-flag" class="custom-images" />
          </td>
          <td class="col-2">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="this.flagDescription(flag.reportFlags)">
              See details
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">User report</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Report Decription</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr :key="reportFlag" v-for="reportFlag in description">
                          <th scope="row">1</th>
                          <td>{{ reportFlag.user.name }}</td>
                          <td>{{ reportFlag.reason }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteflag(flag)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" v-for="page in totalPages" :key="page">
          <a class="page-link" @click="changePage(page)" href="#">{{ page }}</a>
        </li>
      </ul>
    </nav>

  </section>
</template>

<script>
import { getAllReport, deleteReportedSong } from '../firebase/fire_store/fire_store';

export default {
  name: "tracked-managerment",

  data() {
    return {
      flagData: [],
      selectedFlag: [],
      description: {},
      perPage: 5,
      currentPage: 1,
      isLoading: true,
    };
  },
  created() {
    this.getAllData();
  },

  methods: {
    async getAllData() {
      this.isLoading = true;
      this.flagData = await getAllReport();
      console.log(this.flagData);
      this.isLoading = false;
    },
    async deleteflag(flag) {
    await deleteReportedSong(flag);
    this.getAllData();
    },
    flagDescription(flag){
        this.description = flag;
    }

  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.flagData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.flagData.length / this.perPage);
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