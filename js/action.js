
function pageReady() {
    var titlePos = 30;
    var contPos = 60;
    var contOffset = 20;
    var i;
    $("#title").css("opacity", "100");
    $("#title").css("top", `${titlePos}%`);
    for (i=1;i<=15;i++){
        $(`#cont_${i}`).css("top", `${contPos}%`);
        contPos += contOffset;
    }
}