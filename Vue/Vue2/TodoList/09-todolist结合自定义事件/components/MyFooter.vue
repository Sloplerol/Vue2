<template>
  <div class="todo-footer" v-show="total">
    <!-- 当todo里面没有值了就隐藏底部 -->
        <label>
          <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
          <input type="checkbox" v-model="isAll">
          <!-- 当v-model和多选按钮放到一块v-model返回的值是布尔值 v-model获取的值是自己的计算属性不会去修改props -->
        </label>
        <span>
          <span>已完成{{donetotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
    export default {
        name: 'MyFooter',
        props: ['todos','checkAlltodo','clearAlltodo'],
        computed: {
            total(){
                return this.todos.length;
            },
            donetotal(){
                // let i = 0;
                // this.todos.filter((todo)=>{
                //     if(todo.done) i++;
                // })
                // return i;
                // const x = this.todos.reduce((pre,current)=>{ 
                //     // 前一次执行该函数结果返回的值作为下一次调用该函数的pre的值
                //     // console.log(pre);
                //     console.log(pre,current); //current代表的是每一个todo项
                //     // return pre+1; 
                //     return pre + (current.done ? 1 : 0);
                // },0)
                // console.log(x); //最后结果返回的值为3
                //简写reduce
                return this.todos.reduce((pre,current)=>pre+(current.done ? 1 : 0),0);
            },
            isAll:{
                get(){
                    //当总数大于零的时候才可以启用表达式
                    return this.total === this.donetotal && this.total>0;
                },
                set(val){
                    return this.checkAlltodo(val);
                    
                }
            },
            
            
        },
        // methods: {
        //     checkAll(e){ 
        //         this.checkAlltodo(e.target.checked);
        //     }
        // }
        methods: {
            clearAll(){
                if(confirm('是否删除选中的')){
                    this.clearAlltodo();
                }
            }
        }
    }
</script>

<style scoped>
    /*footer*/
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