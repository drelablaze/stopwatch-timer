const hoursEl = document.getElementById("hours-js");
const minutesEl = document.getElementById("minutes-js");
const secondsEl = document.getElementById("seconds-js");
const timeDisplay = document.getElementById("timer-container-js");
const startBTN = document.getElementById("start-js");
const pauseBTN = document.getElementById("pause-js");
const stopBTN = document.getElementById("stop-js");
const displayEl = document.getElementById("display-js");

let [seconds, minutes, hours] = [0, 0, 0];
let hour = "";
let second = "";
let minute = "";
let timerRunning = false;
let timer = null;

function startTimer() {
  if (timer !== null) {
    clearInterval(timer);
  }
  function roundTimer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes === 0;
      hours++;
    }

    hour = hours < 10 ? "0" + hours : hours;
    second = seconds < 10 ? "0" + seconds : seconds;
    minute = minutes < 10 ? "0" + minutes : minutes;

    timeDisplay.innerHTML = hour + ":" + minute + ":" + second;
    timeDisplay.classList.add("timer-add");

    let displayValue =
      timerRunning === !true ? "Timer started" : "Timer paused";
    displayEl.textContent = `${displayValue}`;
  }
  timer = setInterval(roundTimer, 1000);
}

startBTN.addEventListener("click", startTimer);

function pauseTimer() {
  clearInterval(timer);
  let displayValue = timerRunning === true ? "Timer started" : "Timer paused";
  displayEl.textContent = `${displayValue}`;
}

pauseBTN.addEventListener("click", pauseTimer);

function stopTimer() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  timeDisplay.innerHTML = "00" + ":" + "00" + ":" + "00";
  timeDisplay.classList.add("timer-container");
  displayEl.textContent = `Timer stopped`;
}

stopBTN.addEventListener("click", stopTimer);
