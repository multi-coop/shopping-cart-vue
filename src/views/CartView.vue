<template>
    <div>
        <h1>Your cart</h1>
        <h2 
           v-if="$store.state.addedArticles > 0">
           You don't have any articles yet.
        </h2>
        <h2 
           v-if="$store.state.addedArticles === 0">
           You don't have any articles yet.
        </h2>

        <router-link
                   to="/">
            <button>Go shopping</button>
        </router-link>

        <button>Empty the cart</button>


    </div>
</template>

<script>
export default{
    name: 'CartView',
    data(){
        return{

        }
    },
}
</script>

<style scoped>
</style>