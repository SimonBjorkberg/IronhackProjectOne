const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const dinoLeft = new Image();
dinoLeft.src = "./images/Dino-left.png";

const dinoRight = new Image();
dinoRight.src = "./images/Dino-right.png";

let dino = {
  x: 64,
  y: 240,
  width: 40,
  height: 40,
};

const ctx = canvas.getContext("2d");

let currentDinoImage = dinoRight;
let frameCount = 0;
const frameInterval = 8;

function dinoRun() {
  ctx.clearRect(dino.x, dino.y, dino.width, dino.height);
  frameCount++;
  if (frameCount % frameInterval === 0) {
    if (currentDinoImage === dinoRight) {
        currentDinoImage = dinoLeft;
    } else {
        currentDinoImage = dinoRight;
    }
  }
  ctx.drawImage(currentDinoImage, dino.x, dino.y, dino.width, dino.height);
  requestAnimationFrame(dinoRun);
}

dinoRight.addEventListener("load", () => {
  // Ensure to draw the image on the correct context
  dinoRun();
});
