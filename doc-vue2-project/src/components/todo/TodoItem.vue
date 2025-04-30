<!--  -->

<template>
<div class="item_div" @mouseover="mouseOverTodoItem()" @mouseout="mouseOutTotoItem()">
  <div class="item_content_div">
    <input type="checkbox" v-model="itemData.isDone" @change="itemCheckChange(itemData)">
    <span :class="getItemNameClass">{{ itemData.name }}</span>
  </div>
  <div>
    <button :class="updateButtonClass" @click="updateTodoItem()">编辑</button>
    <button :class="deleteButtonClass" @click="removeTodoItem()">删除</button>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'TodoItem',
  data () {
    return {
      itemNameClass: 'item_name_todo',
      // itemName: '事项名称',
      // isDone: false
      updateButtonClass: {
        item_button: true,
        update_button: true,
        display_disable: true,
        display_enable: false
      },
      deleteButtonClass: {
        item_button: true,
        delete_button: true,
        display_disable: true,
        display_enable: false
      },
    }
  },
  // 接收事项数据
  props:['itemData'],
  methods:{
    itemCheckChange(itemData){
      console.log("itemCheckChange itemData:", itemData);
    },
    itemCheck(event){
      console.log(event);
    },
    updateTodoItem(){

    },
    removeTodoItem(){
      // 触发全局事件removeTodoItem
      console.log('触发全局事件removeTodoItem itemData:', this.itemData);
      this.$eventCenter.$emit('removeTodoItem', this.itemData);
    },
    mouseOverTodoItem(){
      this.updateButtonClass.display_enable = true;
      this.updateButtonClass.display_disable = false;
      this.deleteButtonClass.display_enable = true;
      this.deleteButtonClass.display_disable = false;
    },
    mouseOutTotoItem(){
      this.updateButtonClass.display_enable = false;
      this.updateButtonClass.display_disable = true;
      this.deleteButtonClass.display_enable = false;
      this.deleteButtonClass.display_disable = true;
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
