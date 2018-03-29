function definitionCouleur() {
    var choixTypeCouleur;
    var couleur = "";
    while ((choixTypeCouleur !== 1) && (choixTypeCouleur !== 2)) {
        choixTypeCouleur = Number(prompt("Pour entrer une couleur en toutes lettres, tapez 1. Pour entrer une couleur en format RGB, tapez 2"));
        if (choixTypeCouleur === 1) {
            couleur = prompt("Entrez le nom (en anglais) de la couleur avec laquelle surligner le texte");
        } else if (choixTypeCouleur === 2) {
            var quantiteRouge = Number(prompt("Entrez la quantité de rouge (entre 0 et 255)"));
            var quantiteVert = Number(prompt("Entrez la quantité de vert (entre 0 et 255)"));
            var quantiteBleu = Number(prompt("Entrez la quantité de bleu (entre 0 et 255)"));
            couleur = "rgb(" + quantiteRouge + ", " + quantiteVert + ", " + quantiteBleu + ")";
        }
    }
    return couleur;
}

function changementCouleurFond(divElts) {
    var couleur = definitionCouleur();
    for (i = 0; i < divElts.length; i++) {
        divElts[i].style.backgroundColor = couleur;
    }
    console.log("Couleur de fond changée en " + couleur);
}

function changementCouleurPolice(divElts) {
    var couleur = definitionCouleur();
    for (i = 0; i < divElts.length; i++) {
        divElts[i].style.color = couleur;
    }
    console.log("Couleur de police changée en " + couleur);
}

var divElts = document.getElementsByTagName("div");

console.log("Choix de la couleur de fond");
changementCouleurFond(divElts);

console.log("Choix de la couleur de police");
changementCouleurPolice(divElts);