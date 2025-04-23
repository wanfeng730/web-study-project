# web-study-project
WEB开发学习项目



# Vue
### ref属性
被用来做元素/组件实例的标记和引用
示例：doc-vue2-project\src\App.vue

### props配置
组件接收外部传入的数据
props不要去修改，若必要需求请在data中修改
示例：doc-vue2-project\src\components\UserInfo.vue

### mixin混合
抽取不同组件中可以复用的Vue配置（数据、方法、生命周期函数等）
在组件中引入则为局部混合，在main.js中引入则为全局混合
示例：doc-vue2-project\src\components\UserInfoMixin.vue

### plugin插件
用于扩展Vue的功能，插件是一个包含install方法的对象，install方法第一个参数是Vue构造函数，第二个以后得参数是插件使用者传递的数据
示例：doc-vue2-project\src\main.js

### scoped样式应用范围
在vue文件中，style代码块若标记了scoped，则该样式指只会应用于当前组件，不会应用到下级组件
示例：doc-vue2-project\src\App.vue


# 组件化编码流程
1. 实现静态组件：抽取组件，实现静态页面效果
2. 展示动态数据
3. 交互，绑定事件监听
4. 
