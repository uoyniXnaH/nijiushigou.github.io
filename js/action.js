// preset scroll position for contents
var flagPos = [
    0.01,
    0.03,
    0.09,
    0.15,
    0.21,
    0.27,
    0.33,
    0.39,
    0.45,
    0.51,
    0.57,
    0.63,
    0.69,
    0.75,
    0.79
];

var pageHgt;
document.addEventListener("scroll", scrollCallback);

function scrollCallback() {
    var posAbs = window.scrollY;
    
    var posRel = posAbs / pageHgt;
    for (i=1;i<=15;i++) {
        if (posRel>=flagPos[i-1]) {
            $(`#cont_${i}`).css("opacity", "100");
            $(`#sub_${i}`).css("opacity", "100");
            $(`#img_${i}`).css("opacity", "100");
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

    // get page height after layout is completed
    pageHgt = $(document.documentElement.scrollHeight)[0];
}
