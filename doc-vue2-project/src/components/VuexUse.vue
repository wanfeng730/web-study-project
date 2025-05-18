<!--  -->

<template>
<div>
  <span>计数：{{ todoStore.num }}</span>
  <button @click="increase()">增加</button>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VuexUse',
  data () {
    return {

    }
  },
  methods: {
    increase(){
      // 调用 dispatch(actionName, params...)
      this.$store.dispatch('increase', 1, 'wanfeng');
    }
  },
  computed:{
    // 映射state对象，生成对应的计算函数 mapState({func:'stateKey'})
    // mapState(namespace, {func:'stateKey'})
    ...mapState('todoStore', {num:'num'}),
    // 相当于：
    // num(){
    //   return this.$store.state.num;
    // }
  },
  components: {
    
  },
  mounted(){
    console.log('VuexUse Component:', this);
    console.log('VuexUse x:', x);
  }
}
</script>

<style scoped>

</style>
