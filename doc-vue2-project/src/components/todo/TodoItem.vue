<!--  -->

<template>
<div class="item_div">
  <div class="item_content_div">
    <input type="checkbox" v-model="itemData.isDone" @click="itemCheckChange(itemData)">
    <span class="itemContent">{{ itemData.name }}</span>
  </div>
  <button class="delete_button" @click="removeTodoItem(itemData)">删除</button>
</div>
</template>

<script>
export default {
  name: 'TodoItem',
  data () {
    return {
      // itemName: '事项名称',
      // isDone: false
    }
  },
  // 接收事项数据
  props:['itemData', 'removeTodoItem'],
  methods:{
    itemCheckChange(itemData){
      console.log("itemCheckChange itemData:", itemData);
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
}
.item_div{
  width: 350px;
  border-bottom: 1px solid gray;
}

</style>
