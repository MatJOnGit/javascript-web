var form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var testimony = {
        pseudo: e.target.elements.pseudo.value,
        evaluation: e.target.elements.rating.value,
        message: e.target.elements.comment.value
    };
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", testimony, function(reponse) {
        var messageContainer = document.getElementById("message");
        messageContainer.textContent = "Témoignage ajouté.";
        setTimeout(function () {
            messageContainer.textContent = "";
        }, 4000);
    },
    true);
});