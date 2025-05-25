// 配置vue应用的路由
import MessageDetail from '@/pages/MessageDetail.vue';
import Messages from '@/pages/Messages.vue';
import News from '@/pages/News.vue';
import RouteAbout from '@/pages/RouteAbout.vue';
import RouteHome from '@/pages/RouteHome.vue';
import VueRouter from 'vue-router'

// 创建路由实例对象
const router = new VueRouter({
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
              component: MessageDetail,
              // props为对象
              // props:{status: '学习中', unitCode:'YYGHJ'},

              // props为函数，参数为route，返回传递的数据
              props($route){
                return{
                  id: $route.query.id,
                  name: $route.query.name,
                  status: '学习中',
                  unitCode: 'HHJYH'
                }
              },

              // props为函数，参数为route，返回传递的数据（解构赋值）
              props({query:{id, name}}) {
                return {
                  id,
                  name,
                  status: '学习中',
                  unitCode: 'HHJYH'
                }
              }
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

// 配置路由守卫
/**
 * to   切换前的路由信息
 * from 切换后的路由信息
 * next 切换函数，调用即表示切换到下一个路由
 */
router.beforeEach((to, from, next) => {
  console.log('路由切换前调用', to, from, next);
  
  if (to.path === '/about/messages'){
    var list = localStorage.getItem('todoItemList') ? JSON.parse(localStorage.getItem('todoItemList')) : [];
    if (list.length < 5) {
      alert('待办事项少于5个，不能切换');
      return;
    }
  }

  // 校验通过，切换路由
  next();
})

export default router;