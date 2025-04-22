export const userConfig = {
    data() {
        return {
            username: 'wanfeng',
            status: 'study...',
            componentName: '测试组件名称'
        }
    },
    methods: {
        showStatus(){
            alert(this.status);
        }
    }
}