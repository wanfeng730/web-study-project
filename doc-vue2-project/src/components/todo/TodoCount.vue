<!--  -->

<template>
<div class="flex_center_div todo_count_div">
  <div class="flex_center_div">
    <input type="checkbox" v-model="allSelect">
    <span>全选</span>
  </div>
  <div class="flex_center_div">
    <span>已完成</span>
    <span class="done_count_span">&nbsp;&nbsp;{{ doneCount }}</span>
    <span>&nbsp;&nbsp;/ 全部</span>
    <span class="total_count_span">&nbsp;&nbsp;{{ totalCount }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TodoCount',
  data () {
    return {
      // 已完成数量
      doneCount: 0,
      // 全部数量
      totalCount: 3
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.todo_count_div{
  justify-content: space-between;
  width: 350px;
}
.done_count_span{
  color: greenyellow;
}
.total_count_span{
  color: skyblue;
}
</style>
