var form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var article = new FormData(form);
  ajaxPost("https://oc-jswebsrv.herokuapp.com/article", article, function(
    reponse
  ) {
    var messageContainer = document.getElementById("message");
    messageContainer.textContent = "L'article a bien été ajouté.";
    setTimeout(function () {
        messageContainer.textContent = "";
    }, 5000);
  });
});