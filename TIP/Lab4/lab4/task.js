function loadGoods() {
    let oXhr = new XMLHttpRequest();
    oXhr.open('GET', '../data/data.txt');
    oXhr.send();

    oXhr.onload = function () {
        showGoods(oXhr.response);
    };

    oXhr.onerror = function () {
        alert(oXhr.status + ': ' + oXhr.statusText);
    };
}

function showGoods(sData) {
    const oTable = document.getElementById("goodsTable");
    let aDataRows = sData.split('\n');
    aDataRows.forEach(sRow => {
        let aData = sRow.split('#');

        let oTableRow = oTable.insertRow(1);
        let oNumberCell = oTableRow.insertCell(0);
        let oNameCell = oTableRow.insertCell(1);
        let oPriceCell = oTableRow.insertCell(2);
        let oLinkCell = oTableRow.insertCell(3);

        let oLink = document.createElement("a");
        var oLinkText = document.createTextNode("подробнее...");
        oLink.appendChild(oLinkText);
        oLink.setAttribute("href", "../data/" + aData[3]);

        oNumberCell.innerHTML = aData[0];
        oNameCell.innerHTML = aData[1];
        oPriceCell.innerHTML = aData[2];
        oLinkCell.appendChild(oLink);
    });
}