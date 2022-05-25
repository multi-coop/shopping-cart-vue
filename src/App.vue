<template>
  <div id="app">
    
    <div class="tabs is-medium is-right">
      <!-- Title -->
      <h1 class="is-hidden-mobile p-2">Green Shopping</h1>
      <!-- Logo -->
      <span class="icon icon-leaf is-large p-4"></span>
      <!-- Navbar -->
      <ul class="is-flex-desktop">
        <li 
           :class="tab1 === true ? 'is-active' : '' "
           @click="activateTab1"
           >
           <router-link 
                    to="/"
                    >
                    <span class="icon icon-apparel"></span> 
                    <div class="is-hidden-mobile">Collections</div>           
        </router-link> 
        </li>
        <li 
           :class="tab2 ? 'is-active' : '' "
           @click="activateTab2"
            >
           <router-link 
                   to="/cart">
                   <span class="icon icon-cart"></span>
                   <div class="mobile is-hidden-tablet">{{ $store.state.addedArticlesCount }}</div>
                   <div class="is-hidden-mobile">{{ $store.state.addedArticlesCount }} {{singOrPlur}}</div>
        </router-link>
        </li>
      </ul>

    </div>
    <router-view />
  </div>
</template>

<script>
import 'bulma'
import { mapGetters } from 'vuex'
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
    },
    computed: {
        ...mapGetters({
            singOrPlur: 'singularOrPlurial',
        })
    },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-color: #f7f6f2;
}

h1{
  font-weight: bold !important;
  font-size: 1.5rem !important;
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

/*------- ICONMOON CSS ----- */
@font-face {
  font-family: 'icomoon';
  src:  url('@/fonts/icomoon.eot?2q5z0o');
  src:  url('@/fonts/icomoon.eot?2q5z0o#iefix') format('embedded-opentype'),
    url('@/fonts/icomoon.ttf?2q5z0o') format('truetype'),
    url('@/fonts/icomoon.woff?2q5z0o') format('woff'),
    url('@/fonts/icomoon.svg?2q5z0o#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-leaf:before {
  content: "\e9a4";
}

.icon-basket:before {
  content: "\e901";
}
.icon-shopping:before {
  content: "\e901";
}
.icon-cart:before {
  content: "\e901";
}
.icon-ecommerce:before {
  content: "\e901";
}
.icon-cart1:before {
  content: "\e93a";
}
.icon-apparel:before {
  content: "\e903";
}
.icon-shopping-cart:before {
  content: "\e900";
}
.icon-view-show:before {
  content: "\e902";
}

/*------- END OF ICONMOON CSS ----- */

</style>
