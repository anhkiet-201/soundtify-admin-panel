<template>
    <div class="text-white">
        <div class="bg-module-1 rounded py-2">
            <span class="bg-secondary custom-tag" :key="tag" v-for="tag in tagsValue">
                {{ tag }}
                <span class="material-symbols-rounded fs-7" @click="removeTag(tag)">close</span>
            </span>
        </div>
        <!-- <div class="d-block">
            <input type="text" class="col-12" placeholder="Enter your hastTag " @input="onInputChange" v-model="this.inputValue">
        </div> -->
        <div class="custom-form">
            <input type="text" name="text" id="email" required class="bg-module-1" @input="onInputChange"
                v-model="this.inputValue" />
            <label for="text" class="label-name">
                <span class="content-name text-dark"> HastTag </span>
            </label>
        </div>
    </div>

</template>


<script>
export default {
    props: {
        onValueChange: Function
    },
    data() {
        return {
            tagsValue: new Set(),
            inputValue: "",
        }
    },
    created() {

    },
    methods: {
        onInputChange() {
            if (this.inputValue.includes(',') || this.inputValue.includes(' ')) {
                const tags = this.inputValue.trim().split(" ").flatMap((value) => (value.split(','))).filter((value) => (value.length > 0))
                for (const tag of tags) {
                    this.tagsValue.add(tag)
                }
                this.inputValue = "";
                if (this.onValueChange) {
                    this.onValueChange(this.tagsValue)
                }
            }
        },
        removeTag(value) {
            this.tagsValue.delete(value)
            if (this.onValueChange) {
                this.onValueChange(this.tagsValue)
            }
        }
    }
}
</script>

<style scoped>
.custom-tag {
    width: auto;
    height: 30px;
    padding: 3px 5px 3px 5px;
    border-radius: 8px;
    margin: 10px 0px 10px 10px;
    cursor: pointer;
}
</style>