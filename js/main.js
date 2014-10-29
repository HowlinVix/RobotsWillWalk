// Find the DOM element with the class name "button1"
var button = document.getElementsByClassName("button1");
var instructionsDiv = document.getElementsByClassName("instructions");

// getElementsByClassName returns an array: [<button1>]
button = button[0];
    console.log("test1");
// button[0].on()
// button.on('click', clickResult);<img src="http://placedog.com/500/432">


// ERROR
// Button does not have a method "on."
// We need to use an event handling function...


button.on('click', function() {
    
});

var clickResult = function() {
    // instructionsDiv has the properties:
        // instructionsDiv.class = "instructions"
        // instructionsDiv.style = "border: solid orange 2px; font-family: fantasy"
    instructionsDiv.stlye = "border: solid red 2px;";
    console.log("test1");
    
}; // end clickResult()