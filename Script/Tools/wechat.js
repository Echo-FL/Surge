/*
微信 去除公众号文章底部广告

[Script]
http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Echo-FL/Surge/master/Script/Tools/wechat.js

[MITM]
hostname = mp.weixin.qq.com

**************************/
console.log($response.body);
var obj = JSON.parse($response.body);
console.log(obj);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
