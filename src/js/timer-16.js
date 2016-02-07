function MyTimer(mins, container) {
  var referenceTime,
    initial_ms = mins * 1000 * 60,
    remaining_ms,
    display,
    display_min,
    display_sec,
    intervalID = false,
    running = 0,
    self = this;

  self.start = function () {
    referenceTime = Date.now();
    console.log(running);

    if (running === 0) {
      running = 1;
      intervalID = setInterval(function () {
        var checkTime = Date.now(),
          actualInterval = checkTime - referenceTime;
        remaining_ms = initial_ms - actualInterval;


        display = document.getElementById(container);

        display_min = Math.floor(remaining_ms / 60000);
        display_sec = Math.floor(remaining_ms / 1000) % 60;
        display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
        display_min = display_min < 10 ? '0' + display_min : display_min;
        display.innerHTML = display_min + ":" + display_sec;
      }, 250);
    }
    console.log(intervalID);

  };




  self.stop = function () {
    if (running === 1) {
      running = 0;
      initial_ms = remaining_ms;
      clearInterval(intervalID);
      intervalID = false;
      console.log(intervalID);
      console.log(remaining_ms);
    }
  };




}



var timer1 = new MyTimer(1, 'timer1');
$('.stop').on('click', timer1.stop);
$('.start').on('click', timer1.start);