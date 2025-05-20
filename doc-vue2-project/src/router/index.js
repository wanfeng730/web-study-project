// 配置vue应用的路由
import RouteAbout from '@/pages/RouteAbout.vue';
import RouteHome from '@/pages/RouteHome.vue';
import VueRouter from 'vue-router'

// 创建路由实例对象
const router =new VueRouter({
  routes:[
    {
      path:'/about',
      component: RouteAbout
    },
    {
      path:'/home',
      component: RouteHome
    }
  ]
});

export default router;