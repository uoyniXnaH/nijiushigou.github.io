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
    0.56,
    0.61,
    0.66,
    0.72,
    0.72
];

var pageHgt;
document.addEventListener("scroll", scrollCallback);

function scrollCallback() {
    var posAbs = window.scrollY;
    
    var posRel = posAbs / pageHgt;
    for (i=1;i<=14;i++) {
        if (posRel>=flagPos[i-1]) {
            $(`#cont_${i}`).css("opacity", "1");
            $(`#sub_${i}`).css("opacity", "1");
            $(`#img_${i}`).css("opacity", "0.6");
        }
    }
    if (posRel>=flagPos[14]) {
        $("#cont_15").css("opacity", "1");
        $("#sub_15").css("opacity", "1");
        $("#img_15").css("opacity", "1");
    }
}

function pageReady() {
    var titlePos = 10;
    var secPos = 30;
    var contPos = 70;
    var contOffset = 30;
    var i;
    $("#title").css("top", `${titlePos}%`);
    $("#title").css("opacity", "1");
    $("#cont_1").css("top", `${secPos}%`);
    for (i=2;i<=15;i++) {
        $(`#cont_${i}`).css("top", `${contPos}%`);
        contPos += contOffset;
    }
    $("#cmt").css("top", `${contPos}%`);
    $("#cmt").css("opacity", "1");

    // get page height after layout is completed
    pageHgt = $(document.documentElement.scrollHeight)[0];
}
