// Variables with html elements
const hours = document.getElementById('hr');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
const playCircle = document.getElementById("play-circle");
const playBtn = document.getElementById("play");
const progressBar = document.getElementsByClassName("circularProgressBar");

// Variables to count time
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

// Function to start-pause the timer and circular progress bar animation
function startStopwatch() {
    if (stoptime == true) {
        stoptime = false;
        stopwatchCycle();

        playCircle.style.background = "#382e2e";
        // playCircle.style.border = 'var(--light-gray) solid 5px';
        playCircle.style.boxShadow = '-5px -5px 15px var(--light-color), 5px 5px 15px var(--shadow-color), inset -3px -3px 10px var(--light-color), inset 3px 3px 10px var(--shadow-color)';
        playBtn.innerHTML = '<img src="./source/stop.svg" alt="Play button">';

        for (var i = 0; i < progressBar.length; i++) {
            progressBar[i].style.animation = 'animate 1s linear infinite';
        }

    } else {
        stoptime = true;

        playCircle.style.background = "#2e3830";
        // playCircle.style.border = 'transparent solid 5px';
        playCircle.style.boxShadow = '';
        playBtn.innerHTML = '<img src="./source/play.svg" alt="Play button">';

        for (var i = 0; i < progressBar.length; i++) {
            progressBar[i].style.animation = '';
        }
    }
}

// Function to count time and update in html
function stopwatchCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        // Count time
        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        // Format time
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        // Update the html values
        hours.innerHTML = hr;
        minutes.innerHTML = min;
        seconds.innerHTML = sec;

        setTimeout("stopwatchCycle()", 1000);
    }
}

// Function to reset the count time and circular progress bar animation
function resetStopwatch() {
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;

    playCircle.style.background = "#2e3830";
    //playCircle.style.border = 'transparent solid 5px';
    playCircle.style.boxShadow = '';
    playBtn.innerHTML = '<img src="./source/play.svg" alt="Play button">';

    for (var i = 0; i < progressBar.length; i++) {
        progressBar[i].style.animation = '';
    }
}