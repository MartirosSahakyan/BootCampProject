const timerContainer = document.querySelector(".timer");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timerStartInput = document.querySelector(".start-timer");

let inputStartValue; // remember input initial value for reset
function startTimer() {
  if (timer.start >= 0) {
    timerContainer.textContent = `${timer.start} s`;
    timer.start--;
  } else {
    timer.isPaused = true;
    clearInterval(timer.id);
  }
}

const timer = {
  start: 0,
  id: 0,
  isPaused: false,
};

timerStartInput.addEventListener("change", (evt) => {
  timer.start = evt.target.value;
  inputStartValue = evt.target.value;
  timer.id = setInterval(startTimer, 1000);
});

pauseBtn.addEventListener("click", () => {
  if (timer.isPaused) {
    clearInterval(timer.id);
    timer.id = setInterval(startTimer, 1000);
    timer.isPaused = false;
    pauseBtn.textContent = "PAUSE";
  } else {
    clearInterval(timer.id);
    timer.isPaused = true;
    pauseBtn.textContent = "PLAY";
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer.id);
  resetBtn.disabled = false;
  resetBtn.style.cursor = 'pointer';
  timer.isPaused = true;
  pauseBtn.textContent = "PLAY";
  timer.start = 0;
  timerContainer.textContent = "0 s";
});

resetBtn.addEventListener("click", () => {
  timer.start = inputStartValue;
  timer.id = setInterval(startTimer, 1000);
  resetBtn.disabled = true;
  resetBtn.style.cursor = 'no-drop'
  timer.isPaused = false;
  pauseBtn.textContent = "PAUSE";
});
