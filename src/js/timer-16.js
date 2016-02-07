function MyTimer(mins, container) {
  var referenceTime,
    initial_ms = mins * 1000 * 60,
    remaining_ms,
    display = document.getElementById(container),
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
        remaining_ms = initial_ms - actualInterval;

        self.display(remaining_ms);
        
        if (remaining_ms <= 0) {
          self.display(0);
          self.stop();
          self.finished();
        }
        


      }, 250);
    }

  };

  self.display = function (time) {
    display_min = Math.floor(time / 60000);
    display_sec = Math.floor(time / 1000) % 60;
    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;
    display.innerHTML = display_min + ":" + display_sec;
  };

  self.display(initial_ms);



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
    self.display(initial_ms);
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