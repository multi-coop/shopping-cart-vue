<template>
  <div id="app">
    
    <div class="tabs is-medium is-right">
      <h1>Easy Shopping</h1>
      <!-- <ul class="is-flex-direction-column is-flex-direction-row-desktop">\ -->
      <ul>
        <li 
           :class="tab1 === true ? 'is-active' : '' "
           @click="activateTab1"
           >
           <router-link 
                    to="/">
                    Inventory
        </router-link> 
        </li>
        <li 
           :class="tab2 ? 'is-active' : '' "
           @click="activateTab2"
            >
           <router-link 
                   to="/cart">
                   Cart : {{ $store.state.addedArticlesCount }} article(s)
        </router-link>
        </li>
      </ul>

    </div>
    <router-view />
  </div>
</template>

<script>
export default{
    name: 'App',
    data(){
        return{
            tab1 : true,
            tab2: false
        }
    },
    methods : {
        activateTab1 : function(){
            this.tab1 = true
            this.tab2 = false
        },
        activateTab2 : function(){
            this.tab2 = true
            this.tab1 = false
        },
    }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-color: #f7f6f2;
}

h1{
  font-weight: bold;
  font-size: 2rem;
  color: #5c7061;
}

.tabs{
  background-color:#d8d4cc;
  padding: 2%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
