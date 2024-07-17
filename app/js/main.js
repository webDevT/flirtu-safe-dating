function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;

    setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.hours.textContent = hours;
        display.minutes.textContent = minutes;
        display.seconds.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = () => {
    const countdownDuration = 13 * 3600 + 18 * 60 + 49; // 13 hours, 18 minutes, 49 seconds
    const display = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    startCountdown(countdownDuration, display);
};