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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var windowWidth = window.innerWidth;

//$(document).ready(() => {
//});

var movingEl = $('.about_section');
var fixedEl = $('.contact_section');

/// 11;

// find top of both else find diffence between them so as user scrolls down difference decreases

function parallax() {
  var yPos = $(window).scrollTop();
  var topOfEl = movingEl.offset().top; //top of el
  var viewPort = $(window).height() + movingEl.offset().top; // everything u can see

  var bottomOfEl = Math.round(movingEl.outerHeight(true) + topOfEl);
  var topOfFixed = fixedEl.offset().top;
  var scroll = yPos - (topOfFixed - topOfEl);
  var bottomOfScreen = yPos + $(window).height(); //bottom of screen in view
  var scrolledHeight = window.pageYOffset;

  console.log(scrolledHeight);
  console.log(bottomOfEl + 'bottomOfEl');
  console.log(topOfEl);
  console.log(bottomOfScreen + 'bottomOfScreen');

  if (bottomOfScreen > bottomOfEl) {
    movingEl.css({ transform: 'translateY(' + Math.round(bottomOfScreen - bottomOfEl) + 'px)' });
    console.log('!!!!!');
  } else {
    movingEl.css({ transform: 'translateY(0px)' });
  }

  //  requestAnimationFrame(parallax);
}

window.addEventListener('scroll', parallax);

/***/ })

/******/ });
//# sourceMappingURL=scroll.js.map