<template>
  <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleChange(todo.id)"/>
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" 
            :value="todo.title" 
            v-show="todo.isEdit" 
            @blur="handleBlur(todo,$event)"
            ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>

</li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        handleChange(id){
            this.$bus.$emit('changeBox',id)
        },
        handleDelete(id){
            if(confirm('确认删除')){
                this.$bus.$emit('deleteBox',id)
            }
        },
        handleEdit(todo){
            if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                todo.isEdit = true;
            }else{
                this.$set(todo,'isEdit',true)
            } 
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
                    
        },
        handleBlur(todo,e){
            todo.isEdit=false            
            if(!e.target.value.trim()){
                alert('非法输入')
                return
            }
            this.$bus.$emit('editBox',todo.id,e.target.value)

        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
 
    li label {
        float: left;
        cursor: pointer;
    }
 
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
 
    li:before {
        content: initial;
    }
 
    li:last-child {
        border-bottom: none;
    }
 
    li:hover {
        background-color: #eee;
    }
 
    li:hover button{
        display: block;
    }
</style>