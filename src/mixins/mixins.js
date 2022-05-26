import { mapActions } from 'vuex'
export const mixinAddArticles = {
    methods :{
        ...mapActions([
            'incrementCount',
            'decrementCount',
            'addArticleToCart',
            'displayNotification'
        ])
    }
}