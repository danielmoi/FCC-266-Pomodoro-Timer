// http://www.sitepoint.com/creating-accurate-timers-in-javascript/

////////////////////////////////// 

// v1

var time = 0,
    elapsed = '0.0';

window.setInterval(function()
{
    time += 100; // ie. 100 ms = 0.1 sec

    elapsed = Math.floor(time / 100) / 10; // 100/100 = 1 / 10 = 0.1
  // this converts to seconds
  
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; } // 1000/100 = 10 >> 10.0

    document.title = elapsed;

}, 100); // this is 100 milliseconds, ie. 0.1 sec


////////////////////////////////// 

// v2

var start = new Date().getTime(), // milliseconds, eg. 1454708857390
    elapsed = '0.0';

var display = document.querySelector('.timer-js');

window.setInterval(function()
{
    var time = new Date().getTime() - start; // diff, eg. 14576 (14 secs)
  // this should be 100 ms, but instead of setting a time value, we query the computer time, and it will return 101, 98 / whatever is accurate

    elapsed = Math.floor(time / 100) / 10;
  // this converts to seconds
  
  
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
  // add .0 if a round second // 100 > 100.0

    display.textContent = elapsed;

}, 100);

