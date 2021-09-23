const generalStyle = document.querySelector('#general-style');
const clockStyle = document.querySelector('#clock-style');
const stopwatchStyle = document.querySelector('#stopwatch-style');
const timerStyle = document.querySelector('#timer-style');
const icon = document.getElementById("dark-mode");
const currentTheme = localStorage.getItem("theme");

/**
 * Arrow function to toggle dark-light mode, with user preferences
 */
(() => {

    /*Get the user's theme preference from localStorage if it's available*/
    /*Or get the user's theme preference from system configuration*/
    if (localStorage.getItem("theme")) {
        /*Use user's preference from localStorage*/
        if (localStorage.getItem("theme") == "dark") {
            generalStyle.href = './css/dark-theme/styleDark.css';
            clockStyle.href = './css/dark-theme/clockStyleDark.css';
            stopwatchStyle.href = './css/dark-theme/stopwatchStyleDark.css';
            timerStyle.href = './css/dark-theme/timerStyleDark.css';
            icon.innerHTML = 'dark_mode';

        } else if (localStorage.getItem("theme") == "light") {
            generalStyle.href = './css/style.css';
            clockStyle.href = './css/clockStyle.css';
            stopwatchStyle.href = './css/stopwatchStyle.css';
            timerStyle.href = './css/timerStyle.css';
            icon.innerHTML = 'light_mode';
        }

    } else {
        /*Save the user's theme preference from system configuration*/
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

        /*Use user's preference from system configuration*/
        if (userPrefersDark) {
            /*Change Stylesheets*/
            generalStyle.href = './css/dark-theme/styleDark.css';
            clockStyle.href = './css/dark-theme/clockStyleDark.css';
            stopwatchStyle.href = './css/dark-theme/stopwatchStyleDark.css';
            timerStyle.href = './css/dark-theme/timerStyleDark.css';

            /*Change icon*/
            icon.innerHTML = 'dark_mode';
        } else if (userPrefersLight) {
            /*Change Stylesheets*/
            generalStyle.href = './css/style.css';
            clockStyle.href = './css/clockStyle.css';
            stopwatchStyle.href = './css/stopwatchStyle.css';
            timerStyle.href = './css/timerStyle.css';

            /*Change icon*/
            icon.innerHTML = 'light_mode';
        }
    }
})()


/**
 * Toggle the dark-light mode
 */
function darkMode() {
    /*Save the current pathname where the user is in*/
    let path = window.location.pathname;
    let location = '';
    for (var i = path.length; i >= 0; i--) {
        location += path.charAt(i);
        if (path.charAt(i) == "/") break
    }

    location = reverseString(location);
    console.log(location)

    /*Currently user mode*/
    if (icon.innerHTML === "light_mode") {
        /*Change Stylesheets*/
        generalStyle.href = './css/dark-theme/styleDark.css';
        clockStyle.href = './css/dark-theme/clockStyleDark.css';
        stopwatchStyle.href = './css/dark-theme/stopwatchStyleDark.css';
        timerStyle.href = './css/dark-theme/timerStyleDark.css';

        /*Change icon*/
        icon.innerHTML = 'dark_mode';
        /*Update preference in localStorage*/
        localStorage.setItem("theme", "dark");

        console.log(location);
        /*Change color in play-pause button*/
        if (location == "/stopwatch.html" || location == "/timer.html")
            (stoptime) ? playCircle.style.background = "#2e3830" : playCircle.style.background = "#382e2e";

    } else {
        /*Change Stylesheets*/
        generalStyle.href = './css/style.css';
        clockStyle.href = './css/clockStyle.css';
        stopwatchStyle.href = './css/stopwatchStyle.css';
        timerStyle.href = './css/timerStyle.css';

        /*Change icon*/
        icon.innerHTML = 'light_mode';
        /*Update preference in localStorage*/
        localStorage.setItem("theme", "light");

        /*Change color in play-pause button*/
        if (location == "/stopwatch.html" || location == "/timer.html")
            (stoptime) ? playCircle.style.background = "#e6f8de" : playCircle.style.background = "#fce8e8";
    }
}

/**
 * Reversing a string with Conditional (Ternary) Operator
 * @param  {String} str String to reversing
 * @return {String}     Cuerda invertida
 */
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}