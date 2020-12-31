// preset scroll position for contents
var flagPos = [
    0.06,
    0.14,
    0.2,
    0.26,
    0.32,
    0.38,
    0.44,
    0.5,
    0.56,
    0.62,
    0.68,
    0.74,
    0.8,
    0.86,
    0.92
];

var pageHgt = document.documentElement.scrollHeight;
document.addEventListener("scroll", scrollCallback);

function scrollCallback() {
    var posAbs = window.scrollY;
    
    var posRel = posAbs / pageHgt;
    for (i=1;i<=15;i++) {
        if (posRel>=flagPos[i-1]) {
            $(`#cont_${i}`).css("opacity", "100");
            console.log(`On ${posAbs} of ${pageHgt}`);
        }
    }
}

function pageReady() {
    var titlePos = 10;
    var secPos = 30;
    var contPos = 70;
    var contOffset = 30;
    var i;
    $("#title").css("top", `${titlePos}%`);
    $("#title").css("opacity", "100");
    $("#cont_1").css("top", `${secPos}%`);
    for (i=2;i<=15;i++) {
        $(`#cont_${i}`).css("top", `${contPos}%`);
        contPos += contOffset;
    }
    $("#cmt").css("top", `${contPos}%`);
    $("#cmt").css("opacity", "100");
}
