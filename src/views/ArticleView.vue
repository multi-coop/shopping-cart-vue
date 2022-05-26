<template>

    <div class="wrapper m-auto">
        <div class="img-texts is-flex is-align-items-center is-justify-content-space-evenly ">
            <img
                class="mr-6" 
                :src="selectedArticle.image" 
                :alt="selectedArticle.title" 
                srcset="">

           <div class="texts is-flex is-flex-direction-column is-align-items-flex-start ">
               <h1 class="is-size-2 m-2">{{ selectedArticle.title }} </h1>
               <h2 class="is-size-3 m-5">Category : {{ selectedArticle.category }} </h2>
               <h2 class="is-size-2 m-5 bold"> {{ selectedArticle.price }}€ </h2>
               <h2 class="is-size-4 m-5 bold">Description : </h2>
               <p class="is-size-5 m-5"> {{ selectedArticle.description }}</p>
           </div>
        </div>

        <div class="buttons is-justify-content-center m-6">
            <button class="button btn-buy is-large bold">Add to cart</button>
            <router-link to="/"><button class="button is-large bold">Go back to collection</button></router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: 'ArticleView',
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },
    data(){
        return{
            selectedArticle : {},
        }
    },

    mounted(){
        this.selectedArticle = this.$store.state.allArticles.find(article => article.id === parseInt(this.$route.params.id))
        // console.log(this.selectedArticle)
    }

}
</script>

<style scoped>
.wrapper{
    width: 65vw;
    box-sizing: border-box;
}

img{
    max-width: 35%;
    height: fit-content;
}

.btn-buy{
    background-color: #6D8B74;
    color: white;
}

.bold{
    font-weight: bold;
}

</style>