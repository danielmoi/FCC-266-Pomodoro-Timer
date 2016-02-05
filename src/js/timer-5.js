function myTimer(durationSeconds, display) {
  setInterval(function () {
    
    
    display.textContent = durationSeconds;
    durationSeconds += 1;
    
    
  }, 1000);
}

window.onload = function() {
  var minutes = 5,
      seconds = minutes * 60,
      display = document.querySelector('.timerDisplay');
  myTimer(seconds, display);
};
  
  