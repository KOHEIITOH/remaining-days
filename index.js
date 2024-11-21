// 初期ロード時にビューポートの高さを計算
let vh = window.innerHeight * 0.01;
// ビューポートの高さを基にしたCSS変数を設定
document.documentElement.style.setProperty('--vh', `${vh}px`);

// ウィンドウのリサイズ時にも再計算
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//残日数の算出
let today = new Date();
today.setHours(0,0,0,0);

const year = today.getFullYear(),
      month = ("0" + (today.getMonth() + 1)).slice(-2), // JavaScriptでは月は0から始まるため1を足す
      date = ("0" + today.getDate()).slice(-2), // 日にちが一桁のときに二桁表示にするため
      week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      day_of_week = week[today.getDay()],
      format_date = year + "." + month + "." + date + " " + day_of_week,
      end_year = new Date(today.getFullYear(), 11, 31),// JavaScriptでは年は0から始まるため11は12月を表す
      ms_per_day = 24 * 60 * 60 * 1000,
      float_days = (end_year.getTime() - today.getTime()) / ms_per_day,
      format_days = Math.ceil(float_days);

document.getElementById("today").innerHTML = format_date;
document.getElementById("days").innerHTML = format_days;