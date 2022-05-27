<template>
    <div class="wrapper p-3 my-2-tablet my-4 mx-auto">
        <h1 class="is-size-4-tablet is-size-5">{{ articleInfo.title }} <span class="black">- {{ articleInfo.price }}€</span> </h1>
        <button 
               class="button is-danger"
               @click="deleteArticle(articleInfo.id)"
        > Remove </button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    name:'CartArticle',
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },

    data(){
        return{}
    },
    methods : {
        ...mapActions([
            'deleteArticle'
        ])
    }
}
</script>

<style scoped>
.wrapper{
    border: 1px solid #D0C9C0;
    width: 98%;
    display: flex;
    justify-content: space-between;
    height: fit-content !important;
}
.black{
    color: black;
}

button{
    color: white;
}
/* MEDIA QUERIES */
@media(max-width:470px){
    button{
        margin-top: 1rem;
        margin-left: 4%;
    }
}
</style>