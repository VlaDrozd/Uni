
const oSpace = document.getElementById("space");
const oEarth = document.getElementById("earthId");

let iEarthInterval = 20;
let iMoonInterval = 10;
let earthID = 10;
let moonID = 10;

let iEarthAngle;
let iEarthRadius;
let iEarthXBegin;
let iEarthYBegin;

let iMoonAngle;
let iMoonRadius;
let iMoonXBegin;
let iMoonYBegin;

function startMovement() {
    moveEarth();
    moveMoon();
}

function moveEarth() {
    iEarthAngle = 0;
    iEarthRadius = 250;
    iEarthXBegin = oSpace.offsetWidth / 2.2;
    iEarthYBegin = oSpace.offsetHeight / 2;

    earthID = setInterval(rotateEarth, iEarthInterval);
    if (iEarthInterval > 0) {
        iEarthInterval -= 5;
    }
}

function rotateEarth() {
    let iRad = iEarthAngle * Math.PI / 180;    
    oEarth.style.left = (iEarthXBegin + iEarthRadius * Math.sin(iRad)) + 'px';
    oEarth.style.top = (iEarthYBegin - iEarthRadius * Math.cos(iRad)) + 'px';
    iEarthAngle += 1;
    if (iEarthAngle >= 360) iEarthAngle = 0;
}

function moveMoon() {
    iMoonAngle = 0;
    iMoonRadius = 100;
    iMoonXBegin = oEarth.offsetWidth / 2;
    iMoonYBegin = oEarth.offsetHeight / 2;

    moonID = setInterval(rotateMoon, iMoonInterval);
    if (iMoonInterval > 0) {
        iMoonInterval -= 5;
    }
}

function rotateMoon() {
    let iRad = iMoonAngle * Math.PI / 180;
    const oEarth = document.getElementById("moonId");
    oEarth.style.left = (iMoonXBegin + iMoonRadius * Math.sin(iRad)) + 'px';
    oEarth.style.top = (iMoonYBegin - iMoonRadius * Math.cos(iRad)) + 'px';
    iMoonAngle += 1;
    if (iMoonAngle >= 360) iMoonAngle = 0;
}