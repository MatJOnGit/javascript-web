// Ajoute un li contenant un dessert entré par l'utilisateur et ajoute un eventListener à celui-ci qui permet de modifier cet élément

function ajoutDessert() {
    var nouveauDessert = prompt("Entrez un dessert à ajouter à la liste :");
    //console.log("Dessert ajouté : " + nouveauDessert); // test de l'entrée dans la fonction et de la saisie utilisateur
    
    var liElt = document.createElement("li");
    liElt.textContent = nouveauDessert;
    
    //Création d'un nouveau li uniquement si une entrée est faite par l'utilisateur
    if (nouveauDessert !== null) {
        document.getElementById("desserts").appendChild(liElt); // afficher à l'écran un nouvel li ayant comme paramètre le textContent indiqué par l'utilisateur
    }
    
    //Ajout d'un gestionnaire pour l'événement click sur les éléments de type li pour modifier l'élément cliqué
    liElt.addEventListener("click", modificationDessert);
}

function modificationDessert() {
    var dessert = prompt("Quel dessert souhaitez-vous ajouter à la place ?");
    console.log(dessert);
    //Remplacement du textContent du li par la variable dessert
    //...
}


var ulElt = document.getElementsByTagName("ul");
var boutonAjoutElt = document.querySelector("button");
// Ajout d'un gestionnaire pour l'événement click sur le bouton
boutonAjoutElt.addEventListener("click", ajoutDessert);
