const hoursEl = document.getElementById("hours-js");
const minutesEl = document.getElementById("minutes-js");
const secondsEl = document.getElementById("seconds-js");
const timeDisplay = document.getElementById("timer-container-js");
const startBTN = document.getElementById("start-js");
const pauseBTN = document.getElementById("pause-js");
const stopBTN = document.getElementById("stop-js");

let [seconds, minutes, hours] = [0, 0, 0];
let hour = "";
let second = "";
let minute = "";

function startTimer() {
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
    timeDisplay.classList.remove('.timer-container"');
  }
  setInterval(roundTimer, 1000);
}

startBTN.addEventListener("click", startTimer);
