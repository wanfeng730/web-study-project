<!--  -->

<template>
<div class="flex_center_div todo_count_div">
  <div class="flex_center_div">
    <input type="checkbox" v-model="todoCountData.allSelect">
    <span>全选</span>
  </div>
  <div class="flex_center_div">
    <span>已完成&nbsp;</span>
    <span class="done_count_span">{{ todoCountData.doneCount }}</span>
    <span>&nbsp;/ 全部&nbsp;</span>
    <span class="total_count_span">{{ todoCountData.totalCount }}</span>
  </div>
  <div>
    <button id="clearAllButton" class="delete_button">清除已完成任务</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'TodoCount',
  data () {
    return {
      
    }
  },
  methods:{

  },
  props:['todoCountData']
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
#clearAllButton{
  width: 8em;
}
</style>
