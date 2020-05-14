/* 
$notification.post(title<String>, subtitle<String>, body<String>) //surge通知推送
*/
//[Script]
// cron "*/30 7-23,0 * * *" 
//每天7：00-23：00和0点 的 0分和30分通知一次
//corn相关调试： https://crontab.guru/
var myDate=new Date();
var day = myDate.getDay();
var weeks = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
var randomcolor=new Array("🔴","🟣","🔵","🟢","🟡","🟠","⚪️","🟤","🔶","🔷","☣️","☢️","❤️","🧡","💛","💚","💙","🤎","🤍","💜","🌕","🌍","🧊","🏆","🥇","🥈","🥉","🏅","💎")
var randomnum=Math.floor(Math.random()*28)//生成0-27的随机数
var randomcolorshape=randomcolor[randomnum]
var week = weeks[day];
var today = '🦄️今天是' + myDate.getFullYear() + '年' + (myDate.getMonth()+1) + '月' + myDate.getDate() + '日' + " " + randomcolorshape+ week + "."//获取当前年月日，和周几；
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
var date = new Date() //当前时间
var year = date.getFullYear()
var month = date.getMonth()
var day1= date.getDate(); //月份的获取与赋值范围为 0-11
thisweek="当前是第" + getWeekNumber(year, month, day1) + "周"
$notification.post( today , time ,thisweek);

function isLeapYear(year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
function getMonthDays(year, month) {
    return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][month
    ] || (isLeapYear(year) ? 29 : 28);
}
function getWeekNumber(y, m, d) {
    var now = new Date(y, m, d),
        year = now.getFullYear(),
        month = now.getMonth(),
        days = now.getDate();
    //那一天是那一年中的第多少天
    for (var i = 0; i < month; i++) {
        days += getMonthDays(year, i);
    }
    //那一年第一天是星期几
    var yearFirstDay = new Date(year,
        0,
        1).getDay() || 7;
    var week = null;
    if (yearFirstDay == 1) {
        week = Math.ceil(days / yearFirstDay);
    } else {
        days -= (7 - yearFirstDay + 1);
        week = Math.ceil(days / 7) + 1;
    }
    return week - 7; //令2.17为第一周的周一
}
//成功判断当前周数
$done();
