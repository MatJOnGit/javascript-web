// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

// Ajout d'un élément au tout début de la liste
for (i=0; i<journaux.length; i++) {
    document.getElementById('contenu').insertAdjacentHTML("beforeEnd", '<a href=' + journaux[i] + '>' + journaux[i] + '</li><br />');
    //var lienElt = document.createElement("a"); //Correction
    //lienElt.textContent = journaux[i]; //Correction
    //lienElt.href = journaux[i]; //Correction
    //document.getElementById("contenu").appendChild(lienElt); // Insertion du nouvel élément <a> //Correction
    //document.getElementById("contenu").appendChild(document.createElement("br")); //Correction
}