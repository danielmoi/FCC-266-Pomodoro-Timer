function MyTimer() {
  var self = this,
    referenceTime,
    initial_ms_pomo,
    initial_ms_break,

    remaining_ms_pomo,
    remaining_ms_break,

    remaining_percent = 1,
    display = document.getElementById('timer1'),
    circle = $('#circle1'),
    maxOffset = 500,
    display_min,
    display_sec,
    intervalID = false,
    session = 'pomo',
    running = 0,
      fresh = 1;

  self.pomo_input = ko.observable(1);
  self.break_input = ko.observable(1);

  self.initial_ms_pomo = ko.observable(self.pomo_input() * 1000 * 60);
  self.initial_ms_break = ko.observable(self.break_input() * 1000 * 60);
  
  self.initial_ms = ko.observable();
  self.current_ms = ko.observable();
  self.remaining_ms = ko.observable();



  console.log(self.initial_ms_pomo());

  self.p_add = function () {
    if (self.pomo_input() < 60) {
      self.pomo_input(self.pomo_input() + 1);
    }
  };

  self.p_minus = function () {
    if (self.pomo_input() > 1) {
      self.pomo_input(self.pomo_input() - 1);
    }
  };

  self.b_add = function () {
    if (self.break_input() < 60) {
      self.break_input(self.break_input() + 1);
    }
  };

  self.b_minus = function () {
    if (self.break_input() > 1) {
      self.break_input(self.break_input() - 1);
    }
  };



  self.start = function () {

    if (running === 0) {
      referenceTime = Date.now();
      running = 1;
      if (fresh === 1) {
        fresh = 0;
        if (session === 'pomo') {
          self.current_ms(self.initial_ms_pomo());
          self.initial_ms(self.initial_ms_pomo());
        }
        if (session === 'break') {
          self.current_ms(self.initial_ms_break());
          self.initial_ms(self.initial_ms_break());
        }
      }

      intervalID = setInterval(function () {
        var checkTime = Date.now(),
          actualInterval = checkTime - referenceTime;
        // actualInterval gets quite large

        self.remaining_ms(self.current_ms() - actualInterval);
        self.display_clock(self.remaining_ms());

        remaining_percent = (self.remaining_ms() / self.initial_ms());
        self.display_circle(remaining_percent);

        if (self.remaining_ms() <= 0) {
          self.display_clock(0);
          self.display_circle(0);
          self.stop();
          self.finished();
        }
      }, 1000);
    }
    console.log('start, intervalID: ' + intervalID);
  };

  self.stop = function () {
    if (running === 1) {
      running = 0;
      self.current_ms(self.remaining_ms());
      clearInterval(intervalID);
      console.log(session);
      console.log(self.remaining_ms());
      
    }
    console.log('stop, intervalID: ' + intervalID);
  };

  self.display_clock = function (time) {
    display_min = Math.floor(time / 60000);
    display_sec = Math.floor(time / 1000) % 60;
    display_sec = display_sec < 10 ? '0' + display_sec : display_sec;
    display_min = display_min < 10 ? '0' + display_min : display_min;
    display.innerHTML = display_min + ":" + display_sec;
  };

  self.display_clock(self.initial_ms_pomo());

  self.display_circle = function (percent) {
    circle.css('stroke-dashoffset', maxOffset * percent);
  };
  self.display_circle(1);





  self.reset = function () {
    running = 0;
    fresh = 1;
    clearInterval(intervalID);
    self.display_clock(self.initial_ms());
    self.display_circle(1);
    console.log('break, intervalID: ' + intervalID);

  };

  self.finished = function () {
    // switch timers and colors
    console.log('finished!');
    if (session === 'pomo') {
      session = 'break';
    }
    if (session === 'break') {
      session = 'pomo';
    }
  };



}


var timer1 = new MyTimer();
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

ko.applyBindings(timer1);