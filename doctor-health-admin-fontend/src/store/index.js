import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions.js'
// import * as mutations from './mutations.js'

Vue.use(Vuex)

const pack1_threshold = {
	tizhongzhishu: {'min':18.5,'max':23.99},
  	shousuoya: {'min':90,'max':139},
  	shuzhangya: {'min':60,'max':89}
} 

const threshold = {
	pack1: pack1_threshold
}

const state = {
    threshold: threshold,
    cards: [],
    orgs:[]
}

const mutations = {
	setCards(state, cards){
		state.cards = cards
	},
	setOrgs(state, orgs){
		state.orgs = orgs
	}
}

const actions = {
	setCards({commit, state}, cards){
		commit('setCards', cards)
	},
	setOrgs({commit, state},  orgs){
		commit('setOrgs', orgs)
	}
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})