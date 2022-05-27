<template>
    <div class="wrapper">
        <div class="cart-infos-wrapper my-6">

            <h1 class="is-size-2">Your cart</h1>

            <div
                class="cart-infos is-size-4 my-4">
                <h2 
                    v-if="$store.state.addedArticlesCount > 0">
                    You have {{$store.state.addedArticlesCount}} {{sg}}.
                </h2>
                <h2
                    v-if="$store.state.addedArticlesCount === 0">
                    You don't have any articles yet.
                </h2>
            </div>
    
            <button 
                    class="button is-medium is-warning m-5 is-bold has-text-weight-bold"
                    @click="decrementCount(), emptyTheCart() "
                    v-if="$store.state.addedArticlesCount > 0">
                    Empty the cart
            </button>

            <router-link to="/">   
                <button class="button is-medium m-5 has-text-white has-text-weight-bold">Go shopping</button>
            </router-link>
        </div>

        <h2 
           class="is-size-2-tablet is-size-3-mobile has-text-right has-text-weight-bold mr-6"
           v-if="total>0">TOTAL : {{total}}€ </h2>
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
import { mapGetters } from 'vuex'
import CartArticle from '@/components/CartArticle.vue'
import { mixinArticles } from '@/mixins/mixins'

export default{
    name: 'CartView',
    mixins : [mixinArticles],
    computed: {
        ...mapGetters({
            sg: 'singularOrPlurial',
            total : 'totalPrice'
        })
    },
    components: { CartArticle }
}
</script>

<style scoped>
button{
    background-color: #6D8B74;
}
</style>