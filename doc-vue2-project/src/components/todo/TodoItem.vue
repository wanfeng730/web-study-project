<!--  -->

<template>
<div class="item_div">
  <div class="item_content_div">
    <input type="checkbox" v-model="itemData.isDone" @change="itemCheckChange(itemData)">
    <span :class="getItemNameClass">{{ itemData.name }}</span>
  </div>
  <button class="delete_button" @click="removeTodoItem(itemData)">删除</button>
</div>
</template>

<script>
export default {
  name: 'TodoItem',
  data () {
    return {
      itemNameClass: 'item_name_todo'
      // itemName: '事项名称',
      // isDone: false
    }
  },
  // 接收事项数据
  props:['itemData', 'removeTodoItem'],
  methods:{
    itemCheckChange(itemData){
      console.log("itemCheckChange itemData:", itemData);
    },
    itemCheck(event){
      console.log(event);
    }
  },
  computed:{
    // 计算待办事项名称的class名称
    getItemNameClass(){
      return this.itemData.isDone ? 'item_name_done' : 'item_name_todo'
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
.item_name_todo{
  color: white;
  font-weight: bold;
}
.item_name_done{
  color: gray;
  text-decoration: line-through;
}

</style>
