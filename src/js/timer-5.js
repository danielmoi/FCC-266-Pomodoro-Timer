function myTimer(initialSeconds, display) {
  
  var currentSeconds = initialSeconds,
      minutes,
      seconds;
  
  setInterval(function () {
    
    minutes = parseInt(currentSeconds / 60, 10);
    seconds = parseInt(currentSeconds % 60, 10);
    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    display.textContent = minutes + ':' + seconds;
    console.log(seconds);
    
    currentSeconds -= 1;
    
  }, 1000);
}

window.onload = function() {
  var minutes = 5,
      seconds = minutes * 60,
      display = document.querySelector('.timerDisplay');
  myTimer(seconds, display);
};
  
  