// Put your JavaScript code in this file

// Magic 8 Ball answers array
let answers = ["Maybe", "Could Be", "Always", "Almost certainly not", "Why Not?", "Nope"];


// Function displaying random answer to user
 function displayAnswer() {

// Generate random index from array
let randomIndex = Math.floor(Math.random() * answers.length);

let circle = document.getElementById("circle");

circle.style.display = "block";

circle.innerHTML = answers[randomIndex]
}


let ball = document.getElementById("ball");

// Add event listener for "mousedown" event
ball.addEventListener("mousedown", function(){
	let userQuestion = document.getElementById("question").value;
	
	// Check to see if question is empty
	if (userQuestion =="") {
	 
		alert("Please enter a question.")
	} else {

	
		//Display an answer
		displayAnswer();
	}

});


let reset = document.getElementById("reset");


// Add event listener for "click" event
reset.addEventListener("click", function() {
	
	document.getElementById("circle").style.display =  "none";

});