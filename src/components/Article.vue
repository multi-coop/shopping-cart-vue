<template>
    <div class="wrapper">
        <router-link :to="`/article/${articleInfo.id}`">
            <h2 class="title"> {{ articleInfo.title }} </h2>
        </router-link>
        
        <router-link :to="`/article/${articleInfo.id}`">
           <img :src="articleInfo.image" alt="" srcset="">
        </router-link>
        <h2> {{ articleInfo.price }}€ </h2>

        <button 
              @click="addArticleToCart(articleInfo.id), incrementCount()" 
              :class="articleInfo.id"
              class="button is-medium btn-buy">
              Add to cart
        </button>
        <router-link :to="`/article/${articleInfo.id}`">
           <button class="button is-outlined is-medium">See details</button>
        </router-link>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import 'bulma'
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
        'decrementCount',
        'addArticleToCart'
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
    box-sizing: border-box;
    padding: 2%;
    height:60vh;
    overflow-y: scroll;
    border: 1px solid #D0C9C0;
    margin: 3%;
}
.wrapper:hover{
    border-color: #6D8B74;;
}
.title{
    font-size: 1.2rem;
}

.title:hover{
    color: #6D8B74;
}

h2{
    font-size: 1.4rem;
    font-weight:bold;
    margin: 4%;
}

img{
    max-width: 10vw;
    width:10vw;
    max-height: 23vh;
    height: 23vh;
}

button{
    font-weight: bold;
    margin: 2%;
}
.btn-buy{
    background-color: #6D8B74;
    color: white; 
}
</style>