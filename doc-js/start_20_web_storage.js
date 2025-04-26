// WebStorage浏览器存储

// 清空本地存储：window.localStorage.clear()
localStorage.clear()

// 写入本地存储：window.localStorage.setItem(key, value);
localStorage.setItem(new Date(), '进入网页');
localStorage.setItem('loginName', 'bawang');

// 读取本地存储：window.localStorage.getItem(key)
console.log(localStorage.getItem('loginName'));

// 删除本地存储：window.localStorage.removeItem(key)
localStorage.removeItem('loginName');


// 浏览器会话存储：Session Storage
// 浏览器关闭后会清空

// window.sessionStorage.setItem(key, value)
sessionStorage.setItem('sessionName', "wanfeng")
sessionStorage.setItem('searchHistory', JSON.stringify(['喂喂喂', '123']));


// window.sessionStorage.getItem(key)
console.log(JSON.parse(sessionStorage.getItem('searchHistory')));

// window.sessionStorage.removeItem(key)

// window.sessionStorage.clear()
