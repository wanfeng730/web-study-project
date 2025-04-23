<!--  -->

<template>
<div class="item_div">
  <div class="item_content_div">
    <input type="checkbox" v-model="isDone">
    <span class="itemContent">{{ itemName }}</span>
  </div>
  <button class="delete_button">删除</button>
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
  props:['itemName', 'isDone']
}
</script>

<style scoped>
* {
  font-size: 15px;
}
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
.item_content_div{

}
.delete_button{
  color: white;
  background-color: orangered;
  width: 60px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
