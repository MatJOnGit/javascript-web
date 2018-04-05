var startButtonElm = document.getElementById("start");
var stopButtonElm = document.getElementById("stop");
var ball = document.getElementById("ball");
var frame = document.getElementById("frame");

var speed = 10; // The element move from this value (of pixels) at the end of every function called

// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var ballWidth = parseFloat(getComputedStyle(ball).width);
var animationId = null; // Identifiant de l'animation
var direction = 1; // Sens de déplacement : 1 = droit, -1 = gauche
var xMin = 0;


function moveBall() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBall = parseFloat(getComputedStyle(ball).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(frame).width);
    //On inverse la direction initiale une fois un bord atteint
    if ((xBall + ballWidth > xMax) || (xBall < xMin)) {
        direction *= -1;
    }
    ball.style.left = (xBall + speed * direction) + "px";
    animationId = requestAnimationFrame(moveBall);
}


startButtonElm.addEventListener("click", function () {
    startButtonElm.disabled = true;
    stopButtonElm.disabled = false;
    requestAnimationFrame(moveBall);
});

stopButtonElm.addEventListener("click", function () {
    startButtonElm.disabled = false;
    stopButtonElm.disabled = true;
    cancelAnimationFrame(animationId);
});