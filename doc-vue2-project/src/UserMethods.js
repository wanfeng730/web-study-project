export const userConfig = {
    data() {
        return {
            username: 'wanfeng',
            status: 'study...'
        }
    },
    methods: {
        showStatus(){
            alert(this.status);
        }
    }
}