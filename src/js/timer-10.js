var start = new Date().getTime(), // 2000
  counter = 0,
  ms_left = 100000,
  display = document.getElementById('timer1');

function updateTimer() {
  counter += 100; // 900
  ms_left -= 100;

  display.textContent = ms_left; 
  
  var timestamp = new Date().getTime(); // 2110

  var actualTimeout = timestamp - start; // 110
  
  var adjustment = actualTimeout - counter; 
  
  window.setTimeout(updateTimer, (100 - adjustment)); 
}

window.setTimeout(updateTimer, 100); 

var pause = document.querySelector('.pause');
pause.addEventListener('click', function() {
  console.log(ms_left, counter);
  window.clearTimeout(updateTimer);
});