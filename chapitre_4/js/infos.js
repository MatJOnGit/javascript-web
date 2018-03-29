var contenuElt = document.getElementById("contenu");

var infos = ["Hauteur : " + contenuElt.clientHeight + "px", "Longueur : " + contenuElt.clientWidth + "px"];

var infosElt = document.getElementById("infos");
infosElt.textContent = "Informations sur l'élément";

var ulElt = document.createElement("ul");
infosElt.appendChild(ulElt);

for (i = 0; i < infos.length; i++) {
    var liElt = document.createElement("li");
    liElt.textContent = infos[i];
    
    ulElt.appendChild(liElt);
    
    console.log(document.querySelectorAll("li").childNodes[0]);
}

// Correction

//var styleElement = getComputedStyle(document.getElementById("contenu"));
//var listeElt = document.createElement("ul");
//var longueurElt = document.createElement("li");
//longueurElt.textContent = "Longueur : " + styleElement.width;
//var hauteurElt = document.createElement("li");
//hauteurElt.textContent = "Hauteur : " + styleElement.height;
//listeElt.appendChild(hauteurElt);
//listeElt.appendChild(longueurElt);
//document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
//document.getElementById("infos").appendChild(listeElt);