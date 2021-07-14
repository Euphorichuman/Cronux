const timerSettings = document.getElementById("timer-settings");

const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");

const hoursClock = document.getElementById('hr');
const minutesClock = document.getElementById('min');
const secondsClock = document.getElementById('sec');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;


function showTimerOptions() {
    timerSettings.classList.toggle("show");
}

function updateHours(clickedID) {
    var hours = parseInt(hoursHtml.innerHTML);

    if(clickedID == 'sub-hr'){hours = (hours > 0) ? (hours - 1) : hours = 99;} 
    if(clickedID == 'add-hr'){hours = (hours < 99) ? (hours + 1) : hours = 0;}

    // Formats hours
    hours = (hours <= 9) ? ("0" + hours) : hours;

    // Update the html values
    hoursHtml.innerHTML = hours;
}

function updateMinutes(clickedID) {
    var minutes = parseInt(minutesHtml.innerHTML);

    if(clickedID == 'sub-min'){minutes = (minutes > 0) ? (minutes - 1) : minutes = 99;} 
    if(clickedID == 'add-min'){minutes = (minutes < 99) ? (minutes + 1) : minutes = 0;}

    // Formats hours
    minutes = (minutes <= 9) ? ("0" + minutes) : minutes;

    // Update the html values
    minutesHtml.innerHTML = minutes;
}

function updateSeconds(clickedID) {
    var seconds = parseInt(secondsHtml.innerHTML);

    if(clickedID == 'sub-sec'){seconds = (seconds > 0) ? (seconds - 1) : seconds = 99;} 
    if(clickedID == 'add-sec'){seconds = (seconds < 99) ? (seconds + 1) : seconds = 0;}

    // Formats hours
    seconds = (seconds <= 9) ? ("0" + seconds) : seconds;

    // Update the html values
    secondsHtml.innerHTML = seconds;
}

function updateClock() {
    hoursClock.innerHTML = hoursHtml.innerHTML;
    minutesClock.innerHTML = minutesHtml.innerHTML;
    secondsClock.innerHTML = secondsHtml.innerHTML;
    showTimerOptions();
}

function resetTimer(){
    hoursClock.innerHTML = '00';
    minutesClock.innerHTML = '00';
    secondsClock.innerHTML = '00';
}