<!--  -->

<template>
<div>
  <div>
    <router-link class="navigation_item" active-class="active_item" to="/about">About</router-link>
    <router-link class="navigation_item" active-class="active_item" to="/home">Home</router-link>
  </div>

  <div>
    <router-view></router-view>
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
