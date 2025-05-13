<!--  -->

<template>
<div>
    <button @click="changeShow">显示/隐藏</button>
    <!-- transition vue加入动画 name表示这个动画的名字，带上一些特定的后缀可以让vue在特定的时候调用动画效果 -->
    <!-- 若没有name，则前缀默认为v- -->
    <!-- 
        v-enter-active
     -->
    <transition name="wanfeng">
      <div class="display_text" v-show="isShow">知晓自身的无知，便是最大的睿智</div>
    </transition>
</div>
</template>

<script>
export default {
  name: 'AnimationInOut',
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

.wanfeng-enter-active{
    animation: textMove 1s;
}
.wanfeng-leave-active{
    animation: textMove 1s reverse;
}

@keyframes textMove{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>
