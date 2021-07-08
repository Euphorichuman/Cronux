(() => {
    const init = () => {
        updateClock();
        updatePlayButton();
        setInterval(() => {
            updateClock();
        }, 1000);
    };

    const updateClock = () => {
        resetClock();
        getCurrentTime();
        displayCurrentTime();
    };

    const updatePlayButton = () => {
        playButton();
    };

    playButton = () => {
        var elems = document.getElementsByClassName("inner-circle");
        var btn = document.getElementById("play");
        var progressBar = document.getElementsByClassName("circularProgressBar");

        for (var i = 0; i < elems.length; i++) {
            elems[i].onclick = function () {
                var color = window
                    .getComputedStyle(this, null)
                    .getPropertyValue("background-color");

                if (color === "rgb(230, 248, 222)") {
                    this.style.background = "#f0f0f3";
                    this.style.border = 'var(--light-gray) solid 5px';
                    this.style.boxShadow = '-5px -5px 15px var(--light-color), 5px 5px 15px var(--shadow-color), inset -3px -3px 10px var(--light-color), inset 3px 3px 10px var(--shadow-color)';
                    btn.innerHTML = '<img src="./source/stop.svg" alt="Play button">';

                    for (var i = 0; i < progressBar.length; i++) { 
                        progressBar[i].style.animation ='animate 1s linear infinite';
                    }

                } else {
                    this.style.background = "rgb(230, 248, 222)";
                    this.style.border = 'transparent solid 5px';
                    this.style.boxShadow = '';
                    btn.innerHTML = '<img src="./source/play.svg" alt="Play button">';

                    for (var i = 0; i < progressBar.length; i++) { 
                        progressBar[i].style.animation ='';
                    }
                };
            };
        };
    };

    getCurrentTime = () => {
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

    displayCurrentTime = () => {
        let hours = window.clock.time.hours
        let minutes = window.clock.time.minutes;
        let seconds = window.clock.time.seconds;

        //formats hours
        hours = (hours > 12) ? (hours - 12) : hours;
        hours = (hours === 0) ? 12 : hours;
        hours = (hours <= 9) ? ("0" + hours) : hours;

        //formats minutes
        minutes = (minutes <= 9) ? ("0" + minutes) : minutes;

        //formats seconds
        seconds = (seconds <= 9) ? ("0" + seconds) : seconds;

        // targets the html
        const hoursHtml = document.getElementsByClassName('hours')[0];
        const minutesHtml = document.getElementsByClassName('minutes')[0];
        const secondsHtml = document.getElementsByClassName('seconds')[0];

        // changes the html values
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