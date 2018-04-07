var searchInputElm = document.getElementById("searchInput");
var searchBttnElm = document.getElementById("searchButton");
var displayArea = document.getElementById("profiles");
var formElm = document.querySelector("form");

formElm.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log(searchInputElm.value); // Retourne la valeur du champs input
    ajaxGet("https://api.github.com/users/" + searchInputElm.value, function (reponse) {
        // Récupération des données dans un tableau Javascript
        var profile = JSON.parse(reponse);
        // Effacement de l'éventuelle précédente recherche
        displayArea.innerHTML = "";
        // Récupération des données à afficher
        var profilePicture = document.createElement("img");
        profilePicture.src = profile.avatar_url;
        profilePicture.id = "photo";
        
        var profileName = document.createElement("div");
        profileName.textContent = profile.name;
        
        var profileCompany = document.createElement("div");
        profileCompany.textContent = profile.company;
        
        var profileWebsite = document.createElement("a");
        profileWebsite.textContent = profile.blog;
        profileWebsite.href = profile.blog;
        
        // Affichage des résultats
        displayArea.appendChild(profilePicture);
        displayArea.appendChild(profileName);
        displayArea.appendChild(profileCompany);
        displayArea.appendChild(profileWebsite);
        
        searchInputElm.value = "";
    });
});