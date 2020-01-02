let y = 100;
let x = 0;
let speedY = 10;
let speedX = 10;

setInterval(() => {
  let strangeBall = document.getElementById("strangeBall");

  if (x > 470) {
    speedX = -10;
  }

  if (x < 0) {
    speedX = 10;
  }

  if (y > 470) {
    speedY = -10;
  }

  if (y < 0) {
    speedY = 10;
  }

  x += speedX;
  y += speedY;

  let random1 = Math.floor(Math.random() * 999999) + 0;
  let random2 = Math.floor(Math.random() * 999999) + 0;
  console.log(x, y);
  strangeBall.style.background = `linear-gradient(to right,#${random1},#${random2})`;
  strangeBall.style.transform = `translate(${y}px,${x}px)`;
}, 100);
