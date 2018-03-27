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

// Ajout d'un élément au tout début de la liste
//var dlElt = document.createElement("dl");
//document.getElementById("contenu").appendChild(dlElt); // Insertion de l'élément dl

//var dtElt = document.createElement("dt");
//document.querySelector("dl").appendChild(dtElt); // Insertion de l'élément dt dans dl

//var strongElt = document.createElement("strong");
//document.querySelector("dt").appendChild(strongElt); // Insertion de l'élément strong dans dt

//var ddElt = document.createElement("dd");
//document.querySelector("dl").appendChild(ddElt); // Insertion de l'élément dd dans dl



//var premierMotFini = document.querySelector("strong").appendChild(mots[0].terme);

for (i=0; i<mots.length; i++) {
    var motElt = document.createElement("strong");
    motElt.textContent = mots[i].terme;
    console.log(motElt.textContent);
    var definitionElt = document.createElement("dd");
    definitionElt.textContent = mots[i].definition;
    console.log(definitionElt.textContent);
    document.getElementById("contenu").appendChild(motElt.textContent);
    //document.getElementById("contenu").appendChild(document.createElement("br"));

    //var motElt = document.createElement("dt");
    //motElt.textContent = mots[i].terme;

    //var definitionElt = document.createElement("dd");
    //definitionElt.textContent = mots[i].definition;

    //var affichage = "";
    //affichage = document.getElementById("contenu").appendChild(motElt);
    //console.log(affichage)

    //document.getElementById("contenu").appendChild(document.createElement("dl")); // Insertion du dl
    //document.getElementById("contenu").appendChild(document.createElement("dt");
    //document.getElementById("contenu").appendChild(motElt); // Insertion du dt dans dl
    //document.getElementById("contenu").appendChild(definitionElt); // Insertion du nouvel élément
}