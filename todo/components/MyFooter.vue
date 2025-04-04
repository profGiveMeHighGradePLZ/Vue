<template>
  <div class="todo-footer" v-show="todos.length">
        <label>
            <input type="checkbox" v-model="completeAll"/>
        </label>
        <span>
            <span>已完成{{ todoCompleted }}</span> / 全部{{ todos.length }}
        </span>
        <button class="btn btn-danger" @click="del">清除已完成任务</button>
    </div>
</template>

<script>
// import { get } from 'core-js/core/dict';

export default {
    name: 'MyFooter',
    props: ['todos'],
    computed:{
        todoCompleted(){
            return this.todos.reduce((pre,todo)=>{
                return pre + (todo.done?1:0)
            },0)
        },
        completeAll: {
            get(){
                return this.todos.length === this.todoCompleted
            },
            set(value){
                // this.checkAll(value)
                this.$emit('checkAll',value)
            }
        }
    },
    methods:{
        del(){
            // console.log('111');
            // this.deleteCompleted()
            this.$emit('deleteCompleted')
        }
    }
}
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
        }
 
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
 
    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>