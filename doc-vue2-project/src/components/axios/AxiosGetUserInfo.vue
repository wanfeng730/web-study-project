<!--  -->

<template>
<div>
    <div class="defaultBorderClass divMargin">
        <span>用户登录名：{{loginName}}</span> <br>
        <span>用户姓名：{{displayName}}</span> <br>
        <span>密码：{{password}}</span><br>
        <span>过期时间：{{expireDate}}</span><br>
        <button @click="getUserInfo()">查看最新用户信息</button>
        <span v-show="isLoading">Loading...</span>
        <span v-show="isError">{{ errorMessage }}</span>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AxiosGetUserInfo',
  data () {
    return {
        loginName: '',
        displayName: '',
        password: '',
        expireDate: '',
        isLoading: false,
        isError: false,
        errorMessage: '',
        getUserBody: {
            "fieldName": "type",
            "fieldType": "string",
            "operate": 5,
            "value": "user"
        }
    }
  },
  methods: {
    // axios发送post请求示例
    postUserInfo(){
        // 请求前设置为加载中状态
        this.isLoading = true;
    
        axios.post('http://localhost:7300/simpleproto/user/simple_list_user', this.getUserBody)
        .then(
            response => {
                console.log('获取到用户数据', response);
                var returnData = response.data;
                if(returnData.data == null){
                    this.errorMessage = returnData.message;
                    this.isError = true;
                    return;
                }
                var user = returnData.data.dataList[0];
                console.log('firstUser:', user);
                this.loginName = user.username,
                this.displayName = user.displayName;
                this.password = user.password;
                this.expireDate = user.expireDate;
                this.isError = false;
                this.isLoading = false;
            },
            error => {
                console.log('请求失败', error.message);
                this.errorMessage = error.message;
                this.isError = true;
                this.isLoading = false;
            }
        )
    },
    // axios发送get请求示例
    getUserInfo(){
        // 请求前设置为加载中状态
        this.isLoading = true;
    
        axios.get('http://localhost:7300/simpleproto/user/detail_user?userId=171')
        .then(
            response => {
                console.log('获取到用户数据', response);
                var returnData = response.data;
                if(returnData.data == null){
                    this.errorMessage = returnData.message;
                    this.isError = true;
                    return;
                }
                var user = returnData.data;
                console.log('firstUser:', user);
                this.loginName = user.username,
                this.displayName = user.displayName;
                this.password = user.password;
                this.expireDate = user.expireDate;
                this.isError = false;
                this.isLoading = false;
            },
            error => {
                console.log('请求失败', error.message);
                this.errorMessage = error.message;
                this.isError = true;
                this.isLoading = false;
            }
        )
    }
  },
  components: {
    
  }
}
</script>

<style scoped>

</style>
