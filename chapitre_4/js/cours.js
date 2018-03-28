var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";


var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "greenyellow"
console.log(paragraphesElts[2].style.color); // N'affiche rien, car ce style est défini dans le fichier css

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB