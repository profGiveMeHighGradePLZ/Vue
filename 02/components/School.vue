<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <h2>{{ age+1 }}</h2>
    <h1 ref="ele">element</h1>
    <button @click="show">show</button>
</div>
</template>

<script>
import {mixin} from '../mixin'
    export default {
        name:'SchoolInfo',
        data(){
            return {
                // name: 'bu',
                // address: 'hk'
            }
        },
        props: ['name','address','age'],
        mixins: [mixin]
        
    }
</script>

<style scoped>
    .demo {
        background-color: antiquewhite ;
    }
</style>