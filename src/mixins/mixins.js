import { mapActions } from 'vuex'
export const mixinArticles = {
    methods :{
        ...mapActions([
            'incrementCount',
            'decrementCount',
            'addArticleToCart',
            'displayNotification',
            'emptyTheCart'
        ])
    }
}