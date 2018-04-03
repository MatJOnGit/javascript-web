var buttonElt = document.querySelector("button");
var timerElt = document.getElementById("timer");
var timerInProgress = false;


function increaseTimer() {
    timerElt.textContent = Number(timerElt.textContent) + 1;
}


buttonElt.addEventListener("click", function () {
    if (!timerInProgress) {
        intervalId = setInterval(increaseTimer, 1000);
        buttonElt.textContent = "Stop counting";
    } else {
        clearInterval(intervalId);
        buttonElt.textContent = "Start counting";
    }
    // Inverse l'état du switch
    timerInProgress = !timerInProgress;
});