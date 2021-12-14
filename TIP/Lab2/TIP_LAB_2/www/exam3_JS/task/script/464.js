let oAdSet = document.getElementsByTagName("ADLIST");
oAdSet.current = 0;
let oNextImage = document.createElement("IMG");

function preLoad() {
    oNextImage.onerror = preLoad;
    oNextImage.src = oAdSet[oAdSet.current].getAttribute("src");
    oNextImage.duration = oAdSet[oAdSet.current].getAttribute("duration");
    if (null === oNextImage.duration) {
        oNextImage.duration = 2000; 
    }
    if (++oAdSet.current === oAdSet.length) {
        oAdSet.current = 0; 
    }
}

function skipImage() {
    if (oNextImage.complete) {
        document.all.ad.src = oNextImage.src;
        let duration = oNextImage.duration;
        preLoad();
        window.tm = setTimeout(skipImage, duration);
    }
    else {
        window.tm = setTimeout(skipImage, 10);
    }        
}

preLoad();