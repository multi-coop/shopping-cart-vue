<template>
    <div class="wrapper">
        <h1> {{ articleInfo.title }} </h1>
        <img :src="articleInfo.image" alt="" srcset="">
        <h2> {{ articleInfo.price }}€ </h2>

        <button @click="incrementCount">Ajouter</button>
        <button>Voir</button>

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
    width: 40vw;
    margin: auto;
    box-sizing: border-box;
    padding: 2%;
    flex-wrap: wrap;
    margin-bottom: 2%;
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
</style>