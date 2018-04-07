/* This program is a version of the lexique program of the chapter that displays letters spans within the program, instead of doing it through html file */

var lettersElts = ["A", "B", "C", "D", "E"];
var resultsElt = document.getElementById("results");
var lettersContainer = document.getElementById("letters");

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
            results.appendChild(document.createTextNode("Aucun mot trouvé"))
        }
    });
};


lettersElts.forEach(function (letter) {
    var letterElt = document.createElement("span");
    letterElt.textContent = letter;
    letterElt.classList.add("letter");
    letterElt.addEventListener("click", showWords);
    lettersContainer.appendChild(letterElt);
    lettersContainer.appendChild(document.createTextNode(" | "));
});
lettersContainer.appendChild(document.createTextNode(" ..."));