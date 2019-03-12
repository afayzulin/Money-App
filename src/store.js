import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tasks_list: [
  		'Call to friend',
  		'Kiss my wife',
  		'Buy bread'
  	],
  },
  mutations: {
  	updateTasksList (state, data) {
  		state.tasks_list = data;
  	},
  },
  actions: {
  	removeTasks ({state, commit}) {
  		commit('updateTasksList', []);
  	},
  }
})
