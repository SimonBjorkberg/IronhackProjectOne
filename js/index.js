// Getting the instructions element
const instructions = document.getElementById('instructions')
const instructionContainer = document.getElementById('instruction-container')

// mouseover/mouseout event listeners to make a kind of 'drop down' menu.
instructions.addEventListener('mouseover', () => {
    instructionContainer.style.display = 'block'
})
instructions.addEventListener('mouseout', () => {
    instructionContainer.style.display = 'none'
})

// getting the canvas element from html
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Updating the dino image (Creating a runnin animation)
const dinoLeft = new Image();
dinoLeft.src = "./images/Dino-left.png";

const dinoRight = new Image();
dinoRight.src = "./images/Dino-right.png";

// dimensions and draw positions of the dinosaur, also defines the Y position of the ground.
let dino = {
  x: 64,
  y: 240,
  width: 40,
  height: 40,
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
    dino.speedY = -6;
  }
}

// updates the mechanics of the game
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
});

// event listener that waits for the space button to get pressed, causing the dino to jump
document.addEventListener("keydown", dinoJump);

