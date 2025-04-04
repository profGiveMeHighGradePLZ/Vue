<template>
  <div class="row">
        <!-- 展示用户列表 -->
        <div class="card" v-for="user in users" :key="user.id">
            <a target="_blank" :herf="user.html_url">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <h4 class="card-title">{{ user.login }}</h4>
        </div>
        <!-- 展示欢迎词 -->
        <!-- <h1 >欢迎使用！</h1> -->
        <!-- 展示加载中 -->
        <!-- <h1 >加载中...</h1> -->
        <!-- 展示错误信息 -->
        <h1></h1>
    </div>                        
</template>

<script>
export default {
    name: 'MyList',
    data(){
        return {
            users:[]
        }
    },
    mounted(){
        this.$bus.$on('uploadData',(data)=>{
            this.users = data            
        })
    }
}
</script>

<style>

</style>