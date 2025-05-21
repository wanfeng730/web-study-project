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
  }
}
</script>

<style scoped>
.router_active{
  background: gray;
}
</style>
