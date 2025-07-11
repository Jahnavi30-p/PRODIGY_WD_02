let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById("display");
let lapsContainer = document.getElementById("laps");
let timer = null;
let lapCount = 0;

function stopwatch() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  display.innerText = `${h}:${m}:${s}.${ms}`;
}

function start() {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(stopwatch, 10);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  display.innerText = "00:00:00.00";
  lapsContainer.innerHTML = "";
  lapCount = 0;
}

function lap() {
  lapCount++;
  const lapTime = display.innerText;
  const lapElement = document.createElement("p");
  lapElement.innerText = `Lap ${lapCount}: ${lapTime}`;
  lapsContainer.prepend(lapElement);
}