<!--  -->

<template>
<div>
  <div>
    <router-link class="navigation_item" active-class="active_item" to="/about">About</router-link>
    <router-link class="navigation_item" active-class="active_item" to="/home">Home</router-link>
  </div>

  <div>
    <!-- keep-alive包裹，在切换路由后不会被销毁 include指定包含的组件名，多个组件使用数组表示 -->
    <keep-alive :include="['RouteHome', 'RouteAbout']">
      <router-view></router-view>
    </keep-alive>
  </div>
</div>
</template>

<script>
import RouteAbout from '../../pages/RouteAbout.vue';
import RouteHome from '../../pages/RouteHome.vue';

export default {
  name: 'Route',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    RouteAbout,RouteHome
  }
}
</script>

<style scoped>
.navigation_item{
  width: 160px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-left: 30px;
  color: white;
}
.active_item{
  background: pink;
}
</style>
