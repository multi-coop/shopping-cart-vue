<template>
    <div class="wrapper">
        <h1>Title : </h1>
        <h2>Category : </h2>
        <h2>Description : </h2>
        <p></p>
        <h2>Price : </h2>

    </div>
</template>

<script>
export default{
    name: 'ArticleItem',
    data(){
        return{

        }
    },
    // async mounted(){
    //     const data = await fetch('https://fakestoreapi.com/products')
    //     const response = await data.json()
    //     console.log(response)    
    // }
}
</script>

<style scoped>
.wrapper{
    border: 1px solid black;
    width: 80vw;
    margin: auto;
    box-sizing: border-box;
}

img{
    max-width: 100%;
}
</style>