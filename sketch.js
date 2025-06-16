let frutas;//variaveis para os alimentos
let vegetais;
let proteinas;
let graos;
let xFrutas, yFrutas;
let xVegetais, yVegetais;
let xProteinas, yProteinas;
let xGraos, yGraos;

// Cores para os alimentos (apenas para visualização)
let corFrutas = '#FFD700'; // Amarelo/Dourado
let corVegetais = '#228B22'; // Verde floresta
let corProteinas = '#B0C4DE'; // Azul acinzentado (carne, feijão)
let corGraos = '#D2B48C'; // Marrom claro (pão, arroz)

// Status do prato
let temFruta = false;
let temVegetal = false;
let temProteina = false;
let temGrao = false;

function setup() {
  createCanvas(800, 600);
  background(240); // Cor de fundo suave

  // Posições para os botões/áreas de cada alimento
  xFrutas = 100; yFrutas = 500;
  xVegetais = 250; yVegetais = 500;
  xProteinas = 400; yProteinas = 500;
  xGraos = 550; yGraos = 500;
}

function draw() {
  background(240); // Limpa o fundo a cada frame

  // Desenha o prato
  fill(255); // Branco para o prato
  stroke(150); // Borda cinza
  ellipse(width / 2, height / 2, 300, 300); // O prato é um círculo grande

  // Desenha os "alimentos" no prato se eles foram adicionados
  noStroke();
  if (temFruta) {
    fill(corFrutas);
    ellipse(width / 2 - 80, height / 2 - 80, 70, 70); // Desenha uma fruta
  }
  if (temVegetal) {
    fill(corVegetais);
    rect(width / 2 + 20, height / 2 - 90, 60, 60); // Desenha um vegetal
  }
  if (temProteina) {
    fill(corProteinas);
    triangle(width / 2 - 90, height / 2 + 50,
             width / 2 - 30, height / 2 + 50,
             width / 2 - 60, height / 2 + 10); // Desenha uma proteína (triângulo)
  }
  if (temGrao) {
    fill(corGraos);
    ellipse(width / 2 + 70, height / 2 + 70, 60, 40); // Desenha grãos (elipse)
  }

  // Desenha os botões/áreas para adicionar alimentos
  drawFoodOption(xFrutas, yFrutas, 'Frutas', corFrutas);
  drawFoodOption(xVegetais, yVegetais, 'Vegetais', corVegetais);
  drawFoodOption(xProteinas, yProteinas, 'Proteínas', corProteinas);
  drawFoodOption(xGraos, yGraos, 'Grãos', corGraos);

  // Mensagem de incentivo
  fill(50);
  textAlign(CENTER, TOP);
  textSize(24);
  text("Monte seu prato saudável!", width / 2, 30);

  // Mensagem de "Prato Completo!"
  if (temFruta && temVegetal && temProteina && temGrao) {
    fill(0, 150, 0); // Verde para a mensagem
    textSize(36);
    text("Prato Equilibrado! 🥳", width / 2, height - 140);
  } else {
    fill(100);
    textSize(18);
    text("Clique nos alimentos para adicionar ao prato.", width / 2, height - 140);
  }
}

// Função auxiliar para desenhar as opções de alimentos
function drawFoodOption(x, y, label, c) {
  fill(c);
  stroke(0);
  rect(x, y, 100, 40, 5); // Botão retangular com cantos arredondados
  fill(255); // Cor do texto
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, x + 50, y + 20);
}

//
function mousePressed() {
  
  // Verifica se o clique foi dentro da área de cada "botão"
  if (mouseX > xFrutas && mouseX < xFrutas + 100 && mouseY > yFrutas && mouseY < yFrutas + 40) {
    temFruta = !temFruta; // Alterna o estado
  } else if (mouseX > xVegetais && mouseX < xVegetais + 100 && mouseY > yVegetais && mouseY < yVegetais + 40) {
    temVegetal = !temVegetal;
  } else if (mouseX > xProteinas && mouseX < xProteinas + 100 && mouseY > yProteinas && mouseY < yProteinas + 40) {
    temProteina = !temProteina;
  } else if (mouseX > xGraos && mouseX < xGraos + 100 && mouseY > yGraos && mouseY < yGraos + 40) {
    temGrao = !temGrao;
  }
}