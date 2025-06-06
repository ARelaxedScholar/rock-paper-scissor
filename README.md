# Rock Paper Scissors - Console Game

## 📝 Description
A straightforward, console-based version of the classic "Rock, Paper, Scissors" game, built with vanilla JavaScript. Test your luck against the computer directly in your browser's developer console! This is my first JS project, and frankly, it wasn't the worst. 
Rust is still my baby though.

## 🚀 Live Demo / Pages Link

**(🔗 [Live Link](https://arelaxedscholar.github.io/rock-paper-scissor/))**
* *To use the live demo, click the link above to open the page, then open your browser's developer console (usually by pressing F12) to play the game.*

## 🛠️ How to Play / Setup Locally

1.  **Get the Files:** Clone this repository or download the `index.html` and `script.js`.
2.  **Open in Browser:** Open the `index.html` file directly in your web browser.
3.  **Open Developer Console:** Press `F12` (or right-click on the page and select "Inspect," then go to the "Console" tab).
4.  **Play:** Select your action, lock it in, and see if you beat the computer! First to 5 wins.

## ✨ Core Features & Logic

This project demonstrates fundamental JavaScript concepts through:

* **Basic Setup:** An HTML file linked to an external JavaScript file.
* **Computer's Choice (`getComputerChoice`):** Logic to make the computer randomly select "rock", "paper", or "scissors".
* **Player's Input (`getHumanChoice`):** Using `prompt()` to get the human player's choice.
* **Score Management:** Variables to keep track of both player and computer scores.
* **Round Logic (`playRound`):** Determining the winner of each round, accounting for case-insensitive player input, and updating scores.
* **Game Orchestration (`playGame`):** Managing a series of 5 rounds (can be tweaked in the <script> tag)
