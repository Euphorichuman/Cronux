// Immediately-Invoked Function Expression (IIFE) to update clock with current time
(() => {
    const init = () => {
        updateClock();
        setInterval(() => {
            updateClock();
        }, 1000);
    };

    const updateClock = () => {
        resetClock();
        getCurrentTime();
        displayCurrentTime();
    };

    const getCurrentTime = () => {
        let fullTime = new Date();
        let hours = fullTime.getHours();
        let minutes = fullTime.getMinutes();
        let seconds = fullTime.getSeconds();

        window.clock = {};
        window.clock.time = {
            fullTime: fullTime,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };

    const displayCurrentTime = () => {
        let hours = window.clock.time.hours
        let minutes = window.clock.time.minutes;
        let seconds = window.clock.time.seconds;

        // Formats hours
        hours = (hours > 12) ? (hours - 12) : hours;
        hours = (hours === 0) ? 12 : hours;
        hours = (hours <= 9) ? ("0" + hours) : hours;

        // Formats minutes
        minutes = (minutes <= 9) ? ("0" + minutes) : minutes;

        // Formats seconds
        seconds = (seconds <= 9) ? ("0" + seconds) : seconds;

        // Targets the html
        /*const hoursHtml = document.getElementsByClassName('hours')[0];
        const minutesHtml = document.getElementsByClassName('minutes')[0];
        const secondsHtml = document.getElementsByClassName('seconds')[0];*/

        const hoursHtml = document.getElementById('hr');
        const minutesHtml = document.getElementById('min');
        const secondsHtml =document.getElementById('sec');

        // Update the html values
        hoursHtml.innerHTML = hours;
        minutesHtml.innerHTML = minutes;
        secondsHtml.innerHTML = seconds;
    }

    const resetClock = () => {
        const lights = document.querySelectorAll(".light-on");

        if (lights) {
            lights.forEach(item => {
                item.classList.remove("light-on")
            });
        }
    };

    return init();
})()