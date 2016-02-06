var start = new Date().getTime(),
  time = 0,
  elapsed = '0.0',
  display = document.getElementById('timer1');

function instance() {
  time += 100;

  elapsed = Math.floor(time / 100) / 10;
  if (Math.round(elapsed) == elapsed) {
    elapsed += '.0';
  }

  display.textContent = elapsed;

  var diff = (new Date().getTime() - start) - time;
  console.log(start);
  console.log(100 - diff);
  window.setTimeout(instance, (100 - diff)); // run instance again, after adjusted 100ms
}

window.setTimeout(instance, 100); // run instance after 100ms