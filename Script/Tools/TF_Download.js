/* 可以下载更新国区没有的app
[General]
skip-proxy = %APPEND%iosapps.itunes.apple.com

[Script]
TF下载修正 = type=http-request,pattern=^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$,requires-body=1,script-update-interval=-1,max-size=0,script-path=https://raw.githubusercontent.com/Echo-FL/Surge/master/Script/Tools/TF_Download.js

[MITM]
hostname = testflight.apple.com
*/

let app = JSON.parse($request.body);
app.storefrontId = '143380-1,29';
$done({body:JSON.stringify(app)});