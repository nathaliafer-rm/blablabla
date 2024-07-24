raquetada.play();
}
}

function verificaColisaoRaquete(x, y){
colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
if (colidiu) {
  velocidadeXBolinha *= -1;
  raquetada.play();
}
}

function movimentaRaqueteOponente(){
if (keyIsDown(UP_ARROW)){
  yRaqueteOponente -= 10;
   }
if (keyIsDown(DOWN_ARROW)){
  yRaqueteOponente += 10;
}
}

function incluiPlacar(){
stroke(255,218,185);
textAlign(CENTER);
textSize(16);
fill(color(219,112,147));
rect(150, 10, 40, 20);
fill(255);
text(meusPontos, 170, 26);
fill(color(219,112,147));
rect(450, 10, 40, 20);
fill(255);
text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
if (xBolinha > 585){
meusPontos += 1;
ponto.play();
}
if (xBolinha < 15){
pontosDoOponente += 1;
ponto.play();
}
}
