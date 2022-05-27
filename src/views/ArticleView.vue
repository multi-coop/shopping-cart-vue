<template>
    <div class="wrapper m-auto">
         <!-- Notifications -->
        <div 
        :class=" $store.state.isDisplayed ? 'notification has-text-weight-bold is-success' : 'notification is-success hidden' ">
        <div class="center">Ajouté!</div>
        </div>
        <h1 class="is-size-2-tablet m-2 has-text-weight-bold">{{ selectedArticle.title }} </h1>
        <div class="img-texts is-flex is-flex-direction-row-tablet is-align-items-center-tablet is-justify-content-space-evenly-tablet ">
            <img
                :src="selectedArticle.image" 
                :alt="selectedArticle.title" 
                srcset="">

           <div class="texts">
               <h2 class="category is-size-4 is-size-3-tablet m-5">Category : {{ selectedArticle.category }} </h2>
               <h2 class=" price is-size-2 m-5 bold"> {{ selectedArticle.price }}€ </h2>
               <h2 class="description-title is-size-4 m-5 bold">Description : </h2>
               <p class="description is-size-4 has-text-left-desktop m-5"> {{ selectedArticle.description }}</p>
           </div>
        </div>

        <div class="buttons is-justify-content-center m-6 is-hidden-mobile">
            <button class="button btn-buy is-large bold"
                    @click="addArticleToCart(selectedArticle.id), incrementCount(), displayNotification()">
                    Add to cart
            </button>
            <router-link to="/"><button class="button is-large bold">Go back to collection</button></router-link>
            
        </div>
        <!-- MOBILE VERSION -->
        <div class="mobile-btns is-hidden-tablet is-flex is-flex-direction-column">
            <button
                  @click="addArticleToCart(articleInfo.id), incrementCount(), displayNotification()" 
                  :class="articleInfo.id"
                  class="button is-medium btn-buy mobile"> 
                  <span class="icon-basket"></span> 
            </button>
            <router-link to="/"><button class="button return is-medium bold mt-4">←</button></router-link>
        </div>
    </div>
</template>

<script>

import {mixinArticles} from '@/mixins/mixins'
export default{
    name: 'ArticleView',
    mixins : [mixinArticles],
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
    },
}
</script>

<style scoped>
.wrapper{
    width: 70vw;
    box-sizing: border-box;
}

.img-texts{
    display: flex;
    flex-direction: row;
}

img{
    max-width: 30%;
    height: fit-content;
    margin: auto;
    margin-right: 2rem;
}

.description-title, .category, .price{
    text-align: left;
}

.btn-buy{
    background-color: #6D8B74;
    color: white;
}

.bold{
    font-weight: bold;
}
.notification{
  position:fixed;
  z-index: 100;
  width: fit-content;
  top: 1%;
  left: 38vw;
  text-align: center;
}

.hidden{
  display: none;
}

/*----- MEDIA QUERIES ------ */
@media(max-width: 768px){
    img{
        max-width: 50%;
        margin: auto;
    }
    .description-title, .category, .price{
    text-align: center;
}

    .img-texts{
        flex-direction: column;
    }

    .texts{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    .return{
        width: 14rem;
        height: 3rem;
        margin-bottom: 5%;
    }
}

</style>