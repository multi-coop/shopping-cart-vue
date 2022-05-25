<template>
    <div class="wrapper">
        <div class="cart-infos-wrapper my-6">

            <h1 class="is-size-2">Your cart</h1>
    
            <h2 
               class="cart-infos is-size-4 my-4"
               v-if="$store.state.addedArticlesCount > 0">
               You have {{$store.state.addedArticlesCount}} {{sg}}.
            </h2>
            <h2 
               class="cart-infos is-size-4 my-4"
               v-if="$store.state.addedArticlesCount === 0">
               You don't have any articles yet.
            </h2>
    
            <button 
                    class="button is-medium is-warning m-5"
                    @click="decrementCount(), emptyTheCart() "
                    v-if="$store.state.addedArticlesCount > 0">Empty the cart</button>
            <router-link
                       to="/">
                <button class="button is-medium m-5">Go shopping</button>
            </router-link>
        </div>

        <ul 
           v-for="(article,index) in $store.state.cart" 
           :key="index">
            <li> 
                <CartArticle :articleInfo="article"/>
            </li>
        </ul>

        
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import CartArticle from '@/components/CartArticle.vue'

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
    components: { CartArticle }
}
</script>

<style scoped>

.wrapper{
    background-color: #f7f6f2;
    height: 84vh;
}

button{
    background-color: #6D8B74;
    font-weight: bold;
    color: white;
}
</style>