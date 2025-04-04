import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const personOptions = {
    namespaced: true,
    actions: {
        addOld(context,value){
            if(context.state.sum % 2){
                context.commit('addOld',value)
            }
        },
        addWait(context,value){
            setTimeout(()=>{
                context.commit('addWait',value)
            },500)
        }
    },
    mutations: {
        jia(state,value){
            state.sum += value
        },
        jian(state,value){
            state.sum -= value
        },
        addOld(state,value){
            state.sum += value
        },
        addWait(state,value){
            state.sum += value
        }
    },
    state: {
        sum: 0
    }
}




export default new Vuex.Store({
    modules: {
        personOptions
    }
})