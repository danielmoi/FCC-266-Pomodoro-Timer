// http://stackoverflow.com/questions/16134997/how-to-pause-and-resume-a-javascript-timer

function MyTimer(minutes, container, oncomplete) {
  var startTime,
    startUpdate,
    initial_ms = minutes * 60 * 1000,
    display_min,
    display_sec,
    remaining_ms,
    remaining_percent,
    display = document.getElementById(container),
    circle = $('.circle1'),
    initialOffset,
    maxOffset = 500,
    self = this;

  startUpdate = function () {
    setInterval(self.update, 250);
  };

  self.start = function () {
    clearInterval(startUpdate);
    startTime = new Date().getTime();
    startUpdate();

  };

  self.pause = function () {
    initial_ms = self.update();
    console.log(initial_ms);
    clearInterval(startUpdate);

  };

  self.resume = function () {
    startTime = new Date().getTime();
    startUpdate();
  };

  self.reset = function () {
    initial_ms = minutes * 60 * 1000;
    display_min = Math.floor(initial_ms / 60000);
    display_sec = Math.floor(initial_ms / 1000) % 60;

    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;

    display.innerHTML = display_min + ":" + display_sec;
    clearInterval(startUpdate);
  };

  self.finish = function () {
    remaining_ms = 0;
    display_min = Math.floor(initial_ms / 60000);
    display_sec = Math.floor(initial_ms / 1000) % 60;

    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;

    display.innerHTML = display_min + ":" + display_sec;
    clearInterval(startUpdate);
  };

  self.update = function () {
    var newTime = new Date().getTime();

    remaining_ms = Math.max(0, initial_ms - (newTime - startTime));

    remaining_percent = remaining_ms / initial_ms;
    console.log(remaining_percent);

    circle.css('stroke-dashoffset', maxOffset * remaining_percent);

    display_min = Math.floor(remaining_ms / 60000);
    display_sec = Math.floor(remaining_ms / 1000) % 60;
    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;

    display.innerHTML = display_min + ":" + display_sec;
    if (remaining_ms === 0) {
      clearInterval(startUpdate);
      if (oncomplete) {
        oncomplete();
      }
    }
    console.log(remaining_ms);
    return remaining_ms;
  };

  self.reset();

}

var timer1 = new MyTimer(1, 'timer1', function () {
  console.log('finished');
});

var start1 = document.querySelector('.start').addEventListener('click', timer1.start);

var pause1 = document.querySelector('.pause').addEventListener('click', timer1.pause);

var resume1 = document.querySelector('.resume').addEventListener('click', timer1.resume);

var reset1 = document.querySelector('.reset').addEventListener('click', timer1.reset);