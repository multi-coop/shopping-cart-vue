<template>
  <div class="home">
    <div v-for='(article,index) in $store.state.allArticles' :key='index' class="columns is-desktop">
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
      background-color: #f7f6f2;
      width: 97vw;
      margin: auto;
}
.columns{
  margin: auto;
}

</style>
