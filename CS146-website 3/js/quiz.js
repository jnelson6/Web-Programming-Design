/* form handling and DOM manipulation */

document.addEventListener('DOMContentLoaded', function(loadEvent) {
    document.getElementById("duck-quiz").addEventListener("submit", function(event){
        handleQuizSubmit(event);
    }, false);
});

function handleQuizSubmit(event){
	event.preventDefault();
	if(document.getElementById("ans1").value == "antarctica"){
		document.getElementById("q1").classList.add("correct");
	}
	else{
		document.getElementById("q1").classList.add("incorrect");
		var newElement = document.createElement("span");
		newElement.innerHTML = "Correct Answer: Antarctica";
		newElement.classList.add("correct");
		newElement.style.marginTop = "5px";
		document.getElementById("q1").appendChild(newElement);
	}
	if(document.getElementById("ans2").checked){
		document.getElementById("q2").classList.add("correct");
	}
	else{
		document.getElementById("q2").classList.add("incorrect");
		document.getElementById("correct-answer-2").classList.add("correct");
	}
	if(document.getElementById("ans3").checked){
		document.getElementById("q3").classList.add("correct");
	}
	else{
		document.getElementById("q3").classList.add("incorrect");
		document.getElementById("correct-answer-3").classList.add("correct");
	}
	if(document.getElementById("ans4").checked){
		document.getElementById("q4").classList.add("correct");
	}
	else{
		document.getElementById("q4").classList.add("incorrect");
		document.getElementById("correct-answer-4").classList.add("correct");
	}
	if(document.getElementById("ans5").checked){
		document.getElementById("q5").classList.add("correct");
	}
	else{
		document.getElementById("q5").classList.add("incorrect");
		document.getElementById("correct-answer-5").classList.add("correct");
	}
	if(document.getElementById("ans6").value == "Ring Necked Herchead"){
		document.getElementById("q6").classList.add("correct");
	}
	else{
		document.getElementById("q6").classList.add("incorrect");
		var newElement = document.createElement("span");
		newElement.innerHTML = "Correct Answer: Ring Necked Herchead";
		newElement.classList.add("correct");
		newElement.style.marginTop = "5px";
		document.getElementById("q6").appendChild(newElement);
	}

	if(document.getElementById("ans7").value == 11){
		document.getElementById("q7").classList.add("correct");
	}
	else{
		document.getElementById("q7").classList.add("incorrect");
		var newElement = document.createElement("span");
		newElement.innerHTML = "Correct Answer: 11";
		newElement.classList.add("correct");
		newElement.style.marginTop = "5px";
		document.getElementById("q7").appendChild(newElement);
	}
}