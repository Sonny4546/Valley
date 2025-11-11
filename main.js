// Get the input field
var passInput = document.getElementById("passcode");
var body = document.body;
var maindiv = document.getElementById("main");
var valleymain = document.getElementById("valleymain");
var hint = document.getElementById("hint");
var dialogS = document.getElementById("dialogS");
var dialogE = document.getElementById("dialogE");
var d_img = document.getElementById("dialog-img");
var sai_1 = document.getElementById("sai_1");
var sai_2 = document.getElementById("sai_2");
var sai_3 = document.getElementById("sai_3");
var sai_4 = document.getElementById("sai_4");
var eli_1 = document.getElementById("eli_1");
var eli_2 = document.getElementById("eli_2");
var eli_3 = document.getElementById("eli_3");
var btn = document.getElementById("secret");
var moon_img = document.getElementById("moon-img");
var stars = document.getElementById("stars");
var moonwrap = document.getElementById("moon");
var cliff_img = document.getElementById("cliff-img");
var mtn_lod0 = document.getElementById("mountain-lod0");
var mtn_shd1 = document.getElementById("mountain-shd1");
var mtn_shd2 = document.getElementById("mountain-shd2");
var mtn_shd3 = document.getElementById("mountain-shd3");
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
            window.location.replace("https://sonny4546.github.io/Valley/valley.html");
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

// Define the function to be executed on click
function handleClick() {
    console.log('Button clicked!');
    count = parseInt(dialogS.getAttribute("data-value"));
    switch(count) {
        case 1:
            sai_1.style.opacity = "1";
            sai_2.style.opacity = "0";
            sai_3.style.opacity = "0";
            sai_4.style.opacity = "0";
            dialogS.style.opacity = "1";
            dialogS.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 2);
            dialogE.setAttribute("data-value", 2);
            break;
        case 2:
            dialogS.style.animation = "dialogExit 0.2s ease-in forwards";
            dialogS.style.opacity = "0";
            setTimeout(() => {dialogS.style.removeProperty("animation");}, 200);
            
            eli_1.style.opacity = "1";
            eli_2.style.opacity = "0";
            eli_3.style.opacity = "0";
            dialogE.style.opacity = "1";
            dialogE.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 3);
            dialogE.setAttribute("data-value", 3);
            break;
        case 3:
            dialogE.style.animation = "dialogExit 0.2s ease-in forwards";
            dialogE.style.opacity = "0";
            setTimeout(() => {dialogE.style.removeProperty("animation");}, 200);

            sai_1.style.opacity = "0";
            sai_2.style.opacity = "1";
            sai_3.style.opacity = "0";
            sai_4.style.opacity = "0";
            dialogS.style.opacity = "1";
            dialogS.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 4);
            dialogE.setAttribute("data-value", 4);
            break;
        case 4:
            dialogS.style.animation = "dialogExit 0.2s ease-in forwards";
            dialogS.style.opacity = "0";
            setTimeout(() => {dialogS.style.removeProperty("animation");}, 200);

            eli_1.style.opacity = "0";
            eli_2.style.opacity = "1";
            eli_3.style.opacity = "0";
            dialogE.style.opacity = "1";
            dialogE.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 5);
            dialogE.setAttribute("data-value", 5);
            break;
        case 5:
            dialogE.style.animation = "dialogExit 0.2s ease-in forwards";
            dialogE.style.opacity = "0";
            setTimeout(() => {dialogE.style.removeProperty("animation");}, 200);

            sai_1.style.opacity = "0";
            sai_2.style.opacity = "0";
            sai_3.style.opacity = "1";
            sai_4.style.opacity = "0";
            dialogS.style.opacity = "1";
            dialogS.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 6);
            dialogE.setAttribute("data-value", 6);
            break;
        case 6:
            dialogS.style.animation = "dialogExit 0.2s ease-in forwards";
            dialogS.style.opacity = "0";
            setTimeout(() => {dialogS.style.removeProperty("animation");}, 200);

            eli_1.style.opacity = "0";
            eli_2.style.opacity = "0";
            eli_3.style.opacity = "1";
            dialogE.style.opacity = "1";
            dialogE.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 7);
            dialogE.setAttribute("data-value", 7);
            break;
        case 7:
            dialogE.style.animation = "dialogExit 0.2s ease-in forwards";
            dialogE.style.opacity = "0";
            setTimeout(() => {dialogE.style.removeProperty("animation");}, 200);

            sai_1.style.opacity = "0";
            sai_2.style.opacity = "0";
            sai_3.style.opacity = "0";
            sai_4.style.opacity = "1";
            dialogS.style.opacity = "1";
            dialogS.style.animation = "dialogEnter 0.2s ease-in forwards";
            dialogS.setAttribute("data-value", 8);
            dialogE.setAttribute("data-value", 8);
            break;
        case 8:
            setTimeout(() => {dialogE.style.removeProperty("animation");}, 200);
            setTimeout(() => {dialogS.style.removeProperty("animation");}, 200);
            dialogS.setAttribute("data-value", 9);
            dialogE.setAttribute("data-value", 9);
            dialogS.style.opacity = "0";
            dialogE.style.opacity = "0";
            break;
        default:
            dialogS.setAttribute("data-value", 1);
            dialogE.setAttribute("data-value", 1);
            btn.style.opacity = "25%";
            break;
    }
    console.log(dialogS.getAttribute("data-value"));
}

