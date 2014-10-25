// Find the DOM element with the class name "button1"
var button = document.getElementsByClassName("button1");
var instructionsDiv = document.getElementsByClassName("instructions");

// getElementsByClassName returns an array: [<button1>]
button = button[0];
instructionsDiv = instructionsDiv[0];



var clickResult = function() {
    // instructionsDiv has the properties:
        // instructionsDiv.class = "instructions"
        // instructionsDiv.style = "border: solid orange 2px; font-family: fantasy"
    instructionsDiv.style.border = "solid red 2px";	
	console.log("test1");
    //this outputs "test1"
    
}; // end clickResult()