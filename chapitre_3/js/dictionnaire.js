// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
document.getElementById("contenu").appendChild(document.createElement("dl")); // Insertion du dl
// Ajout d'un élément au tout début de la liste
for (i=0; i<mots.length; i++) {
    var motElt = document.createElement("dt");
    motElt.textContent = mots[i].terme;
    //console.log(motElt.textContent);
    var definitionElt = document.createElement("dd");
    definitionElt.textContent = mots[i].definition;
    //console.log(definitionElt.textContent);
    
    document.querySelector("dl").appendChild(document.createElement("dt"));
    document.querySelector("dt").appendChild(document.createElement("strong"));
    document.querySelector("strong").appendChild(motElt);
    document.querySelector("dl").appendChild(document.createElement("dd"));
    document.querySelector("dd").appendChild(definitionElt);
}