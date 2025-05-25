// 配置vue应用的路由
import MessageDetail from '@/pages/MessageDetail.vue';
import Messages from '@/pages/Messages.vue';
import News from '@/pages/News.vue';
import RouteAbout from '@/pages/RouteAbout.vue';
import RouteHome from '@/pages/RouteHome.vue';
import VueRouter from 'vue-router'

// 创建路由实例对象
const router = new VueRouter({
  mode: 'hash',
  routes:[
    {
      // 第一级路径需要用斜杠开头
      path:'/about',
      component: RouteAbout,
      // meta元信息，存储的数据会被保存，在路由route信息中可以找到使用
      meta:{
        title: '关于'
      },
      children:[
        // 从第二级开始不要用斜杠
        {
          path: 'news',
          component: News,
          meta: {
            title: '新闻'
          },
          // 前置路由守卫   注意：没有后置路由守卫的写法
          beforeEnter: (to, from, next) => {
            console.log('beforeEnter 新闻独享路由前置守卫');
            // console.log('to: ', to);
            // console.log('from: ', from);
            // console.log('next: ', next);
            next()
          }
        },
        {
          path: 'messages',
          component: Messages,
          meta:{
            // 是否需要校验权限
            isAuth: true,
            title: '消息待办'
          },
          children: [
            {
              path: 'detail',
              component: MessageDetail,
              meta: {
                // 是否需要校验权限
                isAuth: true,
                title: '消息详情'
              },
              // props为对象
              // props:{status: '学习中', unitCode:'YYGHJ'},

              // props为函数，参数为route，返回传递的数据
              props($route){
                return{
                  id: $route.query.id,
                  name: $route.query.name,
                  status: '学习中',
                  unitCode: 'HHJYH-$ROUTE'
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
      component: RouteHome,
      meta: {
        // 是否需要校验权限
        isAuth: true,
        title: '主页'
      },
    }
  ]
});

// 配置前置路由守卫
/**
 * to   切换前的路由信息
 * from 切换后的路由信息
 * next 切换函数，调用即表示切换到下一个路由
 */
router.beforeEach((to, from, next) => {
  console.log('beforeEach 路由切换前调用');
  // console.log('to: ', to);
  // console.log('from: ', from);
  // console.log('next: ', next);
  
  if (to.meta.isAuth){
    var list = localStorage.getItem('todoItemList') ? JSON.parse(localStorage.getItem('todoItemList')) : [];
    if (list.length < 5) {
      alert('待办事项少于5个，不能切换');
      return;
    }
  }

  // 校验通过，切换路由
  next();
})

// 配置后置路由守卫
// 常用场景为切换路由后更改页面标题
/**
 * to   切换前的路由信息
 * from 切换后的路由信息
 */
router.afterEach((to, from) => {
  console.log('afterEach 路由切换后调用');
  // console.log('to: ', to);
  // console.log('from: ', from);
  document.title = to.meta.title || 'Vue2首页';
})

export default router;