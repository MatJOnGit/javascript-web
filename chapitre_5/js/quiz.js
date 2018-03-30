// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var ulElt = document.createElement("ul");
ulElt.style.listStyle = "none";

for (var i=0; i<questions.length; i++) {
    liElt = document.createElement("li");
    liElt.textContent = "Question " + (i+1) + " : ";
    liElt.style.fontWeight = "bold";
    liElt.style.marginBottom = "10px";
    
    spanElt = document.createElement("span");
    spanElt.textContent = questions[i].enonce;
    spanElt.style.fontWeight = "normal";
    spanElt.style.fontStyle = "italic";
    
    brElt = document.createElement("br");
    
    boutonElt = document.createElement("button");
    boutonElt.textContent = "Afficher la réponse";
    boutonElt.style.border = "1px solid grey";
    boutonElt.style.borderRadius = "5px";
    boutonElt.style.marginTop = "2px";
    
    ulElt.appendChild(liElt);
    liElt.appendChild(spanElt);
    liElt.appendChild(brElt);
    liElt.appendChild(boutonElt);
    
    boutonElt.addEventListener("click", function (e) {
        e.target.textContent = "la réponse";
    });
}

document.getElementById("contenu").appendChild(ulElt);