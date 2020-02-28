[Script]

# 报时器

cron "*/30 7-23,0 * * *" script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/self-js/Chronograph.js,script-update-interval=0

# AppPricer

cron "0 * * * *" debug=1,script-path=AppPricer.js

# 京东签到
cron "0,1 0,12 * * *" script-path=https://raw.githubusercontent.com/sky003-Max/Script/master/JD-DailyBonus/JD_DailyBonus.js,script-update-interval=0

# 什么值得买签到

cron "2 0,12 * * *" script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/smzdm/smzdm.js,script-update-interval=0

# 爱奇艺签到

cron "3 0,12 * * *" script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/iQIYI-DailyBonus/iQIYI_DailyBonus.js,script-update-interval=0

# N3RO签到

cron "1,2 8,18  * * *" script-path=n3ro.js

# 京东价格

http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/jd_price.js,script-update-interval=0

# 淘宝价格二选一

http-response ^https://trade-acs.m.taobao.com/gw/mtop.taobao.detail.getdetail requires-body=1,max-size=1048576,script-phttps://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/tbprice/tb_price.js,script-update-interval=0


//http-response ^https://trade-acs.m.taobao.com/gw/mtop.taobao.detail.getdetail requires-body=1,max-size=1048576,script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/tbprice/tb_price_lite.js,script-update-interval=0

# 微信去广告

http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/other/WeChat.js,script-update-interval=0

# 爱奇艺签到获取cookie

http-request https?:\/\/.*\.iqiyi\.com\/.*authcookie= script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/iQIYI-DailyBonus/iQIYI_GetCookie.js,script-update-interval=0

# 什么值得买获取cookie

http-request ^https:\/\/www\.smzdm\.com\/?.? script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/smzdm/smzdm.cookie.js

# 京东获取cookie

http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) script-path=https://raw.githubusercontent.com/sky003-Max/Script/master/JD-DailyBonus/JD_DailyBonus.js,script-update-interval=0

# Netflix 评分

http-request ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/other/nf_rating.js

http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D requires-body=1,script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/other/nf_rating.js

# 彩云天气

http-response ^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/sky003-Max/surge-personal/master/Script/other/ColorWeather.js


