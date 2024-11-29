// 初期ロード時にビューポートの高さを計算
let vh = window.innerHeight * 0.01;
// ビューポートの高さを基にしたCSS変数を設定
document.documentElement.style.setProperty('--vh', `${vh}px`);

// ウィンドウのリサイズ時にも再計算
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let today = new Date();
today.setHours(0,0,0,0);

// 今年度の残日数の算出
const year = today.getFullYear(),
      month = ("0" + (today.getMonth() + 1)).slice(-2), // JavaScriptでは月は0から始まるため1を足す
      date = ("0" + today.getDate()).slice(-2), // 日にちが一桁のときに二桁表示にするため
      week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      day_of_week = week[today.getDay()],
      format_date = year + "." + month + "." + date + " " + day_of_week,
      fiscal_year_end = today.getMonth() >= 3 ? today.getFullYear() + 1 : today.getFullYear(),
      end_of_fiscal_year = new Date(fiscal_year_end, 2, 31),
      fiscal_diff = end_of_fiscal_year.getTime() - today.getTime(),
      format_fiscal_remaining_days = Math.ceil(fiscal_diff / (24 * 60 * 60 * 1000));

document.getElementById("today").innerHTML = format_date;
document.getElementById("fy-days").innerHTML = format_fiscal_remaining_days;// 今年度の残日数

// 日数のクリック
const item = document.querySelector('.days');

item.addEventListener('click', function() {
    item.classList.toggle('days-animation');
});