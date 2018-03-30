function changementCouleur (couleur) {
    var paragraphesElts = document.getElementsByTagName("div");
    for (i=0; i<paragraphesElts.length; i++) {
        paragraphesElts[i].style.backgroundColor = couleur;
    }
}

function traductionCouleur(touche) {
    var couleur = "";
    switch (touche) {
        case "r":
        case "R":
            couleur = "red";
            break;
        case "j":
        case "J":
            couleur = "yellow";
            break;
        case "v":
        case "V":
            couleur = "green";
            break;
        case "b":
        case "B":
            couleur = "white";
            break;
        default:
            couleur = "inherit";
    }
    return couleur;
}

document.addEventListener("keypress", function (e) {
    var couleur = traductionCouleur(String.fromCharCode(e.charCode));    
    changementCouleur(couleur);
});