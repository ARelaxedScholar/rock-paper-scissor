const activeClass = 'active';
const visibilityClass = 'active';

const choices = document.querySelectorAll('.choices'); 
let playerChoice = null;
choices.forEach(element => {
	element.addEventListener('click', function(event) {
		event.stopPropagation();
		this.classList.toggle('active');
		const inConsideration = this;
		const srcImgArr = inConsideration.src.split("/");
		playerChoice = srcImgArr[srcImgArr.length-1].split(".")[0];
		console.log(`${playerChoice}`);
		
		let playerDiv = document.getElementById('player-choice');
		if (this.classList.contains('active')) {
		// Do the mech thingey
		if (playerChoice == 'rock') {
			playerDiv.innerHTML = '<img src="./img/rock-mech.png" alt="Sick ass mech of a rock" style="max-height: 100%;">'
		} else if (playerChoice == 'paper') {
			playerDiv.innerHTML = '<img src="./img/paper-mech.png" alt="Sick ass mech of a paper" style="max-height: 100%;">'
		} else {
			playerDiv.innerHTML = '<img src="./img/scissors-mech.png" alt="Sick ass mech of a pair of scissors dinosaur" style="max-height: 100%;">'
		}} else {
			playerDiv.innerHTML = '';
		}
		choices.forEach(nonActive => {
			if (nonActive != inConsideration) {
				nonActive.classList.remove('active');
			}
		});
	});
});

function rpsAndClean(userChoice, computerChoice) {
	choices.forEach(element => {
		console.log(`${element}`);
		element.classList.remove('active');
	});
	// just delegate to this function
	return playRound(userChoice, computerChoice);
}

function getRandomRgbColor() {
                const r = Math.floor(Math.random() * 256); // 0-255
                const g = Math.floor(Math.random() * 256); // 0-255
                const b = Math.floor(Math.random() * 256); // 0-255
                return `rgb(${r}, ${g}, ${b})`; // 
}

// Now the main part
let playerScore = 0;
let computerScore = 0;
const sectionToAddResults = document.getElementById("results");
rps_dict = {0:"rock", 1:"paper", 2:"scissors"};

const getComputerChoice = () => rps_dict[Math.floor(Math.random() * 3)];
			
document.getElementById('confirmation').addEventListener("click", function() {
	const computerChoice = getComputerChoice();
	const result = rpsAndClean(playerChoice, computerChoice);
	// Check for score updates
	if (result[0] < 0) {
		computerScore++;
	} else if (result[0] > 0) {
		playerScore++;
	}
	// Check for termination	
	if (playerScore >= 5) {
		alert("Congrats! You won the game! (And you lost the game... sry)");
	} else if (computerScore >= 5) {
		alert("Pwa-pwa-pwa-pwawawa... You lost. Refresh to try again.");
	}
	var newDiv = document.createElement("div");

	newDiv.innerHTML = `<span><strong>Current Score: Player ${playerScore} VS Computer ${computerScore}</strong><br></span>
		<span><em>User move</em>: ${playerChoice}<br></span>
		<span><em>Computer move</em>: ${computerChoice}<br></span>
		<span>${result[1]}<br></span>`;
	
	// Adding the text stuff
	newDiv.classList.add('result');

	newDiv.style.setProperty('--random-color-1', getRandomRgbColor());
        newDiv.style.setProperty('--random-color-2', getRandomRgbColor());
	sectionToAddResults.appendChild(newDiv);
	// scroll to the bottom of the div when a new result is added (and we are overflowing)
	sectionToAddResults.scrollTop = sectionToAddResults.scrollHeight - sectionToAddResults.clientHeight; 
	
});
