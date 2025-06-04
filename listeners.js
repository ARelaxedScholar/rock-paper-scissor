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

// Now the main part
let playerScore = 0;
let computerScore = 0;
const sectionToAddResults = document.getElementById("results");
rps_dict = {0:"rock", 1:"paper", 2:"scissors"};

const getComputerChoice = () => rps_dict[Math.floor(Math.random() * 3)];
			
document.getElementById('confirmation').addEventListener("click", function() {
	const result = rpsAndClean(playerChoice, getComputerChoice());
	if (result < 0) {
		computerScore++;
	} else if (result > 0) {
		playerScore++;
	}
	if (playerScore >= 5 || computerScore >= 5) {
		alert("Game is over!");
	}
		const newDiv = document.createElement("div");
		const newContent = document.createTextNode(`Current Score: Player ${playerScore} AND Computer ${computerScore}`);
		newDiv.appendChild(newContent);
		newDiv.classList.add('result');
		sectionToAddResults.appendChild(newDiv);
});
