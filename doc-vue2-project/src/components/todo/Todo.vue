<!--  -->

<template>
<div>
    <h2>待办事项Todo</h2>
    <TodoCreate></TodoCreate>
    <TodoList></TodoList>
    <TodoCount></TodoCount>
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
      
    }
  },
  components:{
    TodoCreate,TodoList,TodoCount
  }
}
</script>

<style scoped>

</style>
