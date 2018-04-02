// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

// Empty the displayed countries list
function resetList() {
    document.getElementById("suggestions").innerHTML = "";
}

// Copy countries from listePays and matching with the character string in a second tab named displayedCountries
function filterList(entry) {
    var displayedCountries = [];
    listePays.forEach(function (country) {
        if ((country.toLowerCase()).indexOf(entry.toLowerCase()) != -1) {
            displayedCountries.push(country);
        }
    });
    return displayedCountries;
}

// Create a <div> element for each element in displayedCountries tab
function showList(countriesTab) {
    countriesTab.forEach(function (country) {
        var suggestedCountryElt = document.createElement("div");
        suggestedCountryElt.classList.add("suggestion");
        suggestedCountryElt.textContent = country;    
        document.getElementById("suggestions").appendChild(suggestedCountryElt);
        suggestedCountryElt.addEventListener("click", function(e) {
            document.getElementById("pays").value = e.target.textContent;
            resetList();
        });
    });
}

var countryInputElt = document.getElementById("pays");

countryInputElt.addEventListener("focus", function () {
    resetList();
    var displayedCountries = filterList(countryInputElt.value);
    showList(displayedCountries);
});

document.getElementById("pays").addEventListener("input", function () {
    resetList();
    var displayedCountries = filterList(countryInputElt.value);
    showList(displayedCountries);
});