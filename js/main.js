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
console.log(content.clientWidth);

const circle = document.querySelectorAll('.circle');

//ctx.lineJoin = "round";
//ctx.lineCap = 'round';
//ctx.lineWidth = 5;

let particles = [];

var clickX = 0;
var clickY = 0;

function draw(e) {
  particles.push({
    x: e.clientX,
    y: e.clientY,
    radius: getRandomInt(1, 10),
    opacity: Math.random() * 1 + 0,
    drawn: false
  });

  for (var i = 0; i < particles.length; i++) {
    ctx.beginPath();
    ctx.globalAlpha = particles[i].opacity;
    ctx.arc(
      particles[i].x, particles[i].y, particles[i].radius,
      false, Math.PI * 2, false);
    ctx.globalAlpha = particles[i].opacity;
    ctx.fill();
    particles[i].drawn  = true;
    console.log(particles[i].y);

  }

}

function circleSuround(e) {
  var rect = this.getBoundingClientRect();
  console.log(rect);
  var position = {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
    width: rect.width / 2 + rect.width,
    height: rect.height / 2 + rect.height

  };
  //x.x = position.left * Math.random()
  //x.y = position.top * Math.random()





  for (var i = 0; i < particles.length; i++) {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.globalAlpha = particles[i].opacity;
    ctx.arc(
      position.width, position.height, particles[i].radius,
      false, Math.PI * 2, false);
    ctx.globalAlpha = particles[i].opacity;
    ctx.fill();
    clearCircles()
  }
  console.log(position.top, position.left);
}

function clearCircles() {
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].drawn) {
      particles[i].opacity - 1
    }
  }

}

canvas.addEventListener('mousemove', draw);
circle.forEach((x) => x.addEventListener('mouseover', circleSuround));
