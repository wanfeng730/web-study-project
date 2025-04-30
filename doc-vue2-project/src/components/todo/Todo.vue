<!--  -->

<template>
<div>
    <h2>待办事项Todo</h2>
    
    <!-- 给组件绑定自定义事件，由组件调用$emit触发事件，实现组件之间通信 -->
    <TodoCreate></TodoCreate>

    <!-- 各个事件交互的方法由props传入子组件中，子组件调用方法，实现组件之间通信 -->
    <TodoList :sortedTodoItemList="sortedTodoItemList"></TodoList>

    <TodoCount :todoCountData="todoCountData" @removeAllItems="removeAllItems()" @selectAllChange="selectAllChange()"></TodoCount>
</div>
</template>

<script>
import TodoCount from './TodoCount.vue';
import TodoCreate from './TodoCreate.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'Todo',
  components:{
    TodoCreate,TodoList,TodoCount
  },
  data () {
    return {
      // 若localStorage为null，则使用空数组
      todoItemList: localStorage.getItem('todoItemList') ? JSON.parse(localStorage.getItem('todoItemList')) : []
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
    sortedTodoItemList() {
      console.log('computed sortedTodoItemList');
      return this.todoItemList.sort((item1, item2) => item1.isDone - item2.isDone);
    },
    // 统计待办事项
    todoCountData(){
      // 是否全选
      let allSelect = true;
      // 已完成数量
      let doneCount = this.sortedTodoItemList.reduce((pre, current) => {
        if(allSelect && !current.isDone){
          allSelect = false;
        }
        if(current.isDone){
          pre++;
        }
        return pre;
      }, 0)
      // 全部数量
      let totalCount = this.sortedTodoItemList.length;
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
  watch:{
    todoItemList:{
      // 开启深度监视，内层数据变化也可以被监视到
      deep: true,
      handler(newValue){
        console.log('watch todoItemList');
        window.localStorage.setItem('todoItemList', JSON.stringify(newValue));
      }
    }
  },
  mounted(){
    console.log(this.eventCenter);
    // 全局事件总线绑定事件：添加待办事项
    this.$eventCenter.$on('addTodoItem', itemData => {
      console.log('eventCenter触发事件addTodoItem data:', itemData);
      console.log('eventCenter触发事件addTodoItem this:', this);
      this.addTodoItem(itemData);
    });
    // 全局事件总线绑定事件：删除待办事项
    this.$eventCenter.$on('removeTodoItem', itemData => {
      console.log('eventCenter触发事件removeTodoItem data:', itemData);
      this.removeTodoItem(itemData);
    });
  },
  beforeDestroy(){
    // 销毁该组件前先解绑事件
    this.$eventCenter.$off([
      'addTodoItem',
      'removeTodoItem'
    ]);
  }
}
</script>

<style>
div{
  font-size: 15px;
}
button{
  margin-left: 5px;
  box-shadow: inset 0px 0px 2px 1px #000;
}
.update_button{
  color: white;
  background-color: blue;
  width: 60px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
.delete_button{
  color: white;
  background-color: orangered;
  width: 60px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
.display_disable{
  display: none;
}
.display_enable{
  display: block;
}
</style>
