function myTimer(initialSeconds, display) {

  var currentSeconds = initialSeconds,
    minutes,
    seconds,
    pause = document.querySelector('.pause'),
    resume = document.querySelector('.resume'),
    reset = document.querySelector('.reset'),
    finish = document.querySelector('.finish');

  setInterval(function () {

    minutes = parseInt(currentSeconds / 60, 10);
    seconds = parseInt(currentSeconds % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    currentSeconds -= 1;

  }, 1000);

  pause.addEventListener('click', function () {
    console.log('pause!');
  });
}


window.onload = function () {
  var minutes = 5,
    seconds = minutes * 60,
    display = document.querySelector('.timer-js');

  myTimer(seconds, display);
};