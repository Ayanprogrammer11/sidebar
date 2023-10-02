const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const searchBtn = document.querySelector(".search-box");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");
// Modal and Overlay
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const countdownTimer = document.querySelector("#timer");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.textContent = "Light Mode";
  } else {
    modeText.textContent = "Dark Mode";
  }
});

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modal.classList.remove("hidden");
overlay.classList.remove("hidden");

let seconds = 20; // Initial number of seconds

function updateTimer() {
  countdownTimer.innerHTML = seconds;
  seconds--;

  if (seconds < 0) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    clearInterval(timerInterval);
    countdownTimer.innerHTML = "0";
  }
}

// Call updateTimer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to updateTimer
updateTimer();
