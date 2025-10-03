// Get the input field
var passInput = document.getElementById("passcode");
var body = document.body;
var maindiv = document.getElementById("main");
var hint = document.getElementById("hint");
let originalValue = "none";

passInput.addEventListener('input', function() {
    originalValue = this.value; // Get the actual input value
});

let keypress = 0;

// Execute a function when the user presses a key on the keyboard
passInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        if (originalValue === "11/12/07") {
            body.style.animation = "fadeInColor 0.5s ease-in-out forwards";
            maindiv.style.animation = "fadeOut 0.25s ease-in-out forwards";
            window.location.replace("/valley.html");
        } else {
            keypress += 1;
            if (keypress == 5) {
                hint.style.color = "greenyellow";
            }
            console.log(keypress);
            console.log(originalValue);
        }
    }
});