/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var content = document.body.querySelector('.content');
var lineLeft = document.createElement('div');
content.appendChild(lineLeft);
lineLeft.classList.add('line_Left');

var lineRight = document.createElement('div');
content.appendChild(lineRight);
lineRight.classList.add('line_Right');

function lineWalk() {
  lineRight.classList.add('line_Right_Active');
  lineLeft.classList.add('line_Left_Active');
}

window.addEventListener('load', lineWalk);

// pigmants on pageview

var canvas = document.querySelector('#canvas');
var styles = getComputedStyle(content);
var marginTop = parseFloat(styles['marginTop']);

canvas.width = content.clientWidth;
canvas.height = content.offsetHeight + marginTop * 2;
var ctx = canvas.getContext('2d');
var circle = document.querySelectorAll('.circle');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.fillStyle = 'rgba(49, 188, 159, 1)';

var numberOfParticles = 1; //number of partices
var circlesDrawn = [];
var pointSize = 0;

var radius = circle[0].clientWidth / 2; // radius calc
var centerX = 0;
var centerY = 0;
var position = {
  top: 0, // center_y
  left: 0, // center_x
  width: 0,
  height: 0
};

//random number function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//find position of circle img function
function circleSuround() {
  circlesDrawn.splice(0, numberOfParticles);

  var rect = this.getBoundingClientRect();

  position.top = rect.top - content.offsetTop + marginTop; // center_y
  position.left = rect.left + content.offsetLeft; // center_x
  position.width = rect.width / 2;
  position.height = rect.height / 2;

  //x positon of circle img centre
  centerX = position.left + position.width;
  //scrolling doesnt affect particle position
  centerY = position.top + position.height + window.scrollY;
  pointSize = getRandomInt(3, 5);
}

//check if circle can be drawn function and set up
function drawCircle() {
  if (circlesDrawn.length === numberOfParticles) {
    for (var i = 0; i < numberOfParticles; i++) {
      drawPoint(circlesDrawn[i].angle, 1); /* to edit distance of particle from img*/
    }
  } else {
    for (var _i = 0; _i < numberOfParticles; _i++) {
      circlesDrawn.push({
        angle: getRandomInt(0, 360),
        distance: 0.5
      });
      return;
    }
  }
}

//draw pigments function
function drawPoint(angle, distance) {
  var x = centerX + radius * Math.cos(-angle * Math.PI / 180) * distance;
  var y = centerY + radius * Math.sin(-angle * Math.PI / 180) * distance;
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
  ctx.fill();
}

//move pigments function
function movePoints() {
  for (var i = 0; i < circlesDrawn.length; i++) {
    circlesDrawn[i].angle++;

    if (circlesDrawn[i].angle > 360) {
      circlesDrawn[i].angle = 0;
    } else {
      circlesDrawn[i].angle++;
    }
    /* if (i % 2 == 0) {
      circlesDrawn[i].angle--;  // multiply circles moving at diffrent speeds and direction
      console.log(circlesDrawn[i]);
    } */
  }
}

var iD; //variable for cancelAnimation

//put everything together and clear canvas and redraw
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movePoints();
  drawCircle();
  iD = requestAnimationFrame(gameLoop);
}

function cancelAnimation() {
  window.cancelAnimationFrame(iD);
}

// there needs to be a maximum amount of particles on the page

for (var i = 0; i < circle.length; i++) {
  circle[i].addEventListener('mouseover', circleSuround);
  circle[i].addEventListener('mouseover', gameLoop);
  circle[i].addEventListener('mouseleave', cancelAnimation);
}

/***/ })
/******/ ]);
//# sourceMappingURL=pigments.js.map