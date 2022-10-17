document.addEventListener("DOMContentLoaded", () => {
  let leftInt = null;
  let rightInt = null;
  const leftBtn = document.getElementById("btn-left");
  const rightBtn = document.getElementById("btn-right");
  const divToMove = document.getElementById("div-to-move");

  function moveLeft() {
    const divRect = divToMove.getBoundingClientRect();
    const leftPos = divRect.left;
    if (leftPos > 0) {
      divToMove.style.left = `${leftPos - 1}px`;
    } else {
      clearInterval(leftInt);
    }
  }

  function moveRight() {
    const divRect = divToMove.getBoundingClientRect();
    const leftPos = divRect.left;
    const rightPos = divRect.right;
    if (rightPos < window.innerWidth - 1) {
      divToMove.style.left = `${leftPos + 1}px`;
    } else {
      clearInterval(rightInt);
    }
  }

  leftBtn.addEventListener("click", () => {
    leftBtn.disabled = true;
    rightBtn.disabled = false;
    clearInterval(rightInt);
    leftInt = setInterval(moveLeft, 10);
  });

  rightBtn.addEventListener("click", () => {
    rightBtn.disabled = true;
    leftBtn.disabled = false;
    clearInterval(leftInt);
    rightInt = setInterval(moveRight, 10);
  });
});
