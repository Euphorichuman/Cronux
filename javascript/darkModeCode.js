const generalStyle = document.querySelector('#general-style');
const clockStyle = document.querySelector('#clock-style');
const stopwatchStyle = document.querySelector('#stopwatch-style');
const timerStyle = document.querySelector('#timer-style');
const icon = document.getElementById("dark-mode");

// Function to enable/disable the dark mode, with user preferences
(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;


    if (userPrefersDark) {
        console.log('User prefers a dark interface');
        generalStyle.href = './css/dark-theme/styleDark.css';
        clockStyle.href = './css/dark-theme/clockStyleDark.css';
        stopwatchStyle.href = './css/dark-theme/stopwatchStyleDark.css';
        timerStyle.href = './css/dark-theme/timerStyleDark.css';
        icon.innerHTML = 'dark_mode';
    } else if (userPrefersLight) {
        console.log('User prefers a light interface')
        generalStyle.href = './css/style.css';
        clockStyle.href = './css/clockStyle.css';
        stopwatchStyle.href = './css/stopwatchStyle.css';
        timerStyle.href = './css/timerStyle.css';
        icon.innerHTML = 'light_mode';
    }
})()


//function to enable/disable the dark mode, with button
function darkMode() {
    if (icon.innerHTML === "light_mode") {
        generalStyle.href = './css/dark-theme/styleDark.css';
        clockStyle.href = './css/dark-theme/clockStyleDark.css';
        stopwatchStyle.href = './css/dark-theme/stopwatchStyleDark.css';
        timerStyle.href = './css/dark-theme/timerStyleDark.css';
        icon.innerHTML = 'dark_mode';
    } else {
        generalStyle.href = './css/style.css';
        clockStyle.href = './css/clockStyle.css';
        stopwatchStyle.href = './css/stopwatchStyle.css';
        timerStyle.href = './css/timerStyle.css';
        icon.innerHTML = 'light_mode';
    }
}