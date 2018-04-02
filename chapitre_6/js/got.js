// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

function selectorFiller() {
    var houseSelector = document.getElementById("maison");
    maisons.forEach(function (house) {
        var houseElt = document.createElement("option");
        houseElt.textContent = house.nom;
        houseElt.value = house.code;
        houseSelector.appendChild(houseElt);
    });
}

function charactersListShow(charactersList) {
    var charactersListElt = document.getElementById("persos");
    charactersListElt.innerHTML = ""; // Reset the list each time the function is used
    charactersList.forEach(function (character) {
        var characterElt = document.createElement("li");
        characterElt.textContent = character;
        var charactersListElt = document.getElementById("persos");
        charactersListElt.appendChild(characterElt);
    });
}

selectorFiller();
document.getElementById("maison").addEventListener("change", function (e) {
    var houseCode = e.target.value;
    var houseCharacters = getPersonnages(houseCode); // Convert the selected house into a list of characters
    charactersListShow(houseCharacters);
});