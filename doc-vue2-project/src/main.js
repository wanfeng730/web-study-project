// 引入的是vue.runtime.xxx.js，这种vue是没法解析template配置的，只包含核心功能
import Vue from 'vue'
import App from './App.vue'

// 引入插件
import testPlugins from './testPlugins'
// 引入store
import store from './store'
// import store from './store/index.js'

// 引入vue路由插件
import VueRouter from 'vue-router'
import routerConfig from './router/index.js'

// 引入 ElementUI 组件库
import ElementUI from 'element-ui';
// 引入 ElementUI 全部样式
import 'element-ui/lib/theme-chalk/index.css';

// 关闭Vue生产环境提示
Vue.config.productionTip = false

// 使用插件
Vue.use(testPlugins);

// // 全局事件总线组件初始化
// const EventCenter = Vue.extend({});
// console.log('初始化事件总线组件原型', EventCenter);
// const eventCenter = new EventCenter();
// console.log('初始化事件总线组件实例', eventCenter);
// Vue.prototype.eventCenter = eventCenter;

Vue.use(VueRouter);

Vue.use(ElementUI);

// 创建Vue实例对象
const vue = new Vue({
  // 将App组件放入容器（el）中，渲染出来
  render: h => h(App),
  // render函数的原型，createElementFunc是创建一个标签或组件的函数
  // render(createElementFunc){
  //   return createElementFunc(App)
  // }

  // 使用Vuex后可配置store，在vue实例的$store中存储
  store: store,

  router: routerConfig,
  

  beforeCreate(){
    // 初始化全局事件总线：将vm对象作为全局事件总线放在原型对象上（
    // 本质就是让所有组件实例都可以通过 this.eventCenter 直接访问到vue实例对象，从而进行绑定事件和触发事件
    Vue.prototype.$eventCenter = this;
  }
}).$mount('#app');
console.log(vue);
