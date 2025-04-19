const daysEI = document.getElementById('days');
const hoursEI = document.getElementById('hours');
const minutesEI = document.getElementById('minutes');
const secondsEI = document.getElementById('seconds');

const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

function updaetCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000;
    const minute = second * 60 ;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    daysEI.textContent = String(days).padStart(2, '0');
    hoursEI.textContent = String(hours).padStart(2, '0');
    minutesEI.textContent = String(minutes).padStart(2, '0');
    secondsEI.textContent = String(seconds).padStart(2, '0')
}
    setInterval(updaetCountdown,1000);
    updaetCountdown();
