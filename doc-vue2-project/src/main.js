import Vue from 'vue'
import App from './App.vue'

// 关闭Vue生产环境提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // 将App组件放入容器（el）中，渲染出来
  render: h => h(App),
}).$mount('#app')
