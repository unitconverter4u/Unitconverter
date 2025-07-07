const urlParams = new URLSearchParams(window.location.search);
const fromPage2 = urlParams.get("from") === "page2";

const countdownEl = document.getElementById("countdown");
const scrollPrompt = document.getElementById("scrollPrompt");
const continueSection = document.getElementById("continueSection");
const continueBtn = document.getElementById("continueBtn");
const timerContainer = document.getElementById("timerContainer");

if (fromPage2) {
  timerContainer.classList.remove("hidden");

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

  // ✅ Redirect to Page 2 with return=1
  continueBtn.addEventListener("click", () => {
    window.location.href = "https://nologytech.github.io/Techupdates/?return=1";
  });
}

// Optional: Keep converters working
document.getElementById("length").addEventListener("input", convertLength);
document.getElementById("length-units").addEventListener("change", convertLength);
function convertLength() {
  const meters = parseFloat(document.getElementById("length").value);
  const unit = document.getElementById("length-units").value;
  let result = "";
  if (!isNaN(meters)) {
    switch (unit) {
      case "kilometers": result = meters / 1000 + " km"; break;
      case "centimeters": result = meters * 100 + " cm"; break;
      case "inches": result = meters * 39.37 + " in"; break;
      case "feet": result = meters * 3.281 + " ft"; break;
      default: result = meters + " m";
    }
  }
  document.getElementById("length-result").textContent = result;
}

document.getElementById("temperature").addEventListener("input", () => {
  const celsius = parseFloat(document.getElementById("temperature").value);
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;
  if (!isNaN(celsius)) {
    document.getElementById("temp-result").textContent =
      `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
  } else {
    document.getElementById("temp-result").textContent = "";
  }
});

document.getElementById("weight").addEventListener("input", () => {
  const kg = parseFloat(document.getElementById("weight").value);
  const pounds = kg * 2.20462;
  if (!isNaN(kg)) {
    document.getElementById("weight-result").textContent = `${pounds.toFixed(2)} lbs`;
  } else {
    document.getElementById("weight-result").textContent = "";
  }
});
