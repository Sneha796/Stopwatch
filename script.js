let display = 
  document.querySelector(".display");

let seconds = 0;
let minute = 0;
let hour = 0;

let timer = null;

function start() {
  timer = setInterval(function() {
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minute++;
    }

    if (minute == 60) {
      minute = 0;
      hour++;
    }

    display.innerHTML =
      String(hour).padStart(2, "0") + "." +
      String(minute).padStart(2, "0") + "." +
      String(seconds).padStart(2, "0");

  }, 1000);
}

function stop(){
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  minute = 0;
  hour = 0;

  display.innerHTML = "00.00.00";
}

  
