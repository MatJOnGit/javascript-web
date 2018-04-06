ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    
    var paintingTable = document.getElementById("tableaux");
    
    var trHeader = document.createElement("tr");
    paintingTable.appendChild(trHeader);
    
    var masterPieceHeader = document.createElement("td");
    masterPieceHeader.textContent = "Nom";
    trHeader.appendChild(masterPieceHeader);
    var yearHeader = document.createElement("td");
    yearHeader.textContent = "Année";
    trHeader.appendChild(yearHeader);
    var painterNameHeader = document.createElement("td");
    painterNameHeader.textContent = "Auteur";
    trHeader.appendChild(painterNameHeader);
    
    tableaux.forEach(function (tableau) {
        var trPainting = document.createElement("tr");
        paintingTable.appendChild(trPainting);
        
        var masterPiece = document.createElement("td");
        masterPiece.textContent = tableau.titre;
        trPainting.appendChild(masterPiece);
        var year = document.createElement("td");
        year.textContent = tableau.annee;
        trPainting.appendChild(year);
        var painterName = document.createElement("td");
        painterName.textContent = tableau.peintre;
        trPainting.appendChild(painterName);
    })
});