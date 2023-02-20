<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="HandleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="HandleBlur(todo,$event)" ref="ipt">
    </label>
    <button class="btn btn-danger" @click="HandleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="HandleEdit(todo)">编辑</button>
    <!-- 当点击编辑的时候isEdit属性变为true -->
  </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: "MyItem",
  props: ['todo'] ,
  methods: {
    HandleCheck(id){
        // this.checktodo(id)
        this.$bus.$emit('checktodo',id)
    },
    HandleDelete(id){
        if(confirm('确认删除吗?')){
            // this.deletetodo(id);
            // this.$bus.$emit('deletetodo',id)   
            pubsub.publish('deletetodo',id);
        }
    },
    HandleEdit(todo){
        // todo.isEdit = true; //直接挂载是没有响应式的
        if(todo.hasOwnProperty('isEdit')) {
          // hasOwnProperty查看todo身上是否有isEdit属性
          todo.isEdit = true;
        }else {
          console.log('此时身上没有isEdit属性');
          this.$set(todo,'isEdit',true);
        }
        // this.$refs.ipt.focus(); //Vue是将这里面的所有代码执行完了再去解析模版 相当于此时文字还没有变成输入框调用该语句失效
        // 第一种方式定时器不给时间解决 
        // setTimeout(() => {
        //   this.$refs.ipt.focus();
        // });
        // 第二种方法 nextTick当解析完模版之后再去调用里面的回调函数
        this.$nextTick(function(){
          this.$refs.ipt.focus();
        })
    },
    HandleBlur(todo,e){
        todo.isEdit = false;
        // console.log('updatetodo',todo.id,e.target.value);
        if(!e.target.value.trim()) return alert('输入内容不能为空');
        this.$bus.$emit('updatetodo',todo.id,e.target.value);
        
    }
  },
  
  
};
</script>

<style scoped>
    /*item*/
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
    background-color: #ddd;
}
li:hover button {
    display: block;
}
</style>