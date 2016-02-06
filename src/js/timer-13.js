// http://stackoverflow.com/questions/16134997/how-to-pause-and-resume-a-javascript-timer

function MyTimer(minutes, container, oncomplete) {
  var startTime,
    startUpdate,
    initial_ms = minutes * 60 * 1000,
    // A1; secs > ms, for 10 mins; 10 * 60 * 1000 = 600,000
    display_min,
    display_sec,
    remaining_ms,
    display = document.getElementById(container),
    self = this;

  self.start = function () {
    clearInterval(startUpdate);

    startTime = new Date().getTime();
    // A2; new timestamp, say 20,000,000

    startUpdate = setInterval(self.update, 250);
    // A3; run `update` every 250 ms
    // adjust self number to affect granularity
    // lower numbers are more accurate, but more CPU-expensive
  };

  self.reset = function () {
    initial_ms = minutes * 60 * 1000;
    clearInterval(startUpdate);
    self.start();
  };

  self.pause = function () {
    initial_ms = self.update();
    // assigns `remaining_ms` to `initial_ms`
    clearInterval(startUpdate);
  };

  self.finish = function () {
    remaining_ms = 0;
    clearInterval(startUpdate);
  };
  
  self.update = function () {
    var newTime = new Date().getTime();
    // A4; new timestamp, expected 250ms after startTime; Expected == 20,000,250; Actual == 20,000,260

    remaining_ms = Math.max(0, initial_ms - (newTime - startTime));
    // A5; Expected == 600,000 - (20,000,250 - 20,000,000) == 599,750
    // Actual == 600,000 - (20,000,260 - 20,000,000) == 599,740
    // returns `startTime` minus ActualInterval
    // ** self is the key step
    // it displays the Actual remaining_ms, instead of the Calculated remaining_ms
    // self is a different tact to making the interval run accurately


    display_min = Math.floor(remaining_ms / 60000);
    // 0
    display_sec = Math.floor(remaining_ms / 1000) % 60;
    // 59

    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;

    display.innerHTML = display_min + ":" + display_sec;
    if (remaining_ms === 0) {
      clearInterval(startUpdate);
      self.start = function () {};
      if (oncomplete) {
        oncomplete();
      }
    }
    return remaining_ms;
  };

  self.start(); // A1; run `update` right away

}

var timer1 = new MyTimer(10, 'timer1', function () {
  console.log('finished');
});

var pause1 = document.querySelector('.pause').addEventListener('click', timer1.pause);

var resume1 = document.querySelector('.resume').addEventListener('click', timer1.start);

var reset1 = document.querySelector('.reset').addEventListener('click', timer1.reset);