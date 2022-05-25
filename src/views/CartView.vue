<template>
    <div>
        <h1>Your cart</h1>

        <h2 
           v-if="$store.state.addedArticlesCount > 0">
           You have {{$store.state.addedArticlesCount}} {{sg}}.
        </h2>
        <h2 
           v-if="$store.state.addedArticlesCount === 0">
           You don't have any articles yet.
        </h2>

        <button 
                @click="decrementCount(), emptyTheCart() "
                v-if="$store.state.addedArticlesCount > 0">Empty the cart</button>
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
            'addArticleToCart',
            'emptyTheCart'
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
</style>