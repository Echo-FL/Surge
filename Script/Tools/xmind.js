
/*
解锁xmind高级功能

[Script]
xmind = type=http-response,pattern=https?:\/\/.*\.xmind\..*\/_res\/devices,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Echo-FL/Surge/master/Script/Tools/xmind.js
[MITM]
hostname = *.xmind.*
*/


let obj = JSON.parse($response.body);

obj = {
  "raw_data": "S0MY6Wu5wpkW52RE5XmMkSMfTBvnytTwIJODrtVDjnA0axrORbnv9gh1RC4W3/ejTfQhNBb7CVxxpbYnBBk2tHc4gAODhsuGpHkltYNL/P5dfORSpdbiNkAZr5aBBbHS/dNlaYjLYyBkq9Ohfe0QS9PeXOWLbDdNA6kqidLJysw=",
  "license": {
    "status": "sub",
    "expireTime": 9999999999999
  },
  "_code": 200
}
  
$done({body: JSON.stringify(obj)});