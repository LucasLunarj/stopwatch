let on = true;
let seconds = 0;
let minutes = 0;
let hours = 0;
let count;
function start() {
  count = setInterval(timer, 1000);
  document.querySelector("#start").style.display = "none";
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
  } else if (minutes > 60) {
    document.querySelector(".hours").innerHTML = `${hours}`;
  }
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
}
