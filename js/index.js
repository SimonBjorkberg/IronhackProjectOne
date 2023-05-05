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
  speedY: 0,
  ground: 240,
  gravity: 0.25,
};

let currentDinoImage = dinoRight;
let frameCount = 0;
const frameInterval = 8;

function dinoRun() {
  context.clearRect(dino.x, dino.y, dino.width, dino.height);
  frameCount++;
  if (frameCount % frameInterval === 0) {
    if (currentDinoImage === dinoRight) {
      currentDinoImage = dinoLeft;
    } else {
      currentDinoImage = dinoRight;
    }
  }
  context.drawImage(currentDinoImage, dino.x, dino.y, dino.width, dino.height);
  requestAnimationFrame(dinoRun);
}

function dinoJump(e) {
  if (e.code == "Space" && dino.y === dino.ground) {
    dino.speedY = -6;
  }
}


function updateGame() {
  //dino
  dino.speedY += dino.gravity;
  dino.y = Math.min(dino.y + dino.speedY, dino.ground);

  context.clearRect(0, 0, canvas.width, canvas.height);
  frameCount++;
  if (frameCount % frameInterval === 0) {
    if (currentDinoImage === dinoRight) {
      currentDinoImage = dinoLeft;
    } else {
      currentDinoImage = dinoRight;
    }
  }
  context.drawImage(currentDinoImage, dino.x, dino.y, dino.width, dino.height);

  requestAnimationFrame(updateGame);
}

dinoRight.addEventListener("load", () => {
  updateGame();
});

document.addEventListener("keydown", dinoJump);