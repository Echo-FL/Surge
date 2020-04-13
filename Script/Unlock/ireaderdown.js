
var obj = JSON.parse($response.body); 
obj['body']['is_recharged'] = true;
obj['body']['price_per_unit'] = 0;
//obj['body']['fee_info']['is_vip_used'] = true;
obj['body']['fee_info']['price'] = 0;
obj['body']['fee_info']['original_price'] = 0;


$done({body: JSON.stringify(obj)});

/*
美区掌阅
^https:\/\/api\.ireader\.mobi\/download\/fee_tpl\/.* url script-response-body NobyDa/Surge/JS/ireaderdown.js

surge 4

http-response ^https:\/\/api\.ireader\.mobi\/download\/fee_tpl\/.* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/other/ireaderdown.js

Mimt=api.ireader.mobi
*/