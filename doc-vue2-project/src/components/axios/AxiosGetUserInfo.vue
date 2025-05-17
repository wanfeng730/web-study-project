<!--  -->

<template>
<div>
    <div class="defaultBorderClass divMargin">
        <span>用户登录名：{{loginName}}</span> <br>
        <span>用户姓名：{{displayName}}</span> <br>
        <span>密码：{{password}}</span><br>
        <span>过期时间：{{expireDate}}</span><br>
        <button @click="getUserInfo()">查看最新用户信息</button>
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
        getUserBody: {
            "filterList": [
                {
                    "fieldName": "type",
                    "fieldType": "string",
                    "operate": 5,
                    "value": "user"
                }
            ],
            "pageInfo": {
                "currentPage": 1,
                "pageSize": 1
            },
            "sortList": [
                {
                    "fieldName": "create_date",
                    "sortType": "desc"
                }
            ]
        }
    }
  },
  methods: {
    getUserInfo(){
        axios.post('http://localhost:7300/simpleproto/user/list_user', this.getUserBody).then(
            response => {
                console.log('获取到用户数据', response);
                var user = response.data.data.dataList[0];
                console.log('firstUser:', user);
                this.loginName = user.username,
                this.displayName = user.displayName;
                this.password = user.password;
                this.expireDate = user.expireDate;
            },
            error => {
                console.log('请求失败', error.message);
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
