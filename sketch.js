//variáveis da bolinha
let yBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis da raquete 
let xRaquete = 5;
let raqueteComprimento = 10;
let raqueteAltura 90;
let raqueteAltura = 90;

// placar do jogo 
let meusPontos = 0;
let pontosDooponente = 0;


// sons do jogo 
let raquetada;
let pontp;
let trilha;

let colidiu = false;

function setup() {
   createCanvas (600, 400);
   trilha.loop();
}

function draw () {
  background(0);
  mostrarBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar()
  marcaPonto();
}
function movimentaBolinha
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  stroke(255)
  texteAlign(CENTER);
  texteSize(16);
  fill(color(255,140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontois 140, 0));
  
  
  
  text(pontosDoOponente, 470, 26);
  
  
  
  
  
 
function marcaPonto() {
  if (xBolinha > 590)   {
      meusPontos += 1;
      ponto. play();
  }
  if  (xBolinha < 10) {
       pontosDooponente  += 1;
       ponto.play();
  }
}
  
  
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}