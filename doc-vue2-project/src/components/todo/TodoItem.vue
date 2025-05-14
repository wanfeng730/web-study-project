<!--  -->

<template>
<transition appear 
name="animate__animated animate__bounce"
enter-active-class="animate__rubberBand"
leave-active-class="animate__bounceOut">
  <div class="item_div" @mouseover="mouseOverTodoItem()" @mouseout="mouseOutTotoItem()">
    <div class="item_content_div">
      <input type="checkbox" v-model="itemData.isDone" @change="itemCheckChange(itemData)">
      <input ref="updateInput"
      :class="itemNameClass"
      id="updateInput"
      type="text" 
      v-model="itemData.name" 
      @focusout="endUpdateTodoItem()">
    </div>
    <div>
      <button :class="deleteButtonClass" @click="removeTodoItem()">删除</button>
    </div>
    
  </div>
</transition>
</template>

<script>
import 'animate.css'
export default {
  name: 'TodoItem',
  data () {
    return {
      itemNameClass: {
        'item_name_input': true,
        'item_name_todo': true,
        'item_name_done': false
      },
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
      console.log("itemCheckChange itemData:", this.itemData);
      this.updateItemNameStyle();
    },
    itemCheck(event){
      console.log(event);
    },
    startUpdateTodoItem(){
      console.log('startUpdateTodoItem', this);
      // 开始编辑时自动获取焦点，通过vue的refs方式获取焦点的input框，此时输入框还在隐藏中，vue没有解析模版，所以focus失效
      // this.$refs.updateInput.focus();
      // 使用this.$nextTick回调，vue会在dom页面解析完成后调用该回调函数
      this.$nextTick(function(){
        this.$refs.updateInput.focus();
      })
      this.$eventCenter.$emit('startUpdateTodoItem', this.itemData);
    },
    endUpdateTodoItem(){
      console.log('endUpdateTodoItem', this.itemData);
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
    updateItemNameStyle(){
        this.itemNameClass.item_name_done = this.itemData.isDone;
        this.itemNameClass.item_name_todo = !this.itemData.isDone;
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
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.item_name_input{
  background: #22252A;
  color: aliceblue;
  height: 25px;
  border: none;
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
