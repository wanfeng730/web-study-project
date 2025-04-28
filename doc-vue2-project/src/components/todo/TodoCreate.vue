<!--  -->

<template>
<div>
    <input class="todo_create_input" placeholder="请输入待办事项，回车创建..." v-model="createItemContent" @keyup.enter="createItem()">
</div>
</template>

<script>
import { nanoid } from 'nanoid';
import pubsub from 'pubsub-js';


export default {
  name: 'TodoCreate',
  data () {
    return {
      createItemContent: ''
    }
  },
  methods:{
    // 创建待办事项
    createItem(){
      if(!this.createItemContent.trim()){
        console.log("未输入待办事项");
        return
      }
      let id = new Date().getTime();
      let itemData = {
        // nanoid可以作为单机版的精简id生成
        id: nanoid(),
        name: this.createItemContent,
        isDone: false
      }
      // 触发该组件绑定的addTodoItem事件，传入itemData
      // console.log(this.$eventCenter);
      // this.$emit('addTodoItem', itemData);
      this.$eventCenter.$emit('addTodoItem', itemData);

      // 发布消息
      pubsub.publish('addItem', itemData);
      
      // 清空输入框
      this.createItemContent = '';
    }
  }
}
</script>

<style scoped>
.todo_create_input{
    font-size: 15px;
    width: 350px;
}
</style>
