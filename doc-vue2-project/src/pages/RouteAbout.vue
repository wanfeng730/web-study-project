<!--  -->

<template>
<div>
  About Component<br>
  <router-link active-class="router_active" to="/about/news">News</router-link>
  <router-link active-class="router_active" to="/about/messages">Messages</router-link>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Messages from './Messages.vue';
import News from './News.vue';

export default {
  name: 'RouteAbout',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    News,
    Messages
  },
  //路由生命周期函数：该组件的路由被激活（用户切换到了该路由）
  activated(){
    console.log('About activated');
  },
  //路由生命周期函数：该组件的路由被失活（用户从该路由切走）
  deactivated(){
    console.log('About deactivated');
  },
  beforeDestroy(){
    console.log('RouteAbout beforeDestroy');
  }
}
</script>

<style scoped>
.router_active{
  background: gray;
}
</style>
