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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var width = window.innerWidth;
if (width <= 414) {
  (function createEle() {
    var circlesDiv = document.querySelector('.content');
    var spanLeft = document.createElement('span');
    var elemLeft = document.createElement('img');
    var spanRight = document.createElement('span');
    var elemRight = document.createElement('img');
    elemRight.setAttribute('height', '40');
    elemRight.setAttribute('width', '40');
    elemLeft.setAttribute('height', '40');
    elemLeft.setAttribute('width', '40');
    spanRight.appendChild(elemRight);
    spanLeft.appendChild(elemLeft);
    circlesDiv.appendChild(spanRight);
    circlesDiv.appendChild(spanLeft);
    elemRight.src = 'img/next.png';
    elemLeft.src = 'img/next.png';
    elemRight.classList.add('next-arrow');
    elemLeft.classList.add('previous-arrow');
  })();
}

var imgSrc = [];
var nextArrow = document.querySelector('.next-arrow');
var previousArrow = document.querySelector('.previous-arrow');
var circleImg = document.querySelectorAll('.circle img');
var clickCounter = 0; // track array index

if (imgSrc.length < circleImg.length) {
  // imgsrcs into array
  circleImg.forEach(function (x) {
    return imgSrc.push(x.src);
  });
}

function sliderNext() {
  // +3 = next series of imgs
  clickCounter += 3;
  circleImg[0].src = imgSrc[clickCounter];
  circleImg[1].src = imgSrc[clickCounter + 1];
  circleImg[2].src = imgSrc[clickCounter + 2];
  if (clickCounter === 9) {
    clickCounter = -3;
  }
}

function sliderPrevious() {
  if (clickCounter <= 0) {
    /** cycle backwards though imgs */
    clickCounter += 12;
  }

  clickCounter -= 3;
  circleImg[0].src = imgSrc[clickCounter];
  circleImg[1].src = imgSrc[clickCounter + 1];
  circleImg[2].src = imgSrc[clickCounter + 2];
}

nextArrow.addEventListener('click', sliderNext);
previousArrow.addEventListener('click', sliderPrevious);

/***/ })

/******/ });
//# sourceMappingURL=imageslider.js.map