import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    article: {}
  },
  mutations: {
    setNews(state, payload) {
      state.news = payload
    },
    setArticle(state, payload) {
      state.article = payload
    }
  },
  actions: {
    getNews({commit}, category = 'general') {
      console.log('obteniendo news', category);
      
      return new Promise((resolve, reject) => axios.get('https://newsapi.org/v2/top-headlines?category='+category+'&country=mx&apiKey=95906ad3440e44cdbbd4575934ca81b4')
        .then(response => {
          commit('setNews', response.data.articles);
          resolve();
        }).catch(error => {
          console.log('ocurrio un error al obtener posts', error);
          reject()
        })
      );
    },
    getArticle({commit}, index) {
      let article = news[index];
      commit('setArticle', article);
    }
  },
  modules: {
  }
})
