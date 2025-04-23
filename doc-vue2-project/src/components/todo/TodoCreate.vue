<!--  -->

<template>
<div>
    <input class="todo_create_input" placeholder="请输入待办事项，回车创建..." v-model="createItemContent">
</div>
</template>

<script>
export default {
  name: 'TodoCreate',
  data () {
    return {
      createItemContent: '123123'
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
