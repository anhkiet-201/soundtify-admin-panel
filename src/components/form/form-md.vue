<template>
    <form action="" @submit.prevent="submitForm">
        <div class="mx-2">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title track</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3 d-flex">
                <div class="col-3 pe-2"> <label for="exampleFormControlInput1" class="form-label">Email address</label>
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
                <div class="col-8 px-1"> <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                </div>
                <div class="col-4 px-1"> <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Artists
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 d-flex">
                <div class="col-8 px-1"> <label for="exampleFormControlInput1" class="form-label">Upload Track</label>
                    <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="">
                </div>
                <div class="col-4 px-1"> <label for="exampleFormControlInput1" class="form-label">Upload Thumbnail</label>
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

<script>
export default {
    methods: {
        submitForm() {

        }
    }
}
</script>

<style></style>