console.log("This runs");
const activeClass = 'active';
const choices = document.querySelectorAll('.choices'); 
choices.forEach(element => {
	element.addEventListener('click', function(event) {
		event.stopPropagation();
		this.classList.toggle('active');
		const inConsideration = this;
		choices.forEach(nonActive => {
			if (nonActive != inConsideration) {
				nonActive.classList.remove('active');
			}
		});
	});
});
