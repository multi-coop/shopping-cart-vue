<template>
  <div class="home">
    <!-- Notifications -->
        <div 
            :class=" $store.state.isDisplayed ? 'notification is-success' : 'notification is-success hidden' ">
            <div class="center">Ajouté!</div>
        </div>
    <!--- Content --->
    <!-- Check indentation with Julien -->
    <div 
        v-for='(article,index) in $store.state.allArticles' 
        :key='index' class="columns">
            <div class="column"> 
              <ArticleItem :articleInfo="article"/>
            </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Article.vue'
import { mapActions } from 'vuex'

export default {
    name: 'HomeView',
    components: {
        ArticleItem,
    },
    async mounted(){
        const API = 'https://fakestoreapi.com/products' 
        this.mountingAPI(API) 
    },
    methods : {
        ...mapActions(['mountingAPI'])
    }
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
  width: 25vw;
  top: 1%;
  left: 38vw;
}
.center{
  position: fixed;
  left: 50%;
  top: 1.9%;
  transform: translate(-50%, 0);
  font-weight: bold;
  font-size: larger;
}

.hidden{
  display: none;
}

</style>
