// TODO : écrire la fonction compterElements
function infosLiens () {
    // Compter le nombre de liens dans la page web
    var nombreLiens = document.querySelectorAll("a").length;
    //var nombreLiens = document.getElementsByTagName("a").length;
    console.log("Il y a " + nombreLiens + " liens dans la page web");
    // Afficher le premier et dernier liens de la page web
    var liens = document.getElementsByTagName("a"); // Stock toutes balises <a> dans un tableau liens
    console.log(liens[0].getAttribute("href")); // Affiche l'attribut href de la première balise stockée dans le tableau 'liens'
    console.log(liens[nombreLiens - 1].getAttribute("href")); // Affiche l'attribut href de la dernière balise stockée dans le tableau 'liens'
}
    
function possede(instrument, typeInstrument) {
    if (document.querySelectorAll("#" + instrument).length > 0) { // teste la présence de l'instrument dans les ID du fichier HTML
    //if (document.getElementById(instrument) !== null) {
        var classesInstrument = document.getElementById(instrument).classList;
        if (document.getElementById(instrument).classList.contains(typeInstrument)) {
            console.error(true);
        } else {
            console.error(false);
        }
    } else {
        console.log("Aucun élément ne possède l'identifiant " + instrument);
    }
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur