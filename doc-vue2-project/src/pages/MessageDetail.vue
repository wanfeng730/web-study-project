<!--  -->

<template>
<div>
  <span>消息id：{{ $route.query.id }}</span><br>
  <span>消息名称：{{ $route.query.name }}</span>
</div>
</template>

<script>
export default {
  name: 'MessageDetail',
  data () {
    return {
      id:'',
      name:''
    }
  },
  methods: {
    
  },
  components: {
    
  },
  mounted(){
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
