// http://stackoverflow.com/questions/16134997/how-to-pause-and-resume-a-javascript-timer

function startTimer(seconds, container, oncomplete) {
  var startTime, 
      timer, 
      obj, 
      ms = seconds * 1000,
      // secs > ms, say 60,000
      display = document.getElementById(container);
  obj = {};
  obj.resume = function () {
    startTime = new Date().getTime();
    // A2; new timestamp, say 20,000,000

    timer = setInterval(obj.step, 250);
    // A3; run `step` every 250 ms
    // adjust this number to affect granularity
    // lower numbers are more accurate, but more CPU-expensive
  };

  obj.pause = function () {
    ms = obj.step();
    // returns `now`
    clearInterval(timer);
  };

  obj.step = function () {
    var now = Math.max(0, ms - (new Date().getTime() - startTime)),
        // A4; new timestamp, after interval; Expect = 19,999,750; Actual = 19,999,850
        // A4; 60,000 - (19,999,850 - 20,000,000) == 60,000 - 150 == 59,850
        // returns `startTime` minus ActualInterval


      m = Math.floor(now / 60000),
      // 0
      s = Math.floor(now / 1000) % 60;
    // 59
    
    
    
    s = (s < 10 ? "0" : "") + s;
    display.innerHTML = m + ":" + s;
    if (now == 0) {
      clearInterval(timer);
      obj.resume = function () {};
      if (oncomplete) oncomplete();
    }
    return now;
  };

  obj.resume(); // A1; run `resume` right away

  return obj;
}

startTimer(10000, 'timer1', function () {
  console.log('finished');
});