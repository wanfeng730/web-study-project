<!--  -->

<template>
<div>
  <TodoItem v-for="(item, index) in todoItemList" :key="item.id" :itemData="item" :removeTodoItem="removeTodoItem"></TodoItem>
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
  props:['todoItemList', 'removeTodoItem'],
  components:{
    TodoItem
  }
}
</script>

<style scoped>

</style>
