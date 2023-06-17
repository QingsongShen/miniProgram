function formatTime(date) {
  var week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  var year = formatNumber(date.getFullYear());
  var month = formatNumber(date.getMonth() + 1);
  var day = formatNumber(date.getDate());
  var hour = formatNumber(date.getHours());
  var minute = formatNumber(date.getMinutes());
  var second = formatNumber(date.getSeconds());
  var weekday = date.getDay();
  var str = year + "年" + month + "月" + day + "日" + "\t" + hour + ":" + minute + ":" + second + "\t" + week[weekday];
  var strTime = year + "/" + month + "/" + day + "\t" + hour + ":" + minute + ":" + second
  var arr = [str, strTime]
  return arr

}
 
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
 
module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber
}