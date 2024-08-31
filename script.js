window.onload = function(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//desenhar quadrado

function criarQuadrado(x, y, largura, cor){

    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, largura);

}
function desenharQuadrado() {

const tamanhodoQuadrado = 50;
const distancia = 5;
const larguradoCanvas = canvas.width;
let x = 0;

while (x + tamanhodoQuadrado <= larguradoCanvas) {
    criarQuadrado(x, 0, tamanhodoQuadrado, '#00f');
    x += tamanhodoQuadrado + distancia;
}

}
function criarCirculo() {

    
ctx.beginPatch();
ctx.arc(250,100,50,0,2*matchMedia.PI);
ctx.fillStyle = '#00f';
ctx.fll();
ctx.closePath();



}
function desenharCirculo(){



}

desenharQuadrado(); 

}
