<template>
    <div>
        <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addtodo="addtodo"/>
      <MyList :todos="todos" :checktodo="checktodo" :deletetodo="deletetodo"/>
      <MyFooter :todos="todos" :checkAlltodo="checkAlltodo" :clearAlltodo="clearAlltodo"/>
    </div>
  </div>
</div>
        
    </div>

</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name: 'App',
    components: {
        MyHeader,
        MyList,
        MyFooter 

    },
    data(){ 
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
                //初次没有数据读取时为null MyFooter初始化时候查看长度null.length报错
            }
        },
    watch: {
      // 一定要深度监视数据
      // todos(value){
      //   localStorage.setItem('todos',JSON.stringify(value));
      // }
      todos: {
        deep: true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value));
        }
      }
    },
    methods: {
        addtodo(todoObj){
            // console.log(todoObj);
            this.todos.unshift(todoObj);
             
        },
        checktodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id===id) todo.done=!todo.done; 
            })
        },
        deletetodo(id) {
            //filter过滤数组里的元素时是不会更新原数组的
            this.todos = this.todos.filter((todo)=>{
                return todo.id!==id;
            })
        },
        checkAlltodo(done) {
            this.todos.forEach((todo)=>{
                todo.done = done;
            })
        },
        clearAlltodo(){
            this.todos = this.todos.filter((todo)=>{
                return !todo.done
            })
        }
        
    }
}
</script>

<style>
    /*base*/
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
}

.btn-danger:hover {
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