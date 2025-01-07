let timer;
let elapsedTime = 0;
let startTime = 0;
const lapsContainer = document.getElementById('laps');

function formatTime(ms) {
  const milliseconds = ms % 1000;
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);
  return (
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(milliseconds).padStart(3, '0')
  );
}

function updateDisplay() {
  document.getElementById('display').textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  if (!timer) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateDisplay();
  lapsContainer.innerHTML = '';
}

function recordLap() {
  const lapTime = formatTime(elapsedTime);
  const lapElement = document.createElement('div');
  lapElement.textContent = lapTime;
  lapsContainer.appendChild(lapElement);
}
