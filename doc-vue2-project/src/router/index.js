// 配置vue应用的路由
import MessageDetail from '@/pages/MessageDetail.vue';
import Messages from '@/pages/Messages.vue';
import News from '@/pages/News.vue';
import RouteAbout from '@/pages/RouteAbout.vue';
import RouteHome from '@/pages/RouteHome.vue';
import VueRouter from 'vue-router'

// 创建路由实例对象
const router =new VueRouter({
  routes:[
    {
      // 第一级路径需要用斜杠开头
      path:'/about',
      component: RouteAbout,
      children:[
        // 从第二级开始不要用斜杠
        {
          path: 'news',
          component: News
        },
        {
          path: 'messages',
          component: Messages,
          children: [
            {
              path: 'detail',
              component: MessageDetail
            }
          ]
        }
      ]
    },
    {
      path:'/home',
      component: RouteHome
    }
  ]
});

export default router;