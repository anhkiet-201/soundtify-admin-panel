<script setup lang="ts">
import { ref } from 'vue';
import { apiRepository } from '../../di/injector';
import { Song } from '../../types/song';
import { millisecondsToHms } from '../../common/utils/date_time'
const listSong = ref<Song[]>([])
apiRepository.getAllSong().then((value) => (listSong.value = value))
</script>
<template>
    <table class="table table-hover mx-2">
        <thead>
            <tr>
                <th scope="col">Song ID</th>
                <th scope="col">Song name</th>
                <th scope="col">Song duration</th>
                <th scope="col">Upload time</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="song in listSong">
                <th scope="row">{{ song.id}}</th>
                <td>{{song.name}}</td>
                <td>{{ millisecondsToHms(song.duration)}}</td>
                <td>{{new Date(song.uploadTime).toDateString()}}</td>
                <td>@mdo</td>
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