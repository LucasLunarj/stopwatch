let on = true;
let seconds = 0;
let minutes = 0;
let hours = 0;
let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");
let stopButton = document.querySelector("#reset");
let count;
pauseButton.style.display = "none";
stopButton.style.display = "none";
function start() {
  count = setInterval(timer, 1000);
  startButton.style.display = "none";
  pauseButton.style.display = "inline";
  stopButton.style.display = "inline";
}
function timer() {
  seconds++;
  console.log(seconds);
  document.querySelector(".seconds").innerHTML = `${String(seconds).padStart(
    2,
    "0"
  )}`;
  if (seconds > 59) {
    seconds = -1;
    minutes++;
    document.querySelector(".minutes").innerHTML = `${String(minutes).padStart(
      2,
      "0"
    )}`;
  } else if (minutes > 59) {
    minutes = -1;
    hours++;
    document.querySelector(".hours").innerHTML = `${hours}`;
  }
}
function pause() {
  clearInterval(count);
  startButton.style.display = "inline";
  pauseButton.style.display = "none";
  stopButton.style.display = "none";
}
function reset() {
  clearInterval(count);
  seconds = -1;
  minutes = -1;
  hours = -1;
  document.querySelector(".seconds").innerHTML = `00`;
  document.querySelector(".minutes").innerHTML = `00`;
  document.querySelector(".hours").innerHTML = `00`;
  document.querySelector("#start").style.display = "inline";
  pauseButton.style.display = "none";
  stopButton.style.display = "none";
}
