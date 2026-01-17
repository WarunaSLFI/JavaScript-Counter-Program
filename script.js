const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const limitMessage = document.getElementById("limitMessage");

let count = 0;

// Keep the UI in sync with the current count and disabled states.
const updateCountUI = () => {
  const atMinimum = count === 0;
  countLabel.textContent = count;
  decreaseBtn.disabled = atMinimum;
  limitMessage.textContent = atMinimum ? "Minimum is 0" : "";
};

// Pop the number and tint it based on how it changed.
const animateCountChange = (type) => {
  const animationClass =
    type === "increase"
      ? "pop-increase"
      : type === "decrease"
      ? "pop-decrease"
      : "pop-neutral";

  // Remove any existing animation class so we can restart it.
  countLabel.classList.remove("pop-increase", "pop-decrease", "pop-neutral");
  void countLabel.offsetWidth; // Force reflow to allow re-adding the class.
  countLabel.classList.add(animationClass);
};

// Adjust count based on button press while guarding against negatives.
const changeCount = (delta) => {
  const nextCount = count + delta;

  if (nextCount < 0) {
    animateCountChange("decrease");
    limitMessage.textContent = "Minimum is 0";
    return;
  }

  count = nextCount;
  const type = delta > 0 ? "increase" : delta < 0 ? "decrease" : "reset";
  updateCountUI();
  animateCountChange(type);
};

increaseBtn.addEventListener("click", () => changeCount(1));
decreaseBtn.addEventListener("click", () => changeCount(-1));
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCountUI();
  animateCountChange("reset");
});

// Initialize UI on first load.
updateCountUI();
