document.addEventListener('DOMContentLoaded', () => {
  // --- 時計と挨拶の処理 ---
  function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const hoursStr = String(hours).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[now.getDay()];

    // 時間帯に合わせて挨拶を変更
    let greetingText = 'Good Evening';
    if (hours >= 5 && hours < 12) {
    greetingText = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
    greetingText = 'Good Afternoon';
    }

    greetingText = 'Tokyo';// 固定で「Tokyo」と表示

    document.getElementById('greeting').textContent = greetingText;
    document.getElementById('time').textContent = `${hoursStr}：${minutes}`;
    document.getElementById('date').textContent = `${year}/${month}/${date} (${dayOfWeek})`;
  }

  // --- 天気と気温の処理 ---
  async function fetchWeather() {
    try {
    // 新宿の緯度経度
    const lat = 35.69;
    const lon = 139.70;
    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FTokyo`;
    const response = await fetch(url);
    const data = await response.json();
    
    const weatherCode = data.current_weather.weathercode;
    const temperature = data.current_weather.temperature;

    let weatherIcon = '☁️';
    if (weatherCode === 0) weatherIcon = '☀️';
    else if (weatherCode >= 1 && weatherCode <= 3) weatherIcon = '⛅';
    else if (weatherCode >= 51 && weatherCode <= 67) weatherIcon = '🌧️';
    else if (weatherCode >= 71 && weatherCode <= 77) weatherIcon = '❄️';
    else if (weatherCode >= 95) weatherIcon = '⚡';

    document.getElementById('weather').textContent = `${weatherIcon} ${temperature}℃`;
    } catch (error) {
    document.getElementById('weather').textContent = 'エラー';
    console.error('天気の取得に失敗しました', error);
    }
  }

  // 初期化と定期実行
  updateClock();
  setInterval(updateClock, 10000); // 10秒ごとに時計を更新

  fetchWeather();
  setInterval(fetchWeather, 600000); // 10分ごとに天気を更新

});