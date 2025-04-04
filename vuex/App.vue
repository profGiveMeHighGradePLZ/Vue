<template>
	<div class="container">
		<Count/>
	</div>
</template>
 
<script>
    import store from './store'
	import Count from './components/Count'
	export default {
		name:'App',
		components:{Count},
        store
	}
</script>