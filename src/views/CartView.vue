<template>
    <div class="wrapper">
        <div class="infos">
            <h1>Your cart</h1>
        <h2 
           v-if="$store.state.addedArticlesCount > 0">
           You have {{$store.state.addedArticlesCount}} {{sg}}.
        </h2>

        <h2 
           v-if="$store.state.addedArticlesCount === 0">
           You don't have any articles yet.

        <button 
               v-if="$store.state.addedArticlesCount > 0">Empty the Cart
        </button>
        </h2>
        </div>

        <router-link
                   to="/">
            <button>Go shopping</button>
        </router-link>

        <ul 
           v-for="(article,index) in $store.state.cart" 
           :key="index">
            <li> 
                <ArticleItem :articleInfo="article"/> 
            </li>
        </ul>

    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import ArticleItem from '@/components/Article.vue'
export default{
    name: 'CartView',
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'incrementCount',
            'decrementCount',
            'addArticleToCart'
        ])
    },
    computed: {
        ...mapGetters({
            sg: 'singularOrPlurial',
        })
    },
    components: { ArticleItem }
}
</script>

<style scoped>
    .wrapper{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      border: 1px solid black;
      height: 70vh;
      width: 70vw;
      margin: auto;
      overflow: scroll;
    }

    h1{
        text-align: center;
    }

    li{
        list-style: none;
    }
    h2{
        margin: auto;
    }
    button{
        padding: 1%;
        margin-top: 5%;
    }
</style>