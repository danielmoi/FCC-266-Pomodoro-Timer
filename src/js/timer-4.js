//  http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

// Version 1 – Vanilla JS
function startTimer(duration, display) {
    var timer = duration, minutes, seconds; // this declares 3 variables (and assigns `duration` as the value for timer)
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes; // evaluate `minutes < 10`, if it's true, then `'0' + minutes`, else, `minutes`
        seconds = seconds < 10 ? "0" + seconds : seconds;// evaluate `seconds < 10`, if it's true, then `'0' + seconds`, else, `seconds`

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) { // perform --timer, then if `--timer` is < 0, go inside the if block
            timer = duration; // this will reset the timer
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

//////////////////////////////////////////////////////

// Version 2 – with jQuery
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds); // this is the 1st line that is different

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time'); // this is the 2nd line that is different
    startTimer(fiveMinutes, display);
});

//////////////////////////////////////////////////////

// Version 3 - more accurate timer

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
      // because this function declaration is hoisted, so the variable-less `Date.now()` here is instantiated before the `Date.now()` for var start = Date.now()
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0; // this uses the bitwise OR operator
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer(); // run `timer` once
    setInterval(timer, 1000); // run `timer` every second
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
