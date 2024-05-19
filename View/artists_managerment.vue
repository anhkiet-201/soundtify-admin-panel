<template>
    <section class="container-fluid">
      <h1 class="ms-auto">Quản lý nghệ sĩ</h1>

        <button type="button" class="btn btn-success" @click="createArtist">Create</button>
      <table class="table text-white">
        <thead>
          <tr>
            <th scope="col-1">#</th>
            <th scope="col-1">Name</th>
            <th scope="col-1">artist</th>
            <th scope="col-1">thumbnail</th>
            <th scope="col-2 ">description</th>
            <th scope="col-1">duration</th>
            <th scope="col-1">viewer</th>
            <th scope="col-3">action</th>
          </tr>
        </thead>
        <tbody v-if="!this.isLoading">
          <tr :key="artist.id" v-for="artist in paginatedData">
            <th>{{ artist.id.length }}</th>
            <td>{{ artist.name }}</td>
            <td>{{ artist.artistId }}</td>
            <td>
              <img :src="artist.cover" alt="thumbnail-artist" class="custom-images" />
            </td>
            <td class="col-2">{{ artist.description }}</td>
            <td>{{ artist.duration }}</td>
            <td>{{ artist.listenCount }}</td>
            <td>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                @click="showPopup(artist)">
                Update
              </button>
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-md">
                  <div class="modal-content bg-module">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Update artist
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="updateartist()">
                        <div class="row justify-content-center">
                          <div class="row justify-content-center">
                            <img :src="this.updateartistData.cover" alt="" class="img custom-img-animation" />
                            <input type="file" name="" id="file" accept="image/*" @change="uploadThumbnailartist" />
                          </div>
                          <div class="row justify-content-center">
                            <!-- Name -->
                            <div class="col-md-12">
                              <div class="border border-dark m-2">
                                <div class="custom-form">
                                  <input type="text" name="text" autocomplete="off" required
                                    v-model="this.updateartistData.name" />
                                  <label for="text" class="label-name">
                                    <span class="content-name text-dark"> Name </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <!-- Description -->
                            <div class="col-md-12">
                              <div class="border border-dark m-2">
                                <div class="custom-form">
                                  <input type="text" name="text" autocomplete="off" required
                                    v-model="this.updateartistData.description" />
                                  <label for="text" class="label-name">
                                    <span class="content-name text-dark">
                                      Description
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="border border-dark m-2">
                                <div class="custom-form">
                                  <input type="file" name="text" id="fileLyric" autocomplete="off" required />
                                  <label for="text" class="label-name">
                                    <span class="content-name text-dark">
                                      Lyric
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="submit" class="btn btn-primary">
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal end -->
              <button type="button" class="btn btn-danger" @click="deleteartist(artist.id)">
                delete
              </button>
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

  export default {
    name: "tracked-managerment",

    data() {
      return {
        artistData: [],
        updateartistData :{},
        perPage: 5,
        currentPage: 1,
        isLoading : true,
      };
    },
    created() {
    },
  
    methods: {
        deleteartist(){

        },
        updateartist(){

        },
        showPopup(artist) {
        this.updateartistData = artist;
        },
        createArtist(){

        }
    },
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.artistData.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.artistData.length / this.perPage);
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
  