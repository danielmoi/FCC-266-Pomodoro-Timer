function MyTimer(mins, container) {
  var self = this,
    referenceTime,
    initial_ms,
    remaining_ms,
    remaining_percent = 1,
    display = document.getElementById(container),
    circle = $('#circle1'),
    maxOffset = 500,
    display_min,
    display_sec,
    intervalID = false,
    running = 0;

  self.p_input = ko.observable(20);
  self.b_input = ko.observable(5);
  initial_ms = self.p_input() * 1000 * 60;
  console.log(initial_ms);

  self.p_add = function () {
    if (self.p_input() < 60) {
      self.p_input(self.p_input() + 1);
    }
  };

  self.p_minus = function () {
    if (self.p_input() > 1) {
      self.p_input(self.p_input() - 1);
    }
  };

  self.b_add = function () {
    if (self.b_input() < 60) {
      self.b_input(self.b_input() + 1);
    }
  };

  self.b_minus = function () {
    if (self.b_input() > 1) {
      self.b_input(self.b_input() - 1);
    }
  };  
  
  
  
  self.start = function () {

    if (running === 0) {
      referenceTime = Date.now();
      running = 1;
      initial_ms = self.p_input() * 1000 * 60;
      self.display_clock(initial_ms);


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



      }, 1000);
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
    console.log(percent, maxOffset * percent);
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
    // switch timers and colors
    console.log('finished!');
  };



}


var timer1 = new MyTimer(0.3, 'timer1');
$('.stop').on('click', timer1.stop);
$('.start').on('click', timer1.start);
$('.reset').on('click', timer1.reset);

$('#p-add').on('click', timer1.p_add);
$('#p-minus').on('click', timer1.p_minus);

$('#b-add').on('click', timer1.b_add);
$('#b-minus').on('click', timer1.b_minus);

$(window).load(function () {
  $("body").removeClass("preload");
});

var ViewModel = function () {
  var self = this;
};

ko.applyBindings(timer1);