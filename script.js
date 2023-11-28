function highlight() {
    //Write your code here
	// get array of all <strong> elements
	const boldElements = document.getElementsByTagName("strong");
	for(let boldText of boldElements) {
		boldText.style.color = "green";
	}

}


function return_normal() {
    //Write your code here
	const boldElements = document.getElementsByTagName("strong");
	for(let boldText of boldElements) {
		boldText.style.color = "#000000";
	}
    
}
