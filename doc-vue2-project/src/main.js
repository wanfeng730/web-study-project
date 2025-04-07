// 引入的是vue.runtime.xxx.js，这种vue是没法解析template配置的，只包含核心功能
import Vue from 'vue'
import App from './App.vue'

// 关闭Vue生产环境提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // 将App组件放入容器（el）中，渲染出来
  render: h => h(App)

  // render函数的原型，createElementFunc是创建一个标签或组件的函数
  // render(createElementFunc){
  //   return createElementFunc(App)
  // }
}).$mount('#app')
