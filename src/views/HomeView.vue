<template>
  <div class="home">
    <div v-for='(article,index) in $store.state.allArticles' :key='index'>
    <ArticleItem :articleInfo="article"/>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Article.vue'
// import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'HomeView',
    data(){
        return{

        }
    },
    components: {
        ArticleItem
    },
}
</script>

<style scoped>
.home{
      display: flex;
      flex-wrap: wrap;
}
span{
  display: block;
}
</style>
