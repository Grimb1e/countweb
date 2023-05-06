let score = 0;

document.querySelector(".btn-increment").addEventListener("click", () => {
  score++;
  document.querySelector("#score").textContent = score;
});

document.querySelector(".btn-decrement").addEventListener("click", () => {
  if (score <= 0) {
    return;
  }
  score--;
    document.querySelector("#score").textContent = score;
});

document.querySelector(".btn-reset").addEventListener('click', () => {
  score = 0;
  document.querySelector('#score').textContent = score;
});
