/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

var contenu = document.getElementById("contenu");
var newLink = [];


// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

function containerClearer() {
    document.getElementById("linkBuilder").innerHTML = "";
}

function initLinkAdder() {
    containerClearer();
    //ajouter bouton "Ajouter un lien"
    var newLinkButton = document.createElement("button");
    newLinkButton.textContent = "Ajouter un lien";
    linkBuilderElt.appendChild(newLinkButton);
    newLinkButton.addEventListener("click", initLinkForm);
}

function initLinkForm() {
    containerClearer();
    var linkForm = document.createElement("form");
    var authorElm = document.createElement("input");
    authorElm.placeholder = "Entrez votre nom";
    authorElm.style.width = "130px";
    authorElm.required = true;
    var titleElm = document.createElement("input");
    titleElm.placeholder = "Entrez le titre du lien";
    titleElm.style.width = "250px";
    titleElm.required = true;
    var urlElm = document.createElement("input");
    urlElm.placeholder = "Entrez l'URL du lien";
    urlElm.style.width = "250px";
    urlElm.required = true;
    var addLinkButton = document.createElement("button");
    addLinkButton.textContent = "Ajouter";
    addLinkButton.type = "submit";
    
    linkBuilder.appendChild(linkForm);
    linkForm.appendChild(authorElm);
    linkForm.appendChild(titleElm);
    linkForm.appendChild(urlElm);
    linkForm.appendChild(addLinkButton);
    
    addLinkButton.addEventListener("click", function () {
        if ((authorElm.value != "") && (titleElm.value != "") && (urlElm.value != "")) {
            newLink = [titleElm.value, urlElm.value, authorElm.value];
            addLinkToList(newLink);
            containerClearer();
            //showInfo(); pendant 2 secondes
            initLinkAdder();
        }
    });
}

function addLinkToList(newLink) {
    console.log("Le lien " + newLink[0] + " a bien été ajouté à la liste par " + newLink[2] + ".");
    
}

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

// Ajout de la div contenant la fonctionnalité d'ajout de lien dans la liste
var linkBuilderElt = document.createElement("div");
linkBuilderElt.id = "linkBuilder";
linkBuilderElt.style.paddingBottom = "20px";
document.body.insertBefore(linkBuilderElt, document.getElementById("contenu"));

initLinkAdder();