<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
            <MyHeader @todoList="todoList"/>
            <MyList :todos="todos" />
            <MyFooter :todos="todos" @checkAll="checkAll" @deleteCompleted="deleteCompleted"/>
            </div>
        </div>
    </div>                        
</template>

<script>
import MyFooter from './components/MyFooter'
import MyHeader from './components/Myheader'
import MyList from './components/MyList'
export default {
    components: {
        MyFooter,
        MyHeader,
        MyList
    },
    data(){
        return {
            todos: JSON.parse(localStorage.getItem('todos'))||[]
        }
    },
    methods: {
        todoList(todoObj){
            this.todos.unshift(todoObj)
        },
        changeBox(id){
            this.todos.forEach(todo => {
                if(id === todo.id){
                    todo.done = !todo.done
                }
            })
        },
        editBox(id,newTitle){
            this.todos.forEach(todo => {
                if(id === todo.id){
                    todo.title = newTitle
                }
            })
        },
        deleteBox(id){
            this.todos = this.todos.filter(todo=>todo.id!==id)
        },
        checkAll(value){
            this.todos.forEach(todo => todo.done = value)
        },
        deleteCompleted(){
            this.todos = this.todos.filter(todo => todo.done!==true)
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }        
    },
    mounted(){
        this.$bus.$on('changeBox',this.changeBox)
        this.$bus.$on('deleteBox',this.deleteBox)
        this.$bus.$on('editBox',this.editBox)
    },
    beforeDestroy(){
        this.$bus.$off('deleteTodo')
        this.$bus.$off('updateTodo')
        this.$bus.$off('editBox')

    }
                        
}
</script>

<style>
body {
    background: #fff;
    }

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    margin-left: 5px;

}

.btn-edit {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn-edit:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>