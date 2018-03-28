var divElts = document.getElementsByTagName("div");

var choixTypeCouleur;
var couleur = "";
while ((choixTypeCouleur !== 1) && (choixTypeCouleur !== 2)) {
    choixTypeCouleur = Number(prompt("[Couleur de fond] Pour entrer une couleur en toutes lettres, tapez 1. Pour entrer un couleur en format RGB, tapez 2"));
    if (choixTypeCouleur === 1) {
        couleur = prompt("Entrez le nom (en anglais) de la couleur avec laquelle surligner le texte");
        for (i = 0; i < divElts.length; i++) {
            divElts[i].style.backgroundColor = couleur;
        }
    } else if (choixTypeCouleur === 2) {
        var quantiteRouge = Number(prompt("Entrez la quantité de rouge (entre 0 et 255)"));
        var quantiteVert = Number(prompt("Entrez la quantité de vert (entre 0 et 255)"));
        var quantiteBleu = Number(prompt("Entrez la quantité de bleu (entre 0 et 255)"));
        couleur = "rgb(" + quantiteRouge + ", " + quantiteVert + ", " + quantiteBleu + ")";
        for (i = 0; i < divElts.length; i++) {
            divElts[i].style.backgroundColor = couleur;
        }
    }
}

var choixTypeCouleur = 0;
while ((choixTypeCouleur !== 1) && (choixTypeCouleur !== 2)) {
    choixTypeCouleur = Number(prompt("[Couleur de la police] Pour entrer une couleur en toutes lettres, tapez 1. Pour entrer un couleur en format RGB, tapez 2"));
    if (choixTypeCouleur === 1) {
        couleur = prompt("Entrez le nom (en anglais) de la couleur avec laquelle surligner le texte");
        for (i = 0; i < divElts.length; i++) {
            divElts[i].style.color = couleur;
        }
    } else if (choixTypeCouleur === 2) {
        var quantiteRouge = Number(prompt("Entrez la quantité de rouge (entre 0 et 255)"));
        var quantiteVert = Number(prompt("Entrez la quantité de vert (entre 0 et 255)"));
        var quantiteBleu = Number(prompt("Entrez la quantité de bleu (entre 0 et 255)"));
        couleur = "rgb(" + quantiteRouge + ", " + quantiteVert + ", " + quantiteBleu + ")";
        for (i = 0; i < divElts.length; i++) {
            divElts[i].style.color = couleur;
        }
    }
}
