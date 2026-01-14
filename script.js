let countLabel = document.getElementById("countLabel");

let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.innerText = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.innerText = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.innerText = count;
};
