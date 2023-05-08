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
### Obstacle class
The Obstacle class is used to create obstacles that the player must jump over. Each obstacle has a width, height, image, x and y position, and a speed.
updateObstacles() function

### updateObstacles function
The updateObstacles() function updates the position of each obstacle, checks for collisions with the dinosaur, and creates new obstacles at random intervals.
dino object

### dino object
The dino object represents the player-controlled dinosaur. It has properties for x and y position, width and height, speed, ground level, and gravity.
Jumping mechanic

### dinoJump function
The dinoJump() function handles the jumping mechanic of the dinosaur. It listens for the space bar to be pressed, and applies a jump velocity to the dinosaur.
background object

### background object
The background object represents the scrolling background image. It has properties for the image, x and y position, and speed.
Audio

### sound effects
The game includes sound effects for jumping and game over, as well as background music.

# States y States transitions

# Task

# Links


