<!--  -->

<template>
<div class="flex_center_div todo_count_div">
  <div class="flex_center_div">
    <input type="checkbox" v-model="todoCountData.allSelect" @change="selectAllChange()">
    <span>全选</span>
  </div>
  <div class="flex_center_div">
    <span>已完成&nbsp;</span>
    <span class="done_count_span">{{ todoCountData.doneCount }}</span>
    <span>&nbsp;/ 全部&nbsp;</span>
    <span class="total_count_span">{{ todoCountData.totalCount }}</span>
  </div>
  <div>
    <button id="clearAllButton" class="delete_button" @click="removeAllItems()">清除已完成任务</button>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: 'TodoCount',
  props:['todoCountData'],
  data () {
    return {
      
    }
  },
  methods:{
    removeAllItems(){
      this.$emit('removeAllItems');
    },
    selectAllChange(){
      this.$emit('selectAllChange');
    }
  },
  mounted(){
    // 配置订阅消息及接收消息的回调函数
    this.publishId = pubsub.subscribe('addItem', (messageName, data) => {
      console.log('TodoCount接收消息 this：', this);
      console.log('TodoCount接收消息 messageName：', messageName);
      console.log('TodoCount接收消息 data', data);
    })
  },
  beforeDestroy(){
    // 取消订阅消息
    pubsub.unsubscribe(this.publishId);
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
#clearAllButton{
  width: 8em;
}
</style>
