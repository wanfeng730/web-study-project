<!--  -->

<template>
<div>
  <span>消息id：{{ id }}</span><br>
  <span>消息名称：{{ name }}</span><br>
  <span>状态：{{ status }}</span><br>
  <span>UnitCode：{{ unitCode }}</span><br>

</div>
</template>

<script>
export default {
  name: 'MessageDetail',
  props:['id', 'name', 'status', 'unitCode'],
  data () {
    return {
      
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
