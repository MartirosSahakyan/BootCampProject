const timerContainer = document.querySelector(".timer");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timerStart = document.querySelector(".start-timer");

let inputStartValue;

timerStart.addEventListener("change", (evt) => {
  timer.start = evt.target.value;
  inputStartValue = evt.target.value;
});

const timer = {
  id: setInterval(startTimer, 1000),
  isPaused: false,
};

function startTimer() {
  if (timer.start >= 0) {
    timerContainer.textContent = `${timer.start}s`;
    timer.start--;
  }else{
      timer.isPaused = true      
  }
}

pauseBtn.addEventListener("click", () => {
  if (timer.isPaused) {
    timer.id = setInterval(startTimer, 1000);
    timer.isPaused = false;
    pauseBtn.textContent = "Pause";
  } else {
    clearInterval(timer.id);
    timer.isPaused = true;
    pauseBtn.textContent = "PLAY";
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer.id);
  resetBtn.disabled = false;
  timer.isPaused = true;
  pauseBtn.textContent = "PLAY";
});

resetBtn.addEventListener("click", () => {
  timer.start = inputStartValue;
  timer.id = setInterval(startTimer, 1000);
  resetBtn.disabled = true;
  timer.isPaused = false;
  pauseBtn.textContent = "Pause";
});
