
const content = document.body.querySelector('.content');
const lineLeft = document.createElement('div');
content.appendChild(lineLeft);
lineLeft.classList.add('line_Left');

const lineRight = document.createElement('div');
content.appendChild(lineRight);
lineRight.classList.add('line_Right');

function lineWalk() {
  lineRight.classList.add('line_Right_Active');
  lineLeft.classList.add('line_Left_Active');
}

window.addEventListener('load', lineWalk);

// pigmants on pageview

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const canvas = document.querySelector("#canvas");
canvas.width = content.clientWidth;
canvas.height = content.clientHeight;
const ctx = canvas.getContext("2d");

ctx.lineJoin = "round";
ctx.lineCap = 'round';
ctx.lineWidth = 5;

let particles = [];

var clickX = 0;
var clickY = 0;

function draw(e){
  particles.push({
    x: e.clientX,
    y: e.clientY,
    radius: getRandomInt(1, 10),
    opacity: Math.random()* 0.5 + 0,
    number: 5,
    distance: getRandomInt(0, 100)
  });

  for (var i = 0; i < particles.length; i++) {
    ctx.beginPath();
     ctx.globalAlpha = particles[i].opacity;
     ctx.arc(
       particles[particles.length / 1.05].x, particles[particles.length / 1.05].y, particles[particles.length / 1.05].radius,
       false, Math.PI * 2, false);
       ctx.globalAlpha = particles[i].opacity;
     ctx.fill();


}


}

canvas.addEventListener('mousemove', draw);
