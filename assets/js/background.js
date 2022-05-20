const c = document.querySelector("canvas");
const $ = c.getContext('2d');
const colors = [
  '247, 99, 63, 1',
  '153, 252, 206, 1',
  '183, 73, 230, 1'
]

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getItemFromColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

const col = function (x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1, 1);
}
const R = function (x, y, t) {
  return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
}

const G = function (x, y, t) {
  return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
}

const B = function (x, y, t) {
  return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
}

let t = 0;

const run = async function () {
  await timeout(100)
  for (x = 0; x <= 35; x++) {
    for (y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.120;
  window.requestAnimationFrame(run);
}

run();
