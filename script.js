let display = 
  document.querySelector(".display");

let seconds = 0;
let minute = 0;
let hour = 0;

let timer = null;

function start() {
  timer = setInterval(function() {
  seconds++;
  display.innerHTML = seconds;
  }, 1000);
}

function stop(){
  clearInterval(timer);
}

function reset(){
  clearInterval(timer);
  seconds = 0;
  display.innerHTML = seconds;
}

  
