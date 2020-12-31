// preset scroll position for contents
var flagPos = [
    0.01,
    0.06,
    0.12,
    0.18,
    0.24,
    0.3,
    0.36,
    0.42,
    0.48,
    0.54,
    0.6,
    0.66,
    0.72,
    0.78,
    0.84
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
    console.log(`We got ${pageHgt}`);
}
