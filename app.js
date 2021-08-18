setInterval(() => {
    d = new Date()
    hour = d.getHours()
    minute = d.getMinutes()
    second = d.getSeconds()
    document.querySelector('.hour').innerText = hour;
    document.querySelector('.minute').innerText = minute;
    document.querySelector('.second').innerText = second;
}, 1000);