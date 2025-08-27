let isDay = true;

function setup() {

  createCanvas(800, 400);

}

function draw() {

  background(isDay ? color(135, 206, 235) : color(20, 24, 82));

  drawBackground();

  drawSunOrMoon();

  drawField();

  drawCity();

  

  if (!isDay) {

    drawStars();

  }

}

function drawBackground() {

  noStroke();

  

  // Linha divisória

  stroke(0);

  strokeWeight(2);

  line(width / 2, 0, width / 2, height);

  noStroke();

}

function drawSunOrMoon() {

  let x = mouseX;

  let y = 80;

  fill(isDay ? color(255, 204, 0) : color(240));

  ellipse(x, y, 60, 60);

}

function drawField() {

  // Grama

  fill(34, 139, 34);

  rect(0, height / 2, width / 2, height / 2);

  

  // Árvore

  fill(139, 69, 19);

  rect(100, 200, 20, 60);

  fill(34, 139, 34);

  ellipse(110, 180, 60, 60);

  

  // Vaca (simples)

  fill(255);

  rect(180, 300, 40, 30);

  fill(0);

  ellipse(185, 310, 5, 5);

  ellipse(200, 310, 5, 5);

}

function drawCity() {

  // Asfalto

  fill(100);

  rect(width / 2, height / 2, width / 2, height / 2);

  

  // Prédio

  fill(50);

  rect(500, 150, 60, 150);

  fill(255, 255, 0);

  for (let i = 0; i < 3; i++) {

    rect(510, 160 + i * 40, 10, 20);

    rect(530, 160 + i * 40, 10, 20);

  }

  

  // Carro

  fill(255, 0, 0);

  rect(600, 330, 50, 20);

  fill(0);

  ellipse(610, 350, 10);

  ellipse(640, 350, 10);

}

function drawStars() {

  fill(255);

  for (let i = 0; i < 50; i++) {

    let x = random(width);

    let y = random(height / 2);

    ellipse(x, y, 2, 2);

  }

}

function mousePressed() {

  isDay = !isDay;

}

