let today = new Date();
today.setHours(0,0,0,0);

const year = today.getFullYear(),
      month = ("0" + (today.getMonth() + 1)).slice(-2), // JavaScriptでは月は0から始まるため1を足す
      date = ("0" + today.getDate()).slice(-2), // 日にちが一桁のときに二桁表示にするため
      week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      dayOfWeek = week[today.getDay()],
      formattedDate = year + "." + month + "." + date + " " + dayOfWeek,
      endYear = new Date(today.getFullYear(), 11, 31),// JavaScriptでは年は0から始まるため11は12月を表す
      msPerDay = 24 * 60 * 60 * 1000,
      daysLeft = (endYear.getTime() - today.getTime()) / msPerDay,
      formatDaysLeft = Math.ceil(daysLeft);

document.getElementById("today").innerHTML = formattedDate;
document.getElementById("daysLeft").innerHTML = "今年の残日数 " + formatDaysLeft + " 日";