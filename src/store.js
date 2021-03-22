import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showLikedProducts: false,
        filter:{
            maxPrice:'',
            minPrice:''
        },
        user: null,
        search: '',
        searchLocation: '',
    },
    getters: {
        showLikedProducts: state => {
            return state.showLikedProducts
        },
        filter: state => {
            return state.filter
        },
        search: state => {
            return state.search
        },
        searchLocation: state => {
            return state.searchLocation
        },
        user: state => {
            return state.user
        },
    },
    actions: {
        changeShowLikedProducts(store, data){
            store.commit('setShowLikedProducts', data);
        },
        changeFilter(store, data){
            store.commit('setFilter', data);
        },
        updateSearch(store, data){
            store.commit('setSearch', data);
        },
        updateSearchLocation(store, data){
            store.commit('setSearchLocation', data);
        },
        updateUser(store,user){
            store.commit('setUser', user);
        }
    },
    mutations: {
        setShowLikedProducts(state,val){
            state.showLikedProducts = val;
        },
        setFilter(state,val){
            state.filter = val;
        },
        setSearch(state,val){
            state.search = val;
        },
        setSearchLocation(state,val){
            state.searchLocation = val;
        },
        setUser(state,val){
            state.user = val;
        }
    }
})