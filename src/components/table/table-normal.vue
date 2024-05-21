<script setup lang="ts">
import { ref } from 'vue';
import { apiRepository } from '../../di/injector';
import { millisecondsToHms } from '../../common/utils/date_time'
import { NativeSong } from '../../types/native_song';
const listSong = ref<NativeSong[]>([])
apiRepository.getAllSong().then((value) => {
    listSong.value = value;
})
</script>
<template>
    <table class="table table-hover mx-2">
        <thead>
            <tr>
                <th scope="col">Song name</th>
                <th scope="col">Artist</th>
                <th scope="col">Song duration</th>
                <th scope="col">Upload time</th>
                <th scope="col">Listen count</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="navtiveSong.song.id" v-for="navtiveSong in listSong">
                <th scope="row">{{ navtiveSong.song.name }}</th>
                <td>{{ navtiveSong.artist.name }}</td>
                <td>{{ millisecondsToHms(navtiveSong.song.duration) }}</td>
                <td>{{ new Date(navtiveSong.song.uploadTime).toDateString() }}</td>
                <td>{{ navtiveSong.song.listenCount }}</td>
                <td>
                    <div class="d-flex">
                        <button type="button" class="btn-primary btn-sm mx-1"><span class="material-symbols-rounded">
                                edit
                            </span></button>
                        <button type="button" class="btn-danger btn-sm mx-1"><span class="material-symbols-rounded">
                                delete
                            </span></button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style></style>