function MyTimer(mins, container) {
  var referenceTime,
    initial_ms = mins * 1000 * 60,
    remaining_ms,
    remaining_percent = 1,
    display = document.getElementById(container),
    circle = $('#circle1'),
    maxOffset = 500,
    display_min,
    display_sec,
    intervalID = false,
    running = 0,
    self = this;

  self.start = function () {

    if (running === 0) {
      referenceTime = Date.now();
      running = 1;

      intervalID = setInterval(function () {
        var checkTime = Date.now(),

          actualInterval = checkTime - referenceTime;
        // actualInterval gets quite large

        remaining_ms = initial_ms - actualInterval;
        self.display_clock(remaining_ms);

        remaining_percent = remaining_ms / initial_ms;
        self.display_circle(remaining_percent);

        if (remaining_ms <= 0) {
          self.display_clock(0);
          self.display_circle(0);
          self.stop();
          self.finished();
        }



      }, 250);
    }

  };

  self.display_clock = function (time) {
    display_min = Math.floor(time / 60000);
    display_sec = Math.floor(time / 1000) % 60;
    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;
    display.innerHTML = display_min + ":" + display_sec;
  };

  self.display_clock(initial_ms);

  self.display_circle = function (percent) {
    circle.css('stroke-dashoffset', maxOffset * percent);
  };
  self.display_circle(1);



  self.stop = function () {
    if (running === 1) {
      running = 0;
      initial_ms = remaining_ms;
      clearInterval(intervalID);
    }
  };

  self.reset = function () {
    running = 0;
    clearInterval(intervalID);
    initial_ms = mins * 1000 * 60;
    self.display_clock(initial_ms);
    self.display_circle(1);
    console.log(intervalID);
  };

  self.finished = function () {
    console.log('finished!');
  }



}



var timer1 = new MyTimer(0.2, 'timer1');
$('.stop').on('click', timer1.stop);
$('.start').on('click', timer1.start);
$('.reset').on('click', timer1.reset);