function transition() {
    console.log('Button clicked!');
    bg_count = parseInt(body.getAttribute("data-value"));
    count = parseInt(btn.getAttribute("data-value"));
    switch(count) {
        case 1:
            btn.style.opacity = "25%";
            btn.setAttribute("data-value", 2);
            break;
        case 2:
            btn.style.opacity = "50%";
            btn.setAttribute("data-value", 3);
            break;
        case 3:
            btn.style.opacity = "75%";
            btn.setAttribute("data-value", 4);
            break;
        case 4:
            btn.style.opacity = "100%";
            btn.setAttribute("data-value", 5);
            break;
        case 5:
            btn.setAttribute("data-value", 6);
            switch(bg_count) {
                case 1:
                    valleymain.className = "valleymain-daytime";
                    moon_img.className = "sun-img";
                    stars.className = "stars-daytime";
                    moon_img.src = "./img/sun.png";
                    moonwrap.className = "daytime";
                    cliff_img.className = "cliff-img-daytime";
                    mtn_lod0.className = "mountain-lod0-daytime";
                    mtn_shd1.className = "mountain-shd-daytime";
                    mtn_shd2.className = "mountain-shd-daytime";
                    mtn_shd3.className = "mountain-shd-daytime";
                    btn.setAttribute("data-value", 6);
                    btn.style.opacity = "0";
                    body.setAttribute("data-value", 2);
                    console.log("daytime");
                    break;
                case 2:
                    valleymain.className = "valleymain";
                    moon_img.className = "moon-img";
                    stars.className = "stars";
                    moon_img.src = "./img/moon.png";
                    moonwrap.className = "moon";
                    cliff_img.className = "cliff-img";
                    mtn_lod0.className = "mountain-lod0";
                    mtn_shd1.className = "mountain-shd";
                    mtn_shd2.className = "mountain-shd";
                    mtn_shd3.className = "mountain-shd";
                    btn.setAttribute("data-value", 6);
                    btn.style.opacity = "0";
                    body.setAttribute("data-value", 3);
                    console.log("nighttime");
                    break;
                
                default:
                    valleymain.className = "valleymain-sunset";
                    moon_img.className = "sun-img";
                    stars.className = "stars-sunset";
                    moon_img.src = "./img/sun.png";
                    moonwrap.className = "sunset";
                    cliff_img.className = "cliff-img-sunset";
                    mtn_shd1.className = "mountain-shd-sunset";
                    mtn_shd2.className = "mountain-shd-sunset";
                    mtn_shd3.className = "mountain-shd-sunset";
                    btn.setAttribute("data-value", 6);
                    btn.style.opacity = "0";
                    body.setAttribute("data-value", 1);
                    console.log("sunset");
            }
            break;
        default:
            btn.setAttribute("data-value", 1);
            break;
    }
    console.log(btn.getAttribute("data-value"));
}
