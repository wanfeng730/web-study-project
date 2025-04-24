<!--  -->

<template>
<div>
    <h2>待办事项Todo</h2>
    <!-- 各个事件交互的方法由props传入子组件中，子组件调用方法，实现组件之间通信 -->
    <TodoCreate :addTodoItem="addTodoItem"></TodoCreate>
    <TodoList :sortedTodoItemList="sortedTodoItemList" :removeTodoItem="removeTodoItem"></TodoList>
    <TodoCount :todoCountData="todoCountData" :removeAllItems="removeAllItems" :selectAllChange="selectAllChange"></TodoCount>
</div>
</template>

<script>
import TodoCount from './TodoCount.vue';
import TodoCreate from './TodoCreate.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'Todo',
  data () {
    return {
      todoItemList:[
        {
          id: '001',
          name: '事项1',
          isDone: true
        },
        {
          id: '002',
          name: '事项2',
          isDone: false
        },
        {
          id: '003',
          name: '事项3',
          isDone: true
        },
      ]
    }
  },
  methods:{
    // 添加事项
    addTodoItem(itemData){
        console.log('添加待办事项:', itemData);
        this.todoItemList.unshift(itemData);
    },
    // 删除事项
    removeTodoItem(itemData){
      if(!confirm('确认删除事项吗？')){
        return;
      }
      console.log("删除待办事项：", itemData);
      // 根据id删除
      let removeId = itemData.id
      this.todoItemList = this.todoItemList.filter(item => item.id !== removeId)
    },
    // 删除所有事项
    removeAllItems(){
      if(!confirm('确认删除所有事项吗？')){
        return;
      }
      console.log("删除所有事项");
      this.todoItemList = [];
    },
    // 是否全选按钮改变
    selectAllChange(){
      console.log('selectAllChange');
      var allSelect = this.todoCountData.allSelect;
      this.todoItemList.forEach(item => item.isDone = allSelect);
    }
  },
  computed:{
    // 获得排序后的事项列表
    sortedTodoItemList(){
      return this.todoItemList.sort((item1, item2) => item1.isDone - item2.isDone);
    },
    // 统计待办事项
    todoCountData(){
      // 是否全选
      let allSelect = true;
      // 已完成数量
      let doneCount = this.todoItemList.reduce((pre, current) => {
        if(allSelect && !current.isDone){
          allSelect = false;
        }
        if(current.isDone){
          pre++;
        }
        return pre;
      }, 0)
      // 全部数量
      let totalCount = this.todoItemList.length;
      //  若列表为空则视为非全选
      allSelect = totalCount > 0 && allSelect;
      // 封装统计数据
      const data = {
          allSelect,
          doneCount,
          totalCount
      }
      console.log("update todoCountData: ", data);
      return data;
    }
  },
  components:{
    TodoCreate,TodoList,TodoCount
  }
}
</script>

<style>
div{
  font-size: 15px;
}
.delete_button{
  color: white;
  background-color: orangered;
  width: 60px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
