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

        <router-link
                   to="/payment">
           <button>Proceed to payment</button>
        </router-link>

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