var linkAElt = document.getElementById("searchA");
var linkBElt = document.getElementById("searchB");
var linkCElt = document.getElementById("searchC");
var linkDElt = document.getElementById("searchD");
var linkEElt = document.getElementById("searchE");

var resultsElt = document.getElementById("results");

function showWords(e) {
    resultsElt.innerHTML = "";
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + e.target.textContent, function (reponse) {
        var words = JSON.parse(reponse);
        if (words.length > 0) {
            words.forEach(function (word) {
                var wordContainerElt = document.createElement("div");

                var wordElt = document.createElement("div");
                wordElt.textContent = word.term;
                wordElt.classList.add("word");
                var definitionElt = document.createElement("div");
                definitionElt.textContent = word.definition;
                definitionElt.classList.add("definition");

                wordContainerElt.appendChild(wordElt);
                wordContainerElt.appendChild(definitionElt);
                results.appendChild(wordContainerElt);
            });
        } else {
            var messageElt = document.createElement("div");
            messageElt.textContent = "Aucun mot trouvé";
            results.appendChild(messageElt)
        }
    });
};

linkAElt.addEventListener("click", showWords);
linkBElt.addEventListener("click", showWords);
linkCElt.addEventListener("click", showWords);
linkDElt.addEventListener("click", showWords);
linkEElt.addEventListener("click", showWords);