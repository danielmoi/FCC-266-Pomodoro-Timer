function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

//countdown( "countdown", 1, 5 );
//countdown( "countdown2", 100, 0 );

////////

function myTimer(id_name, timer_min) {
  var display = document.getElementById(id_name);
  
  var now_plus_timer = new Date().getTime() + timer_min*60*1000;
  var ms_left;
  
  function updateTimer() {
    ms_left = now_plus_timer - new Date().getTime();
    display.textContent = ms_left;
    setTimeout(updateTimer, 500);
  }
  updateTimer();
}
    
myTimer('timer1', 1);