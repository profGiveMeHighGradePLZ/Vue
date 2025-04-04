<template>
  <section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
            <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
            <button @click="searchKeyword">Search</button>
		</div>
    </section>                        
</template>

<script>
import axios from 'axios'
export default {
    name:'MySearch',
    data(){
        return {
            keyword: ''
        }
    },
    methods: {
        searchKeyword(){
            // console.log(this.keyword);
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    // console.log(response.data.items);
                    this.$bus.$emit('uploadData',response.data.items)   
                },
                error => {
                    console.log('error',error.msg);
                    
                }
            )
        }
    }
}
</script>

<style>
.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}
 
	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}
 
	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

    .card-text {
		font-size: 85%;
	}
</style>