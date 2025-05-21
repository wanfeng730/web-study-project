<!--  -->

<template>
<div>
  <span>事项id：{{ todoItemData.id }}</span><br>
  <span>事项名称：{{ todoItemData.name }}</span><br>
  <span>是否已完成：{{ todoItemData.isDone ? '是' : '否' }}</span>
</div>
</template>

<script>
export default {
  name: 'TodoDetail',
  data () {
    return {
      todoItemData:{
        id:'',
        name:'',
        isDone: false
      }
    }
  },
  methods: {
    
  },
  components: {
    
  }
}
</script>

<style scoped>

</style>
