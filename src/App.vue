<template>
  <div id="app">
      <h1>Your shopping Website</h1>

    <div class="tabs is-centered is-medium">
      <ul>
        <li class="is-active">
           <router-link 
                    to="/">
                    Inventory
        </router-link> 
        </li>
        <li>
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
