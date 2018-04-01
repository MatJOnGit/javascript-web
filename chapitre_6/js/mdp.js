// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp1").addEventListener("blur", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ avec l'id "mdp1"
    var longueurMdp = "";
    var couleurMsg= "";
    if (mdp.length < 6) {
        longueurMdp = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
        couleurMsg = "red"; // Longueur faible => couleur rouge
    } else {
        longueurMdp = "";
        couleurMsg = "green"; // Longueur moyenne => couleur orange
    }
    var infoMdpElt = document.getElementById("infoMdp");
    infoMdpElt.textContent = longueurMdp; // Texte de l'aide
    infoMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var infoMdpElt = document.getElementById("infoMdp");
    var regexMdp = /[0-9]/;
    if (mdp1 != mdp2) {
        e.preventDefault(); // Annulation de l'envoi des données
        infoMdpElt.textContent = "les deux champs sont différents";
    } else if (mdp1.length < 6) {
        e.preventDefault(); // Annulation de l'envoi des données
        infoMdpElt.textContent = "Le mot de passe n'est pas assez long";
    } else if (!regexMdp.test(mdp1)) {
        e.preventDefault(); // Annulation de l'envoi des données
        console.log("Le mot de passe ne possède pas de chiffre");
    } else {
        e.preventDefault(); // Annulation de l'envoi des données
        console.log("Formulaire validé");
    }
});