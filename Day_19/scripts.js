const toggle = document.querySelector('.toggle');
const html = document.documentElement;

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
    } 
});

function scale(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function setTime() {
    const now = new Date();

    const month = now.getMonth();
    const day = now.getDay();
    const date = now.getDate();
    const hours = now.getHours();
    const hoursForClock = hours % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hourDegrees = scale(hoursForClock + minutes / 60, 0, 12, 0, 360);
    const minuteDegrees = scale(minutes + seconds / 60, 0, 60, 0, 360);
    const secondDegrees = scale(seconds, 0, 60, 0, 360);

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;

    const displayHour = hoursForClock === 0 ? 12 : hoursForClock;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

    timeEl.innerHTML = `${displayHour}:${displayMinutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);