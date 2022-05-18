<template>
    <div class="wrapper">
        <h1>{{ selectedArticle.title }} </h1>
        <h2>Category : {{ selectedArticle.category }} </h2>
        <img 
           :src="selectedArticle.image" alt="" srcset="">
        <h2>Description : </h2>
        <p> {{ selectedArticle.description }}</p>
        <h2> {{ selectedArticle.price }}€ </h2>

        <button>Ajouter</button>
        <router-link to="/"><button class="goback">Retour à la liste</button></router-link>
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
        console.log(this.selectedArticle)
    }

}
</script>

<style scoped>
.wrapper{
    border: 1px solid black;
    width: 40vw;
    margin: auto;
    box-sizing: border-box;
    padding: 2%;
    flex-wrap: wrap
}

img{
    max-width: 40%;
}

button{
    font-weight: bold;
    padding: 1%;
    width: 5vw;
    margin: 2%;
}
.goback{
    width: fit-content;
}
</style>