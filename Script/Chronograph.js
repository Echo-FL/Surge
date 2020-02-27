/* 
$notification.post(title<String>, subtitle<String>, body<String>) //surge通知推送
*/
//[Script]
// cron "*/30 7-23,0 * * *" debug=1,script-path= https://github.com/sky003-Max/surge-script/raw/master/Chronograph.js
//每天7：00-23：00和0点 的 0分和30分通知一次
//corn相关调试： https://crontab.guru/
var myDate=new Date();
var day = myDate.getDay();
var weeks = new Array("🟠周日", "⚫️周一", "🟡周二", "🟢周三", "🔵周四", "🔴周五", "🟣周六");
var week = weeks[day];
var today = '🦄️今天是' + myDate.getFullYear() + '年' + myDate.getMonth() + '月' + myDate.getDate() + '日' + " " + week + "."//获取当前年月日，和周几；
var hour = myDate.getHours();
var judge;
if (0 <= hour && hour < 6)
    judge = '凌晨'
else if (5 <= hour && hour < 8)
    judge = "早晨"
else if (8 <= hour && hour < 11)
    judge = "上午"
else if (11 <= hour && hour < 13)
    judge = '中午'
else if (13 <= hour && hour < 17)
    judge = '下午'
else if (17 <= hour && hour < 18)
    judge = '傍晚'
else if (18 <= hour && hour < 24)
    judge = '晚上'    
var minute= myDate.getMinutes();
var time;
if(minute===0)
   time='⌚️现在是'+judge+hour+'点整';
else
   time= '⌚️现在是'+judge+hour+'点'+minute+"分";
$notification.post( today , time ,"");
$done();
