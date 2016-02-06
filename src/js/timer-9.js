var start = new Date().getTime(), // A1, let's say this is 1000
  counter = 0, // A2; 100 secs
  display = document.getElementById('timer1');

function updateTimer() {
  counter += 100; 
  // B1; 100
  // C1; 200

  display.textContent = counter; 
  // B2; Display 100
  // C2; Display 200
  
  var timestamp = new Date().getTime(); 
  // B3; Actual Time; Expect 1000+100 == 1100; Actual 1090
  // C3; Actual Time; Expect 1000+200 == 1200; Actual 1210

  var actualTimeout = timestamp - start;
  // B4; Actual Timeout; Expect 100; 1090-1000 == 90
  // C4; Actual Timeout; Expect 200; 1210-1000 = 210
  
  var adjustment = actualTimeout - counter; 
  // B5; Actual Diff (between Expected and Actual Timeout); 
  // 90 - 100 == -10 
  // C5; Actual Diff
  // 210 - 200 == 10
  
  window.setTimeout(updateTimer, (100 - adjustment)); 
  // B6; run instance again, after adjusted Timeout
  // 100 -(-10) == 110
  // C6; run instance again, after adjusted Timeout
  // 100 -(10) == 90
}

window.setTimeout(updateTimer, 100); // A3; run instance after timeout