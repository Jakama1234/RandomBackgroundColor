function funB() {
    var a = document.getElementById("body");
    var randNum1 = Math.floor(Math.random() * 255);
    var randNum2 = Math.floor(Math.random() * 255);
    var randNum3 = Math.floor(Math.random() * 255);
    a.style.backgroundColor = "rgb(" + randNum1 + "," + randNum2 + "," + randNum3 + ")"
}