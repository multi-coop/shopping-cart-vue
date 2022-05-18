<template>
  <div class="home">
    <h1>Your shopping Website</h1>
    <div v-for='(article,index) in $store.state.allArticles' :key='index'>
     <router-link :to="`/article/${article.id}`"><ArticleItem :articleInfo="article"/></router-link>
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
/* .home{
      display: flex;
} */
</style>
