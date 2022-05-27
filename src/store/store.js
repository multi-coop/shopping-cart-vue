import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    addedArticlesCount : 0,
    cart : [],
    isDisplayed : false,
    allArticles : []
}

const actions = {
    incrementCount : ({ commit }) => commit('incrementCount'),
    decrementCount : ({ commit }) => commit('decrementCount'),
    addArticleToCart : ({ commit }, articleId) => commit('addArticleToCart', articleId),
    displayNotification : ({ commit }) => commit('displayNotification'),
    emptyTheCart : ({ commit }) => commit('emptyTheCart'),
    deleteArticle : ({ commit }, articleId) => commit('deleteArticle', articleId),
    mountingAPI : ({ commit }, API) => commit('mountingAPI', API)
}

const getters = {
    singularOrPlurial : state => state.addedArticlesCount <= 1 ? 'article' : 'articles',
    totalPrice : state => {
        let total = state.cart.map(elem => elem.price)
        total = total.reduce((partialSum, a) => partialSum + a, 0)
        total = Math.round((total + Number.EPSILON) * 100) / 100 
        return total
    }
}

const mutations = {
    async mountingAPI(state, API){
        const data = await fetch(API)
        const response = await data.json()
        state.allArticles = response 
    },
    incrementCount(state){
        state.addedArticlesCount++
    },
    decrementCount(state){
        state.addedArticlesCount--
    },
    addArticleToCart(state, articleId){
        articleId = parseInt(articleId)
        const article = state.allArticles.find(elem => elem.id === articleId)
        state.cart.push(article)
    },
    displayNotification(state){
        state.isDisplayed = true
        setTimeout(() => {
            state.isDisplayed = false
        }, 1500)
    },
    emptyTheCart(state){
        state.cart = []
        state.addedArticlesCount = 0
    },
    deleteArticle(state,articleId){
        articleId = parseInt(articleId)
        const article = state.cart.find(elem => elem.id === articleId)
        state.cart = state.cart.filter(elem => elem !== article)
        state.addedArticlesCount--
    },
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})