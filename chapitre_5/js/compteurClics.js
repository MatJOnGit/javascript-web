function incrementation() {
    var compteurClicElt = document.getElementById("compteurClics");
    compteurClicElt.textContent++;
}

function desactiverIncrementation() {
    var incrementationElt = document.getElementById("clic");
    incrementationElt.removeEventListener("click", incrementation);
}

var incrementationElt = document.getElementById("clic");
// Ajout d'un gestionnaire pour l'événement click
incrementationElt.addEventListener("click", incrementation);

var stopIncrementationElt = document.getElementById("desactiver");
stopIncrementationElt.addEventListener("click", desactiverIncrementation);