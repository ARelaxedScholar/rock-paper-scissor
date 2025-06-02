			function userChoice() {
				var action = prompt('Please choose: "rock", "paper" or "scissors"');
				var cased_action = action.toLowerCase();

				if (["rock", "paper", "scissors"].includes(cased_action)) {
					return [cased_action, false];
				} else {
					return [cased_action, true]; 
				}
			}
			
			function getUserChoice() {
				while (true) {
					let [choice, err] = userChoice();
					if (!err) {
						return choice;
					} 
					alert("Please make sure to input one of the three options.");
				}
			}

function playRound(userChoice, computerChoice) {
	console.log(`User move: ${userChoice}`);
	console.log(`Computer move: ${computerChoice}`);
	if (userChoice == computerChoice) {
		alert(`It's a tie! Y'all both picked ${userChoice}`);
		console.log(`It's a tie! Y'all both picked ${userChoice}`);
	return 0;	}
		losingMessage = (userChoice, computerChoice) => `You lost this round: ${computerChoice} beats ${userChoice}.`;
		winningMessage = (userChoice, computerChoice) => `You won this round! You played ${userChoice} and the computer played ${computerChoice}.`;
		// Else either user won.
		if ((userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper") || (userChoice == "rock" && computerChoice == "scissors")) {
		alert(winningMessage(userChoice, computerChoice));
			console.log(winningMessage(userChoice, computerChoice));
			return 1;
		}
		else {
			// or computer did.
			alert(losingMessage(userChoice, computerChoice));
			console.log(losingMessage(userChoice, computerChoice));
			return -1;
		}
}
