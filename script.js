const countdownEl = document.getElementById("countdown");
const scrollPrompt = document.getElementById("scrollPrompt");
const continueSection = document.getElementById("continueSection");
const continueBtn = document.getElementById("continueBtn");

// 20-second timer
let timeLeft = 20;
const timer = setInterval(() => {
  timeLeft--;
  countdownEl.textContent = `Redirecting in ${timeLeft} seconds...`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownEl.textContent = "Done!";
    scrollPrompt.classList.remove("hidden");
    continueSection.classList.remove("hidden");
  }
}, 1000);

// Button click → redirect to Page 2
continueBtn.addEventListener("click", () => {
  window.location.href = "#"; // Replace # with actual Page 2 URL later
});
