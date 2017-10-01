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
  })

  for (var i = 0; i < particles.length; i++) {
    ctx.beginPath();
    ctx.globalAlpha = particles[i].opacity;
    ctx.arc(particles[i].x, particles[i].y, particles[i].radius,false, Math.PI * 2, false);
    ctx.globalAlpha = particles[i].opacity;
    ctx.fill();
    particles[i].drawn = true;
    console.log(particles[i].y);
  }
};

//center x = position.left
//center y = position.top
var radius = 116 //do radius calc instead
//var point_size = getRandomInt(5,10);
var center_x = 0;
var center_y = 0;
var font_size = "20px";

function circleSuround(e) {

  var rect = this.getBoundingClientRect();
  console.log(rect);

  var position = {
    top: rect.top - content.offsetTop, //center_y
    left: rect.left + content.offsetLeft, // center_x
    width: rect.width / 2,
    height: rect.height / 2
  }

  ctx.beginPath();
  ctx.arc(position.left + position.width, position.top + position.height, 116, 0, 2 * Math.PI);
  ctx.stroke();
  center_x = position.left + position.width;
  center_y = position.top + position.height;
  drawPoint(90, 2, "A");
  //drawPoint(getRandomInt(0,180),1,"C");
}


function drawPoint(angle, distance, label) {
  var x = center_x + radius * Math.cos(-angle * Math.PI / 180) * distance;
  var y = center_y + radius * Math.sin(-angle * Math.PI / 180) * distance;
  var point_size = getRandomInt(5, 10); //random point size
  ctx.beginPath();
  ctx.arc(x, y, point_size, 0, 2 * Math.PI);
  ctx.fill();

  ctx.font = font_size;
  ctx.fillText(label, x + 10, y);
}

// circles need to position themselfs around images when hovered overflow
//canvas needs to clear when scrolled
// there needs to be a maximum amount of particles on the page
canvas.addEventListener('mousemove', draw);
circle.forEach((x) => x.addEventListener('mouseover', circleSuround));
