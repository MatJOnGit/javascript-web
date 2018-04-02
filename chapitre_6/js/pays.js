// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var countryInputElt = document.getElementById("pays");
// Affichage d'un message contextuel pour la saisie du pseudo
countryInputElt.addEventListener("focus", function () {
    console.log("Entrée dans la saisie");
});
// Suppression du message contextuel pour la saisie du pseudo
countryInputElt.addEventListener("blur", function () {
    console.log("Sortie de la saisie");
});








// Produire une liste de <div> .suggestion contenant la chaîne de caractères contenue dans la balise <input> #pays dès qu'un focus est fait sur l'élément, et après chaque input

// Pour chaque <div> .suggestion, créer un eventListener de type "click" pour copier son contenu dans la balise <input>

// Affiche la liste dans la <div> #suggestions