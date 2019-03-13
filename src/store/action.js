// eslint-disable
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
/*eslint-disable */
export default {
  async loadblog ({ commit }) {
    	axios.get('https://jsonplaceholder.typicode.com/posts')
    	.then(response => {
    		commit('LOAD_BLOGS', response.data)
    	}).catch(error => {
    		commit('LOAD_BLOGS', [])
    	})
  },
  async storepost ({ commit }, payload) {
    	axios.post('https://jsonplaceholder.typicode.com/posts', {
	    	body: payload,
	    	headers: {
	      		'Content-type': 'application/json; charset=UTF-8'
	    	}
    })
      .then(response => {
        console.log(response.data.body)
        commit('STORE_BLOGS', response.data.body)
      })
      .catch(error => {
    	commit('STORE_BLOGS', [])
      })
  }
}
