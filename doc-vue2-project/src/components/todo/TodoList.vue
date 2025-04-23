<!--  -->

<template>
<div>
  <TodoItem v-for="(item, index) in todoItemList" :key="item.id" :itemName="item.name" :isDone="item.isDone"></TodoItem>
</div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
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
  components:{
    TodoItem
  }
}
</script>

<style scoped>

</style>
