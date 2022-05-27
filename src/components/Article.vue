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
              @click="addArticleToCart(articleInfo.id), incrementCount(), displayNotification()" 
              :class="articleInfo.id"
              class="button is-medium btn-buy is-hidden-mobile">
              Add to cart
        </button>

        <router-link :to="`/article/${articleInfo.id}`">
           <button class="button is-outlined is-medium is-hidden-mobile">
               See details
            </button>
        </router-link>
        <!-- MOBILE VERSION -->
        <div class="mobile-btns">
            <button
                  @click="addArticleToCart(articleInfo.id), incrementCount(), displayNotification()" 
                  :class="articleInfo.id"
                  class="button is-medium btn-buy mobile is-hidden-tablet"> 
                  <span class="icon-basket"></span> 
            </button>


     <router-link :to="`/article/${articleInfo.id}`">
        <button class="button is-outlined is-medium mobile is-hidden-tablet">
            <span class="icon-view-show"></span> 
         </button>
     </router-link>

        </div>

    </div>
</template>

<script>
import {mixinAddArticles} from '@/mixins/mixins'
import { mapActions } from 'vuex'
export default{
    name: 'ArticleItem',
    mixins : [mixinAddArticles],
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },
    async mounted(){
        const API = 'https://fakestoreapi.com/products'
        // const data = await fetch(API)
        // const response = await data.json()
        // console.log(response)   
        mountingAPI(API) 
    },
    methods : {
        ...mapActions(['mountingAPI'])
    }
}
</script>

<style scoped>
.wrapper{
    width: 30vw;
    min-width: 30vw;
    box-sizing: border-box;
    padding: 2%;
    height:58.5vh;
    overflow-y: scroll;
    border: 1px solid #D0C9C0;
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
    max-width: 9vw;
    width:9vw;
    max-height: 22vh;
    height: 22vh;
}

button{
    font-weight: bold;
    margin: 2%;
}
.btn-buy{
    background-color: #6D8B74;
    color: white; 
}
/*-- MEDIA QUERIES ---------- */
@media(max-width: 1024px){
    .wrapper{
       width: 40vw;
    }

    img{
        width: fit-content;
        max-width: 20vw;
    }
}

@media(max-width: 425px){
    .wrapper{
       width: 80vw;
    }

    img{
        width: fit-content;
        max-width: 55vw;
    }
}
/*------- ICONMOON CSS ----- */
.icon-basket:before {
  content: "\e901";
}

.icon-ecommerce:before {
  content: "\e901";
}

.icon-shopping-cart:before {
  content: "\e900";
}
.icon-view-show:before {
  content: "\e902";
}
/*------- END OF ICONMOON CSS ----- */
</style>