// Variable with time setting element
const timerSettings = document.getElementById("timer-settings");

// Variables with time settings
const hoursSettings = document.getElementById("hours");
const minutesSettings = document.getElementById("minutes");
const secondsSettings = document.getElementById("seconds");

// Variable with clock display elements
const hoursClock = document.getElementById('hr');
const minutesClock = document.getElementById('min');
const secondsClock = document.getElementById('sec');

// Variable for the alarm at the end of the timer
var alarm;
var alarmSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-scanning-sci-fi-alarm-905.mp3');

function showTimerOptions() {
    timerSettings.classList.toggle("show");
}

function updateHours(clickedID) {
    var hours = parseInt(hoursSettings.innerHTML);

    if (clickedID == 'sub-hr') { hours = (hours > 0) ? (hours - 1) : hours = 99; }
    if (clickedID == 'add-hr') { hours = (hours < 99) ? (hours + 1) : hours = 0; }

    // Formats hours
    hours = (hours <= 9) ? ("0" + hours) : hours;

    // Update the html values
    hoursSettings.innerHTML = hours;
}

function updateMinutes(clickedID) {
    var minutes = parseInt(minutesSettings.innerHTML);

    if (clickedID == 'sub-min') { minutes = (minutes > 0) ? (minutes - 1) : minutes = 99; }
    if (clickedID == 'add-min') { minutes = (minutes < 99) ? (minutes + 1) : minutes = 0; }

    // Formats hours
    minutes = (minutes <= 9) ? ("0" + minutes) : minutes;

    // Update the html values
    minutesSettings.innerHTML = minutes;
}

function updateSeconds(clickedID) {
    var seconds = parseInt(secondsSettings.innerHTML);

    if (clickedID == 'sub-sec') { seconds = (seconds > 0) ? (seconds - 1) : seconds = 99; }
    if (clickedID == 'add-sec') { seconds = (seconds < 99) ? (seconds + 1) : seconds = 0; }

    // Formats hours
    seconds = (seconds <= 9) ? ("0" + seconds) : seconds;

    // Update the html values
    secondsSettings.innerHTML = seconds;
}

function updateClockSettings() {
    hoursClock.innerHTML = hoursSettings.innerHTML;
    minutesClock.innerHTML = minutesSettings.innerHTML;
    secondsClock.innerHTML = secondsSettings.innerHTML;
    showTimerOptions();
}

// Variable with animation elements for circle progress bar
const playCircle = document.getElementById("play-circle");
const playBtn = document.getElementById("play");
const progressBar = document.getElementsByClassName("circularProgressBar");

var stoptime = true;

// Function to play-pause Timer time count
function startTimer() {
    let durationTimer = (parseInt(hoursClock.innerHTML) * 3600) + (parseInt(minutesClock.innerHTML) * 60) + parseInt(secondsClock.innerHTML);

    if (stoptime == true && durationTimer > 0) {
        timerCycle(durationTimer);
        playAnimation();

    } else {
        clearInterval(alarm);
        stopAnimation();
    }
}

// Function to Timer time count
function timerCycle(time) {
    var count = time;

    alarm = setInterval(function () {
        count--;
        hoursClock.innerHTML =  ((Math.floor(count / 3600) % 60) < 10) ? ('0' + (Math.floor(count / 3600) % 60)) : (Math.floor(count / 3600) % 60);
        minutesClock.innerHTML = ((Math.floor(count / 60) % 60) < 10) ? ('0' +  Math.floor(count / 60) % 60) : ( Math.floor(count / 60) % 60);
        secondsClock.innerHTML = ((count % 60) < 10) ? ('0' + (count % 60)) : (count % 60);

        if (count === 0) {
            clearInterval(alarm);
            playAlarm();
            stopAnimation();
        }
    }, 1000);
}

function playAlarm() {
    alarmSound.play();
}   

function playAnimation() {
    stoptime = false;
    playCircle.style.background = "#f0f0f3";
    playCircle.style.border = 'var(--light-gray) solid 5px';
    playCircle.style.boxShadow = '-5px -5px 15px var(--light-color), 5px 5px 15px var(--shadow-color), inset -3px -3px 10px var(--light-color), inset 3px 3px 10px var(--shadow-color)';
    playBtn.innerHTML = '<img src="./source/stop.svg" alt="Play button">';

    for (var i = 0; i < progressBar.length; i++) {
        progressBar[i].style.animation = 'animate 1s linear infinite';
    }
}

function stopAnimation() {
    stoptime = true;
    playCircle.style.background = "rgb(230, 248, 222)";
    playCircle.style.border = 'transparent solid 5px';
    playCircle.style.boxShadow = '';
    playBtn.innerHTML = '<img src="./source/play.svg" alt="Play button">';

    for (var i = 0; i < progressBar.length; i++) {
        progressBar[i].style.animation = '';
    }
}

// Function to reset the count time and circular progress bar animation
function resetTimer() {
    hoursClock.innerHTML = '00';
    minutesClock.innerHTML = '00';
    secondsClock.innerHTML = '00';
    stoptime = true;
    clearInterval(alarm);
    stopAnimation();
}