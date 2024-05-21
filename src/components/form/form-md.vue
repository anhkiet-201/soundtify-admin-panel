<template>
    <form action="" @submit.prevent="onSubmit">
        <div class="mx-2">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Song name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="songName">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Song thumbnail url</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""
                    v-model="songThumbnail">
                <input type="file" class="form-control" id="exampleFormControlInput1" placeholder=""
                    @change="onThumbnailChange">
            </div>
            <div class="col-8 px-1"> <label for="exampleFormControlInput1" class="form-label">Upload Track {{songUrl}}</label>
                <input type="file" class="form-control" id="exampleFormControlInput1" placeholder=""
                    @change="onSongChange">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Song description</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="songDes">
            </div>
            <div class="mb-3 d-flex">
                <div class="col-3 pe-2"> <label for="exampleFormControlInput1" class="form-label">Song thumbnail
                        url</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                </div>
                <div class="col-9 ps-2"> <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3 d-flex">
                <div class="col-8 px-1"> <label for="exampleFormControlInput1" class="form-label">Search a
                        Artist</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""
                        v-model="filterInput" @input="onInput">
                </div>
                <div class="col-4 px-1"> <label for="exampleFormControlInput1" class="form-label">Select a
                        Artist</label>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Artists
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a :key="artist.id" class="dropdown-item" href="#" v-for="artist in artistList">{{artist.name}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 d-flex">
                <div class="col-8 px-1"> <label for="exampleFormControlInput1" class="form-label">Upload Track</label>
                    <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="">
                </div>
                <div class="col-4 px-1"> <label for="exampleFormControlInput1" class="form-label">Upload
                        Thumbnail</label>
                    <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="">
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button class="btn btn-success" type="submit">Create</button>
        </div>

    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Artist } from '../../types/artist';
import { Song } from '../../types/song';
import { apiRepository } from '../../di/injector';
import { debounce } from 'chart.js/helpers';
import { v4 } from 'uuid';
import { uploadSingleFile } from '../../firebase/fire_storage/fire_storage'

const props = defineProps<{
    song?: Song,
    artist?: Artist
}>()

const songId = props.song?.id ?? v4();

const songUrl = ref(props.song?.url);

var songToken = props.song?.token;

const songName = ref(props.song?.name ?? "")

const songDes = ref(props.song?.description ?? "")

const songThumbnail = ref(props.song?.cover ?? "")

const artistList = ref<Artist[]>([])

// const artistName = ref(props.artist?.name ?? "")

// const artistDes = ref(props.artist?.description ?? "")

// const artistThumbnail = ref(props.artist?.thumbnail ?? "")

const onFilter = (value: string) => {
    apiRepository.getAllArtist(value.toString()).then((e) => {
        artistList.value = e;
    });
}

const filterDebounce = debounce(onFilter, 300);

const filterInput = ref("");

apiRepository.getAllArtist().then((e) => {
    artistList.value = e;
});

const onInput = () => {
    filterDebounce(filterInput.value);
}

const onThumbnailChange = async (event: { target: { files: any[]; }; }) => {
    let file = event.target.files[0];
    if(file == null) return;
    let url = await uploadSingleFile(`Song/${songId}/cover/${file.name}`, file);
    songThumbnail.value = url;
}

const onSongChange = async (event: { target: { files: any[]; }; }) => {
    let file = event.target.files[0];
    if (file == null) return;
    let url = await uploadSingleFile(`Song/${songId}/${file.name}`, file);
    const parseUrl = url.split("&token=");
    songUrl.value = parseUrl[0];
    songToken = parseUrl[1];
} 

</script>

<style></style>