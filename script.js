
const theTimer = document.querySelector(".timer");
const textArea = document.querySelector("#textArea");
const originText = document.querySelector(".secondP").innerHTML;
const button = document.querySelector(".button");


var timer = [0,0,0,0];
var condition = true;
var interval;

function leadingZero(a) {
    
    if (a <= 9) { 
        a = "0"+a;
    }

    return a;
}

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0] * 6000));
}

function spellCheck() {
    let enteredText = textArea.value;
    let originTextMatch = originText.substring(0 , enteredText.length);

    if (originText == enteredText) {
        
        textArea.style.borderColor = "green";
        clearInterval(interval);

    } else {
        
        if (enteredText == originTextMatch) {
            textArea.style.borderColor = "yellow";

        }else{
            textArea.style.borderColor = "red";
        }
    }
}

function reset() {
    clearInterval(interval);
    interval=null;
    timer = [0,0,0,0];
    condition = true;

    textArea.value = "";
    theTimer.innerHTML = "00:00:00";
    textArea.style.borderColor = "grey";
}

function start() {
   let textAreaLength = textArea.value.length;

   if (textAreaLength == 0 && condition) {
        condition = false;
        interval = setInterval(runTimer , 10);
   }
}


textArea.addEventListener("keypress" , start);
textArea.addEventListener("keyup" , spellCheck );
button.addEventListener("click" , reset);

