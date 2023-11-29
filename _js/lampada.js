var vermelho = false;
var lamp = false;
function mudarCor() {
    var div = document.getElementById("trocarCor");
    if (vermelho) {
        div.style.backgroundColor = "blue";
        vermelho = false;
    } else {
        div.style.backgroundColor = "red";
        vermelho = true;
    }
}
function mouseDown() {
    var imagem = document.getElementById("luz").src;
    document.getElementById("luz").src = "_imagens/lampada_acesa.jpg";
}
function mouseUp() {
    var imagem = document.getElementById("luz").src;
    document.getElementById("luz").src = "_imagens/lampada_apagada.jpg";
}