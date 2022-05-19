<template>
    <div class="wrapper">
        <h2> {{ articleInfo.title }} </h2>
        <router-link :to="`/article/${articleInfo.id}`">
           <img :src="articleInfo.image" alt="" srcset="">
        </router-link>
        <h2> {{ articleInfo.price }}€ </h2>

        <button @click="incrementCount" :class="articleInfo.id">Ajouter</button>
        <router-link :to="`/article/${articleInfo.id}`">
           <button>Voir</button>
        </router-link>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    name: 'ArticleItem',
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },
    data(){
        return{

        }
    },
    methods : mapActions([
        'incrementCount',
        'decrementCount'
    ]),

    // async mounted(){
    //     const data = await fetch('https://fakestoreapi.com/products')
    //     const response = await data.json()
    //     console.log(response)    
    // }
}
</script>

<style scoped>
.wrapper{
    border: 1px solid black;
    width: 30vw;
    margin: auto;
    box-sizing: border-box;
    padding: 2%;
    margin-bottom: 2%;
    height:60vh;
    overflow-y: scroll;
    border: 1px solid grey;
    margin: 3% 15%;
}

img{
    max-width: 30%;
}

button{
    font-weight: bold;
    padding: 1%;
    width: 5vw;
    margin: 2%;
}
</style>