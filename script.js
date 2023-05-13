let frase2 = ["YES", "NO"];
window.onload = function () {
    document.getElementById("frase").innerText = frase2[Math.trunc(Math.random() * 2)];
}