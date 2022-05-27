<template>
    <div class="wrapper p-3 my-2-tablet my-4 mx-auto is-flex is-justify-content-space-between">
        <h1 class="is-size-4-tablet is-size-5 has-text-weight-bold">{{ articleInfo.title }} <span class="has-text-black">- {{ articleInfo.price }}€</span> </h1>
        <button 
               class="button is-danger has-text-weight-bold"
               @click="deleteArticle(articleInfo.id)"
        > Remove </button>
    </div>
</template>

<script>
import { mixinArticles } from '@/mixins/mixins'
export default{
    name:'CartArticle',
    mixins : [mixinArticles],
    props : {
        articleInfo : {
            type : Object,
            default : Object
        }
    },
}
</script>

<style scoped>
.wrapper{
    border: 1px solid #D0C9C0;
    width: 98%;
    height: fit-content !important;
}

/* MEDIA QUERIES */
@media(max-width:470px){
    button{
        margin-top: 1rem;
        margin-left: 4%;
    }
}
</style>