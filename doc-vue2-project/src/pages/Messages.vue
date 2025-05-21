<!--  -->

<template>
<div>
  MessageContent
  <ul>
    <li v-for="item in todoItemList" :key="item.id">
      <!-- 拼接参数方式跳转 -->
      <!-- <router-link active-class="active_message" :to="`/about/messages/detail?id=${item.id}&name=${item.name}`">{{ item.name }}</router-link> -->
      <!-- 携带对象参数方式跳转 -->
      <router-link active-class="active_message" :to="{
        path: '/about/messages/detail',
        query:{
          id: item.id,
          name: item.name
        }
      }">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Messages',
  data () {
    return {
      // 若localStorage为null，则使用空数组
      todoItemList: localStorage.getItem('todoItemList') ? JSON.parse(localStorage.getItem('todoItemList')) : []
    }
  },
  methods: {
    
  },
  components: {
    
  }
}
</script>

<style scoped>
.active_message{
  background: pink;
}
</style>
