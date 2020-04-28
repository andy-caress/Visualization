var angle = 0.7853981634; // PI/4
var coef = 0.5;
var l = 300;
var branches = 1;
var steps = 6;

var angleSlider, coefSlider, lSlider, branchesSlider, stepsSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);

  angleSlider = createSlider(0, 3.1415926536, 0.7853981634, 0.05); // from 0 to PI
  angleSlider.position(20, height-175);
  coefSlider = createSlider(0, 0.75, 0.5, 0.05);
  coefSlider.position(20, height-140);
  lSlider = createSlider(50, 450, 300, 50);
  lSlider.position(20, height-105);
  branchesSlider = createSlider(1, 3, 1, 1);
  branchesSlider.position(20, height-70);
  stepsSlider = createSlider(1, 10, 6, 1);
  stepsSlider.position(20, height-35);
}

function draw() {
  background(51);

  angle = angleSlider.value();
  coef = coefSlider.value();
  l = lSlider.value();
  branches = branchesSlider.value();
  steps = stepsSlider.value();

  stroke(0);
  fill(255);
  text("angle (" + round(degrees(angleSlider.value())) + ")", 165, height-155);
  text("coeficient (" + coefSlider.value() + ")", 165, height-120);
  text("length (" + lSlider.value() + ")", 165, height-85);
  text("branches (" + branchesSlider.value() + ")", 165, height-50);
  text("steps (" + stepsSlider.value() + ")", 165, height-15);

  stroke(255);
  translate(width/2, height-200);
  branch(l, steps);
}

function branch(len, s) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if(s > 0) {
    var bcoef = angle/branches;

    for (var i = 1; i <= branches; i++) {
      push();
      rotate(i*bcoef);
      branch(len*coef, s-1);
      pop();

      push();
      rotate(-i*bcoef);
      branch(len*coef, s-1);
      pop();
    }
  }
}
