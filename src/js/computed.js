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

  self.p_input = ko.observable(0.2);

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





}


var timer1 = new MyTimer(0.3, 'timer1');






ko.applyBindings(timer1);

$('#p-add').on('click', timer1.p_add);

$('#p-minus').on('click', timer1.p_minus);