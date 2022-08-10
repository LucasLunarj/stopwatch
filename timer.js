let on = true;
let value = 0;
let minutes = 0;
let secondsValue = 0;
let seconds = document.querySelector("#seconds-value");
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
  // let minutes = document.querySelector("#minutes-value").value;
  // let hours = document.querySelector("#hours-value").value;
  // seconds--;

  secondsValue = Number(seconds.value);
  secondsValue++;
  console.log(typeof secondsValue, secondsValue);
  document.querySelector(".seconds").innerHTML = `${String(value).padStart(
    2,
    "0"
  )}`;
  // if (seconds === 0) {
  //   seconds = 60;
  //   minutes -= 1;
  //   console.log(minutes);
  //   document.querySelector(".minutes").innerHTML = `${String(minutes).padStart(
  //     2,
  //     "0"
  //   )}`;
  // } else if (minutes <= 60) {
  //   minutes -= 1;
  //   console.log(hours);
  //   hours = hours + 1;
  //   document.querySelector(".hours").innerHTML = `${hours}`;
  // }
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
