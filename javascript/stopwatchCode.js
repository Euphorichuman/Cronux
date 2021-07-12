(() => {
    const init = () => {
        updatePlayButton();
    };

    const updatePlayButton = () => {
        playButton();
    };

    const playButton = () => {
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
    return init();
})()