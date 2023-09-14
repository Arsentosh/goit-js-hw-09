const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
const bodyEl = document.querySelector('body');
let timerID;

stopBtn.disabled = true;

function onStartClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerID = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 500);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStopClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerID);
}
