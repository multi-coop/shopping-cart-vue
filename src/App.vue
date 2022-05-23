<template>
  <div id="app">
      <h1>Your shopping Website</h1>

    <div class="tabs is-centered is-medium">
      <ul>
        <li 
           :class="tab1 === true ? 'is-active' : '' "
           @click="activateTab1">
           <router-link 
                    to="/">
                    Inventory
        </router-link> 
        </li>
        <li 
           :class="tab2 ? 'is-active' : '' "
           @click="activateTab2">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
