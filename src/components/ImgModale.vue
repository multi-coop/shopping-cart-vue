<template>
    <section>
        <div class="buttons">
            <b-button
                label="Zoom"
                type="is-black"
                size="is-medium"
                @click="isImageModalActive = true"/>
        </div>

        <b-modal v-model="isImageModalActive">
            <p class="image is-4by3">
                <img :src="imgLink">
            </p>
        </b-modal>

    </section>
</template>

<script>

export default {
    name : 'ImgModale',
    data() {
        return {
            isImageModalActive: false,
            isCardModalActive: false
        }
    },
    props : {
        imgLink : {
            type : String,
            default : String
        }
    }
}
</script>

<style scoped>
img{
    max-width: fit-content;
    margin: auto;
}
</style>