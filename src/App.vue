<template>
  <div id="app">
        <h1>Your shopping Website</h1>
    <nav>
      <router-link 
                  to="/" class="onglet">
                  Inventory
      </router-link> 
      <router-link 
                 to="/cart" class="onglet">
                 Cart : {{ $store.state.addedArticlesCount }} article(s)
      </router-link>
    </nav>
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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.onglet{
  border: 1px solid black;
  padding: 1%;
  margin: 1%;
}
</style>
