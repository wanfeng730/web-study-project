<!--  -->

<template>
<div>
    <button @click="changeShow">显示/隐藏</button>
    <!-- transition vue加入动画 name表示这个动画的名字，带上一些特定的后缀可以让vue在特定的时候调用动画效果 -->
    <!-- 若没有name，则前缀默认为v- -->
    <!-- 
        v-enter-active
     -->
     <transition
     appear 
     name="animate__animated animate__bounce"
     enter-active-class="animate__swing"
     leave-active-class="animate__backOutDown"
     >
       <div class="display_text" v-show="isShow">我们于此索求神性，以填补世界的裂缝，为肉身灌注黄金之血，为神谕甘愿枯竭干涸</div>
     </transition>

     <transition-group
     appear 
     name="animate__animated animate__bounce"
     enter-active-class="animate__swing"
     leave-active-class="animate__backOutDown"
     >
       <div key="1" class="display_text" v-show="isShow">ABG</div>
       <div key="2" class="display_text" v-show="!isShow">ESG</div>
     </transition-group>
    
</div>
</template>

<script>
import 'animate.css'
export default {
  name: 'AnimateUse',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    changeShow(){
        this.isShow = !this.isShow;
    }
  },
  components: {
    
  }
}
</script>

<style scoped>
.display_text{
    background-color: gold;
    font-size: 30px;
    color: black;
}

</style>
