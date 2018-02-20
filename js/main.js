// pigmants on pageview

const canvas = document.querySelector('#canvas');
const styles = getComputedStyle(content);
const marginTop = parseFloat(styles['marginTop']);


console.log(content.offsetHeight);
const ctx = canvas.getContext('2d');
ctx.canvas.width = content.clientWidth;
ctx.canvas.height = content.offsetHeight + marginTop * 2;
const circle = document.querySelectorAll('.circle');

var pig; // for new instance

const radius = circle[0].clientWidth / 2; // radius calc

// random number function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var angle = getRandomInt(0, 360);

const position = {
  top: 0, // center_y
  left: 0, // center_x
  width: 0,
  height: 0,
};

const area = {
  width: canvas.width = content.clientWidth,
  height: canvas.height = content.offsetHeight + marginTop * 2,
  start() {
    this.interval = requestAnimationFrame(gameLoop);
  },
  clear(x, y) {
    ctx.clearRect(x||0, y||0, this.width, this.height);
  },
  stop() {
    this.stopInterval = window.cancelAnimationFrame(this.interval);
  },
};

function Pigment(X, Y) {
  this.pointSize = 5;
  this.draw = function draw(distance) {
    this.ang = angle > 360 ? angle = 0 : angle += 2;
    this.x = X; //  finds center X and Y of image
    this.y = Y;
    // X and Y paths around circle
    let xPathAroundImg = X + radius * Math.cos(-angle * Math.PI / 180) * distance;
    let yPathAroundImg = Y + radius * Math.sin(-angle * Math.PI / 180) * distance;
    // console.log(X, Y, radius, angle + ' obj');
    ctx.fillStyle = 'rgba(49, 188, 159, 1)';
    ctx.beginPath();
    ctx.arc(xPathAroundImg, yPathAroundImg, this.pointSize, 0, 2 * Math.PI);
    ctx.fill();
  };
}

function circleNew() { // uses rect to get center of image, creates obj then calls gameloop
  const rect = this.getBoundingClientRect();
  position.top = rect.top - content.offsetTop + marginTop; // center_y
  position.left = rect.left; // center_x
  position.width = rect.width / 2;
  position.height = rect.height / 2;


  let centerX = rect.left + position.width; // x positon of circle img centre
  let centerY = position.top + position.height + window.scrollY; // scrolling doesnt affect particle position

  pig = new Pigment(centerX, centerY);
  gameLoop();
}

// put everything together and clear canvas and redraw
function gameLoop() {
  area.clear(pig.xPathAroundImg, pig.yPathAroundImg); // clear canvas before repaint
  area.start(); //  start requestAnimationFrame(gameLoop)
  pig.draw(0.9); // takes in number for distance
}

function cancelAnimation() {
  area.stop(); // stop requestAnimationFrame(gameLoop)
  area.clear(); // clear canvas
}

for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('mouseenter', circleNew);
  circle[i].addEventListener('mouseleave', cancelAnimation);
}
