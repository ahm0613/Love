var prom = " ♡♥미니야 사랑해♥♡ ";
var speed = 500;
var divt = document.getElementById("div");
var tim = setInterval("textLeft()", eval(speed));
divt.innerHTML = prom;
function textLeft() {
    var strt = divt.innerHTML;
    var firstt = strt.substr(0, 1);
    var lastt = strt.substr(1, strt.length - 1);
    strt = lastt + firstt;
    divt.innerHTML = strt;
}