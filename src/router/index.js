import Vue from 'vue'
import VueRouter from 'vue-router'
//Views
import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'
//Components
import ArticleItem from '@/components/Article.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path : '/cart',
        name : 'cart',
        component : CartView,
    },
    {
        path : '/article/:id',
        name : 'article',
        component : ArticleItem
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
