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