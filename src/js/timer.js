// https://teamtreehouse.com/library/create-a-timer-in-javascript


function displayMessage() {
  var message = document.getElementById('message');
  message.innerHTML = 'The time is ' + Date();
}

//setTimeout(displayMessage, 1000);

//setInterval(displayMessage, 500);

var timer = setInterval(displayMessage, 1000);

function stopUpdating() {
  clearInterval(timer);
}

setTimeout(stopUpdating, 3000);

////////

var time = 0,
  elapsed = '0.0',
  display = document.getElementById('manualTimer');

var manualTimer = setInterval(function () {
  time += 100;

  elapsed = Math.floor(time / 100) / 10;
//  if (Math.round(elapsed) == elapsed) {
//    elapsed += '.0';
//  }

//  display.innerHTML = elapsed;

}, 100);

/////////////

var start = new Date().getTime(),
    elapsed = '0.0';

window.setInterval(function()
{
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

//    document.title = elapsed;

}, 100);

////////

var one = new Date().getTime();

var two = new Date().getTime();

var diff = two - one;
console.log(diff);
// 0


/////////////

var three = new Date().getTime();
var four;

var delay = setTimeout(function() {
  four = new Date().getTime();
}, 1000);

var diff = four - three;
console.log(diff);
  