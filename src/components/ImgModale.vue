<template>
    <section>
        <div class="buttons">
            <button 
                    class="button is-black is-medium has-text-weight-bold is-hidden-mobile"
                    @click="isImageModalActive = true">
                Zoom in 
                <span class="icon-zoom-in icon is-large is-white ml-2"></span>
            </button>
            
            <div>
                <span class="icon-zoom-in is-hidden-tablet icon is-large"
                        @click="isImageModalActive = true">
                </span>
            </div>
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

.icon{
    font-size: 2rem;
}

</style>