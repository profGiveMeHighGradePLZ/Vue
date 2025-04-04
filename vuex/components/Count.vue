<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>
 
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
	export default {
		name:'MyCount',
		data() {
			return {
				n:1, //用户选择的数字
				// sum:0 //当前的和
			}
		},
		methods: {
			// increment(){                
            //     this.$store.commit('jia',this.n)
			// },
			// decrement(){
            //     this.$store.commit('jian',this.n)
			// },
			// incrementOdd(){
			// 	this.$store.dispatch('addOld',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('addWait',this.n)
			// },
            ...mapMutations('personOptions',{increment:'jia',decrement:'jian'}),
            ...mapActions('personOptions',{incrementOdd:'addOld',incrementWait:'addwait'})
		},
        computed: {
            // ...mapState({sum:'sum'})
            ...mapState('personOptions',['sum'])

        }
	}
</script>
 
<style>
	button{
		margin-left: 5px;
	}
</style>
 