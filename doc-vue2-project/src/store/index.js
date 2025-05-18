// 创建vuex的store配置

import Vuex from 'vuex'
import Vue from 'vue'

// 使用vuex（必须在new Vuex.Store 前执行use，否则会报错）
Vue.use(Vuex);

// 响应组件的动作
const actions = {
  // 响应组件的函数 func(context, value)
  //  context: store上下文
  //  value：传值
  increase(context, value){
    console.log('actions increase...', context, value);
    context.commit('INCREASE', value);
  }
}

// 操作数据
const mutations = {
  // actions提交的函数，操作数据函数名一般全大写

  INCREASE(state, value){
    console.log('mutations INCREASE...', state, value);
    state.num += value;
  }
}

// 存储数据
const state = {
  num: 39
}

// todo模块的store对象
const todoStore = {
  // 开启命名空间，时组件在mapState时候可以根据第一个参数（名称，例如todoStore）直接获取到这个store对象
  // ...mapState('todoStore', {num:'num'}),
  namespaced: true,
  actions,
  mutations,
  state
}

// user模块的store对象
const userStore = {
  namespaced: true,
  actions:{

  },
  mutations:{

  },
  state:{

  }
}

export default new Vuex.Store({
  modules:{
    todoStore, 
    userStore
  }
});