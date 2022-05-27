<template>
    <div class="wrapper p-3">
        <router-link :to="`/article/${articleInfo.id}`">
            <h2 class="title is-size-4-tablet is-size-5 m-4"> {{ articleInfo.title }} </h2>
        </router-link>
        
        <router-link :to="`/article/${articleInfo.id}`">
           <img :src="articleInfo.image" alt="" srcset="">
        </router-link>
        <h2 class="has-text-weight-bold is-size-4 m-4"> {{ articleInfo.price }}€ </h2>

        <button 
              @click="addArticleToCart(articleInfo.id), incrementCount(), displayNotification()" 
              :class="articleInfo.id"
              class="button m-2 has-text-weight-bold is-medium btn-buy is-hidden-mobile has-text-white">
              Add to cart
        </button>

        <router-link :to="`/article/${articleInfo.id}`">
           <button class="button m-2 has-text-weight-bold is-outlined is-medium is-hidden-mobile">
               See details
            </button>
        </router-link>
        <!-- MOBILE VERSION -->
        <div class="mobile-btns">
            <button
                  @click="addArticleToCart(articleInfo.id), incrementCount(), displayNotification()" 
                  :class="articleInfo.id"
                  class="button m-2 is-medium has-text-weight-bold btn-buy mobile is-hidden-tablet  has-text-white"> 
                  <span class="icon-basket"></span> 
            </button>
            <!-- Check indentation with Julien -->
            <router-link :to="`/article/${articleInfo.id}`">
                <button class="button m-2 has-text-weight-bold is-outlined is-medium mobile is-hidden-tablet">
                    <span class="icon-view-show"></span> 
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mixinArticles} from '@/mixins/mixins'
export default{
    name: 'ArticleItem',
    mixins : [mixinArticles],
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },
}
</script>

<style scoped>
.wrapper{
    width: 30vw;
    min-width: 30vw;
    box-sizing: border-box;
    height:58.5vh;
    overflow-y: scroll;
    border: 1px solid #D0C9C0;
}

.wrapper:hover{
    border-color: #6D8B74;;
}

.title:hover{
    color: #6D8B74;
}

img{
    width:9vw;
    max-width: 9vw;
    height: 22vh;
    max-height: 22vh;
}

.btn-buy{
    background-color: #6D8B74;
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
</style>