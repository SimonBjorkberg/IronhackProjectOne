class Obstacle {
  constructor(width, height, image, x, y, speed) {
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  update() {
    this.x += -this.speed;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  checkCollision(dino) {
    if (
      this.x < dino.x + dino.width &&
      this.x + this.width > dino.x &&
      this.y < dino.y + dino.height &&
      this.y + this.height > dino.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}

const smallCac = "/images/cactus-small.png";
const largeCac = "/images/cactus-large.png";
const bigCac = "/images/cactus-big.png";
const flyingDino = "/images/ezgif.com-gif-maker.gif";

//initate the background image
const bgImage = new Image();
bgImage.src = "./images/bg.png";

// Getting the instructions element
const instrButton = document.getElementById("instructions");
const instrContainer = document.getElementById("instruction-container");

// Getting the canvas element from html
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Getting the start/RAAAAWR button and the main men screen, as well as the game canvas
const startButton = document.getElementById("start-game");
const mainMenu = document.getElementById("main-menu");

//adding audio
const jumpSound = new Audio("/audio/jump-dino.mp3");
const gameStop = new Audio("/audio/game-stop.mp3");
const bgMusic = new Audio("/audio/bgMusic.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.09;

// Game over button/screen
const gameOverButton = document.getElementById("game-over-button");
const gameOverScreen = document.getElementById("game-over-screen");
gameOverButton.addEventListener("click", () => {
  location.reload();
});

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

//using animationID to capture the requestAniamtionframe.
let animationID;

const obstacles = [];
function updateObstacles() {
  const allObstacles = [];
  for (i = 0; i < obstacles.length; i++) {
    obstacles[i].x += -4;
    obstacles[i].update();
    if (obstacles[i].checkCollision(dino)) {
      //cancel the reqquestAnimationFrame on updateGame function using cancelAnimationFrame method,
      cancelAnimationFrame(animationID);
      //stop music
      bgMusic.pause();
      
      gameOverScreen.style.display = "flex";
      canvas.style.display = "none";
    }
  }
  if (frameCount % 120 === 0) {
    let smallCactus = new Obstacle(25, 42, smallCac, canvas.width, 260, 0);
    let largeCactus = new Obstacle(65, 52, largeCac, canvas.width, 250, 0);
    let bigCactus = new Obstacle(35, 52, bigCac, canvas.width, 250, 0);
    let flyDino = new Obstacle(100, 100, flyingDino, canvas.width, 140, 0);
    allObstacles.push(bigCactus, largeCactus, smallCactus, flyDino);
    let randomObstacle = Math.floor(Math.random() * allObstacles.length);
    obstacles.push(allObstacles[randomObstacle]);
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
let frameInterval = 16;

// creates the background object
let background = {
  img: bgImage,
  x: 0,
  y: 100,
  speedX: -4,
  move: function () {
    this.x += this.speedX;
    if (this.x <= -this.img.width) {
      this.x = 0;
    }
  },
  draw: function () {
    context.drawImage(this.img, this.x, this.y);
    context.drawImage(this.img, this.x + this.img.width, this.y);
  },
};

// Dino jump mechanic.
function dinoJump(e) {
  if (e.code == "Space" && dino.y === dino.ground) {
    if (dino.y <= dino.ground) {
      jumpSound.play();
    }
    dino.speedY = -7.5;
  }
}

//creates a point system and show it in canvas. CURRENTLY SENDS U BACK TO MAIN MENU WHEN YOU HIT 100 POINTS.
function calculatePoint() {
  let points = 0;
  points = Math.floor(frameCount / 8);
  context.font = "18px sans-serif";
  context.fillStyle = "black";
  context.fillText(`Score: ${points}`, 480, 60);
  if (points >= 100) {
    location.reload();
  } else {
    return points;
  }
}

// Draws the dino and upates it's image to animate running
function drawDino() {
  dino.speedY += dino.gravity;
  dino.y = Math.min(dino.y + dino.speedY, dino.ground);
  if (frameCount % frameInterval === 0) {
    if (currentDinoImage === dinoRight) {
      currentDinoImage = dinoLeft;
    } else {
      currentDinoImage = dinoRight;
    }
  }
  context.drawImage(currentDinoImage, dino.x, dino.y, dino.width, dino.height);
}

// Checks for collisions between the dino and ALL of the objects.
function checkCollision(dino) {
  const obstacleLeft = this.x;
  const obstacleRight = this.x + this.width;
  const obstacleTop = this.y;
  const obstacleBottom = this.y + this.height;

  const dinoLeft = dino.x;
  const dinoRight = dino.x + dino.width;
  const dinoTop = dino.y;
  const dinoBottom = dino.y + dino.height;

  if (
    obstacleLeft < dinoRight &&
    obstacleRight > dinoLeft &&
    obstacleTop < dinoBottom &&
    obstacleBottom > dinoTop
  ) {
    return true;
  } else {
    return false;
  }
}

function updateGame() {
  background.move();
  context.clearRect(0, 0, canvas.width, canvas.height);
  frameCount++;
  background.draw();
  drawDino();
  calculatePoint();
  bgMusic.play();
  animationID = requestAnimationFrame(updateGame);
  // event listener that waits for the space button to get pressed, causing the dino to jump
  document.addEventListener("keydown", dinoJump);
}

startButton.addEventListener("click", () => {
  updateGame();
  updateObstacles();
});