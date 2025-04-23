<!--  -->

<template>
<div>
    <h2>待办事项Todo</h2>
    <!-- 各个事件交互的方法由props传入子组件中，子组件调用方法，实现组件之间通信 -->
    <TodoCreate :addTodoItem="addTodoItem"></TodoCreate>
    <TodoList :todoItemList="todoItemList" :removeTodoItem="removeTodoItem"></TodoList>
    <TodoCount :todoCountData="todoCountData"></TodoCount>
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
        this.todoItemList = this.todoItemList.filter((item) => item.id !== removeId)
    }
  },
  computed:{
    todoCountData(){
        let allSelect = true;
        let doneCount = 0;
        this.todoItemList.forEach((item) => {
            if(allSelect && !item.isDone){
                allSelect = false;
            }
            if(item.isDone){
                doneCount++;
            }
        });
        let totalCount = this.todoItemList.length;
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
