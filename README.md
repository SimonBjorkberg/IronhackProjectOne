# Ironhack Project One

# Description
Luke and Simon's Game is a project created for learning purposes. The game, 'Jumpy Dino', is an endless runner game where the player controls a dinosaur that needs to jump over obstacles to avoid collision, The game finishes at 500 points. Simon and Luke utilized Github, GitBASH, JS, HTML, and CSS to develop the game. This project was created as a part of the Ironhack course.

# MVP
A dinosaur character that can jump over obstacles.
Obstacles that appear randomly on the screen and need to be avoided.
Scoring system that increases by one for every obstacle the player successfully jumps over.
Game over screen when the player collides with an obstacle.
Option to restart the game after game over.

# Backlog
Refactor code using classes to improve organization and maintainability.
Implement the ability for the dino to crouch, allowing the player to slide under obstacles.
Increase the game's speed gradually after a set period of time or score threshold, making it more challenging for players.
Introduce potential pickups that players can collect to earn points or power-ups, such as invincibility or extra lives.
Modify the obstacle generation system to randomly vary the interval at which obstacles appear, making the game less predictable and more exciting.

# Data structure
## Obstacle class
The Obstacle class is used to create obstacles that the player must jump over. Each obstacle has a width, height, image, x and y position, and a speed.
updateObstacles() function

## updateObstacles function
The updateObstacles() function updates the position of each obstacle, checks for collisions with the dinosaur, and creates new obstacles at random intervals.
dino object

## dino object
The dino object represents the player-controlled dinosaur. It has properties for x and y position, width and height, speed, ground level, and gravity.
Jumping mechanic

## dinoJump function
The dinoJump() function handles the jumping mechanic of the dinosaur. It listens for the space bar to be pressed, and applies a jump velocity to the dinosaur.
background object

## background object
The background object represents the scrolling background image. It has properties for the image, x and y position, and speed.
Audio

## sound effects
The game includes sound effects for jumping and game over, as well as background music.

# States y States transitions
    Initial state: This is the state when the code is first loaded in the browser. All the variables are declared, but none of the functions are called.

    Main menu state: This is the state when the user first sees the main menu screen with the "Start Game" button. The canvas and game over screen are hidden.

    Gameplay state: This is the state when the user clicks the "Start Game" button and the gameplay begins. The dino, obstacles, and background start moving, and the user can control the dino to avoid the obstacles.

    Game over state: This is the state when the dino collides with an obstacle and the game ends. The gameplay stops, and the game over screen is displayed with a "Try Again" button.

    Instruction menu state: This is the state when the user hovers over the "Instructions" button and the instruction menu drops down.

    Instruction menu closed state: This is the state when the user moves the mouse out of the instruction menu and the instruction menu disappears.

    Audio state: This is the state when the audio files are loaded and ready to play.

    Dino running state: This is the state when the dino is running and its legs are switching between images to give the illusion of movement.

    Dino jumping state: This is the state when the user presses the spacebar and the dino jumps up.

# Task

# Links


