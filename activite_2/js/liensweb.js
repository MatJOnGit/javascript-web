/* 
Activity 2
*/

// List of web links to display. A link is defined by :
// - its title
// - its URL
// - its author

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
var newLink;

function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

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
            var regexHTTP = /http:\/\//;
            var regexHTTPS = /https:\/\//;
            // Add "http://" to the beginning of the url when it doesn't start by "http://" or "https://"
            if ((!regexHTTP.test(urlElm.value)) && (!regexHTTPS.test(urlElm.value))) {
                urlElm.value = "http://" + urlElm.value;
            }
            
            newLink = {
                titre: titleElm.value,
                url: urlElm.value,
                auteur: authorElm.value
            };
            showInfo(newLink);
        }
    });
}

function showInfo(newLink) {
    addLinkToList(newLink);
    containerClearer();
    
    var newLinkInfoElt = document.getElementById("linkInfo");
    newLinkInfoElt.textContent = 'Le lien "' + newLink.titre + '" a bien été ajouté.',
    newLinkInfoElt.style.padding = "20px 15px";
    newLinkInfoElt.style.marginBottom = "30px";
    
    // Empty the linkInfo div content after 2 seconds
    setTimeout(function () {
        newLinkInfoElt.style.marginBottom = "0px";
        newLinkInfoElt.style.padding = "0px 0px";
        document.getElementById("linkInfo").innerHTML = "";
        initLinkAdder();
    }, 2000);
    
    initLinkAdder();
}

function addLinkToList(newLink) {
    listeLiens.push(newLink);
    newLink = creerElementLien(listeLiens[listeLiens.length - 1]);
    contenu.appendChild(newLink);
}

// Add a DOM element for each link of the links list
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

// Add a div container for an "add link" feature
var linkBuilderElt = document.createElement("div");
linkBuilderElt.id = "linkBuilder";
linkBuilderElt.style.paddingBottom = "20px";
document.body.insertBefore(linkBuilderElt, document.getElementById("contenu"));

// Add a div to display a message in when a link has been added to the list
var newLinkInfoElt = document.createElement("div");
newLinkInfoElt.id = "linkInfo";
document.body.insertBefore(newLinkInfoElt, document.getElementById("linkBuilder"));

initLinkAdder();