<!--  -->

<template>
<div>
  <TodoItem v-for="(item, index) in sortedTodoItemList" :key="item.id" :itemData="item" ></TodoItem>
</div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  data () {
    return {
      
    }
  },
  props:['sortedTodoItemList'],
  components:{
    TodoItem
  }
}
</script>

<style scoped>

</style>
