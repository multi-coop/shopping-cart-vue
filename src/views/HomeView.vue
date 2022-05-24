<template>
  <div class="home">
    <div v-for='(article,index) in $store.state.allArticles' :key='index' class="columns is-desktop">
    <div class="column is-half-tablet is-full">
      <ArticleItem :articleInfo="article" class="column is-full"/>
    </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Article.vue'

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
.notification{
  position:fixed;
  z-index: 100;
  top: 5%;
  left: 42%;
  font-weight: bold;
  text-align: center;
}
.hidden{
  display: none;
}

</style>
