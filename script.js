let score = 0;
let isButtonDisabled = false;

document.querySelector(".btn-increment").addEventListener("click", () => {
  if (isButtonDisabled) {
    return;
  }

  isButtonDisabled = true;
  setTimeout(() => {
    isButtonDisabled = false;
  }, 900);

  score++;
  document.querySelector("#score").textContent = score;
});

document.querySelector(".btn-decrement").addEventListener("click", () => {
  document.querySelector(".btn-decrement").addEventListener("click", () => {
    if (score <= 0 || isButtonDisabled) {
      return;
    }

    isButtonDisabled = true;
    setTimeout(() => {
      isButtonDisabled = false;
    }, 900);

    score--;
    document.querySelector("#score").textContent = score;
  });
});

document.querySelector(".btn-reset").addEventListener("click", () => {
  score = 0;
  document.querySelector("#score").textContent = score;
});
