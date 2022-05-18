<template>
    <div class="wrapper">
        <h1>Title : {{ articleInfo.title }} </h1>
        <h2>Category : {{ articleInfo.category }} </h2>
        <img :src="articleInfo.image" alt="" srcset="">
        <h2>Description : </h2>
        <p> {{ articleInfo.description }}</p>
        <h2> {{ articleInfo.price }}€ </h2>

        <button>Voir</button>
        <button>Ajouter</button>

    </div>
</template>

<script>
export default{
    name: 'ArticleItem',
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },
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
    width: 40vw;
    margin: auto;
    box-sizing: border-box;
    padding: 2%;
    flex-wrap: wrap
}

img{
    max-width: 40%;
}

button{
    font-weight: bold;
    padding: 1%;
    width: 5vw;
    margin: 2%;
}
</style>