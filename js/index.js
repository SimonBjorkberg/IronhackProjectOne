class Obstacle {
  constructor(width, height, image, x, y, speed) {
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  update() {
    this.x += -this.speed
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

const smallCac = '/images/cactus-small.png'
const largeCac = '/images/cactus-large.png'
const bigCac = '/images/cactus-big.png'

// Getting the instructions element
const instrButton = document.getElementById("instructions");
const instrContainer = document.getElementById("instruction-container");

// Getting the canvas element from html
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Getting the start/RAAAAWR button and the main men screen, as well as the game canvas
const startButton = document.getElementById("start-game");
const mainMenu = document.getElementById("border");

// Mouseover/mouseout event listeners to make a kind of 'drop down' menu.
instrButton.addEventListener("mouseover", () => {
  instrContainer.style.display = "block";
});
instrButton.addEventListener("mouseout", () => {
  instrContainer.style.display = "none";
});

// Mouseover/mouseout event listeners to make a kind of 'drop down' menu.
instrButton.addEventListener("mouseover", () => {
  instrContainer.style.display = "block";
});
instrButton.addEventListener("mouseout", () => {
  instrContainer.style.display = "none";
});

// START THE GAME BUTTON
startButton.addEventListener("click", () => {
  mainMenu.style.display = "none";
  canvas.style.display = "flex";
});

// Updating the dino image (Creating a running animation)
const dinoLeft = new Image();
dinoLeft.src = "./images/Dino-left.png";

const dinoRight = new Image();
dinoRight.src = "./images/Dino-right.png";


const obstacles = [];
function updateObstacles() {
    for (i = 0; i < obstacles.length; i++) {
        obstacles[i].x += -1;
        obstacles[i].update();
    }
    if (frameCount % 480 === 0) {
        let x = canvas.width
        let height = 42;
        let startingPosition = 260;
        obstacles.push(new Obstacle(25, height, smallCac, x, startingPosition, 2))
    }
    requestAnimationFrame(updateObstacles);
}

// Dimensions and draw positions of the dinosaur, also defines the Y position of the ground.
let dino = {
  x: 64,
  y: 240,
  width: 64,
  height: 64,
  speedY: 0,
  ground: 240,
  gravity: 0.25,
};

// sets the first image of the dino (with the right leg down) as well as the frameInterval(how fast it's running).
let currentDinoImage = dinoRight;
let frameCount = 0;
const frameInterval = 16;

// creates a 'hitbox' for the dino as well as updating the image depending on the frameCount above.
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

// Dino jump mechanic.
function dinoJump(e) {
  if (e.code == "Space" && dino.y === dino.ground) {
    dino.speedY = -7.5;
  }
}

function updateGame() {
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
  updateObstacles()
});

// event listener that waits for the space button to get pressed, causing the dino to jump
document.addEventListener("keydown", dinoJump);
