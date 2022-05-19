<template>
    <div>
        <h1>Your cart</h1>
        <h2 
           v-if="$store.state.addedArticlesCount > 0">
           You have {{$store.state.addedArticlesCount}} {{singularOrPlurial}}.
        </h2>
        <h2 
           v-if="$store.state.addedArticles === 0">
           You don't have any articles yet.
        </h2>

        <router-link
                   to="/">
            <button>Go shopping</button>
        </router-link>

        <button @click="decrementCount">Empty the cart</button>


    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default{
    name: 'CartView',
    data(){
        return{

        }
    },
    methods : mapActions([
        'incrementCount',
        'decrementCount',
    ]),
    computed : mapGetters(['singularOrPlurial'])
}
</script>

<style scoped>
</style>