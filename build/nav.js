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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nav = document.querySelector('.nav');
var menu = document.querySelector('#menu');
var menuOverlay = document.querySelector('.menu-overlay');
var menuLineone = document.querySelector('.menu-line_one');
var menuLinetwo = document.querySelector('.menu-line_two');
var menuLinethree = document.querySelector('.menu-line_three');
var itemText = ['propugnent', 'facultates', 'persuadeor', 'affectibus'];

/* create overlay - add and remove classes*/
function overlay() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menuOverlay.classList.remove('open');
    menuOverlay.innerHTML = '';
    escapeButton();
  } else {
    menu.classList.add('open');
    menuOverlay.classList.add('open');
    escapeButton();
    for (var i = 0; i < itemText.length; i++) {
      addText(itemText[i]);
    }
  }
}

/* adds + removes classes to nav elements children on hover event*/
function navHover() {
  var navChildren = nav.children;
  if (navChildren[0].classList.contains('navHover')) {
    for (var i = 0; i < navChildren.length; i++) {
      navChildren[i].classList.remove('navHover');
    }
  } else {
    for (var j = 0; j < navChildren.length; j++) {
      navChildren[j].classList.add('navHover');
    }
  }
}

/*adds list items to menuOverlay*/
function addText(i) {
  menuOverlay.innerHTML += '\n    <li>\n      <h2>\n        ' + i + '\n      </h2>\n    </li>\n    ';
}

/* turns hamburger to X - adds + removes classes to menuLines */
function escapeButton() {
  if (menuLineone.classList.contains('open')) {
    menuLineone.classList.remove('open');
    menuLinetwo.classList.remove('open');
    menuLinethree.classList.remove('open');
  } else {
    menuLineone.classList.add('open');
    menuLinetwo.classList.add('open');
    menuLinethree.classList.add('open');
  }
}

function navOverfooter() {
  var contactSection = document.querySelector('.contact_section');
  var contactRect = contactSection.getBoundingClientRect();

  if (contactRect.top < nav.offsetHeight / 4) {
    nav.style.backgroundColor = 'rgba(49, 188, 159, 1)';
  } else {
    nav.style.backgroundColor = '#333333';
  }
}

nav.addEventListener('click', overlay);
nav.addEventListener('mouseenter', navHover);
nav.addEventListener('mouseleave', navHover);
window.addEventListener('scroll', navOverfooter);

/***/ })
/******/ ]);
//# sourceMappingURL=nav.js.map