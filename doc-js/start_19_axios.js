// axios



// var p1 = await axios.get('http://localhost:7301/xhs/article/get_all');


(async () => {
    // 基地址配置
    var xhsApp = axios.create({baseURL:'http://localhost:7301/xhs'});
    
    //拦截器配置
    xhsApp.interceptors.request.use(config => {
        console.log(`拦截器执行,输出请求信息`);
        console.log(config);
        // 返回请求信息正常发送请求
        return config;
    })
    
    
    var res = await xhsApp.get('/article/get_all');
    console.log(res);
    console.log(res.data);
})()