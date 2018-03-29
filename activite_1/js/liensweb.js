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

// TODO : compléter ce fichier pour ajouter les liens à la page web

listeLiens.forEach(function (lien) {
    //Création des balises ainsi que des attributs, contenus et propriétés CSS appliqués à celles-ci
    var lienElt = document.createElement("div");
    lienElt.classList.add("lien");

    var aElt = document.createElement("a");
    aElt.href = lien.url;
    aElt.style.textDecoration = "none";
    aElt.style.color = "#428bca";

    var strongElt = document.createElement("strong");
    strongElt.textContent = lien.titre;

    var adresseElt = document.createElement("span");
    adresseElt.textContent = lien.url;
    adresseElt.style.marginLeft = "4px";

    var auteurElt = document.createElement("span");
    auteurElt.textContent = "Ajouté par " + lien.auteur;
    
    var brElt = document.createElement("br");
    
    //Création de la hiérarchie entre les éléments
    lienElt.appendChild(aElt);
    aElt.appendChild(strongElt);
    lienElt.appendChild(adresseElt);
    lienElt.appendChild(brElt);
    lienElt.appendChild(auteurElt);
    
    //Affichage de la balise <div> contenant les infos
    document.getElementById("contenu").appendChild(lienElt);
});