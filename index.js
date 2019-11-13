/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendors~contacts~index~portfolio","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/banner/banner.js":
/*!*************************************!*\
  !*** ./src/blocks/banner/banner.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(Hammer) {const banner = document.querySelector('.banner');\nconst toggles = banner.querySelectorAll('.banner__toggle');\nconst sloganInner = banner.querySelector('.banner__slogan-inner');\nconst togglesLength = toggles.length;\nconst { forEach } = Array.prototype;\nconst touchEventDispatcher = new Hammer(banner);\nlet percentForMarginLeft = 0;\n\nconst removeActiveStateFromButtons = function removeActiveStateFromButtons() {\n  for (let i = 0; i < togglesLength; i += 1) {\n    toggles[i].classList.remove('banner__toggle_active');\n  }\n};\n\nconst setActiveStateOnButton = function setActiveButton(button) {\n  button.classList.add('banner__toggle_active');\n};\n\nconst repaintBanner = function repaintBanner(index) {\n  const left = -100 * index;\n  percentForMarginLeft = left;\n  const marginLeft = `${left}%`;\n\n  sloganInner.style.marginLeft = marginLeft;\n};\n\nconst moveSlide = function moveSlide(toggle, index) {\n  return () => {\n    removeActiveStateFromButtons();\n    setActiveStateOnButton(toggle);\n    repaintBanner(index);\n  };\n};\n\nconst setListener = function setListener() {\n  return (toggle, index) => {\n    toggle.addEventListener('click', moveSlide(toggle, index));\n  };\n};\n\nforEach.call(toggles, setListener());\n\nconst checkLeftBorder = function checkLeftBorder() {\n  if (percentForMarginLeft < -400) {\n    percentForMarginLeft = -400;\n    return;\n  }\n};\n\nconst checkRightBorder = function checkRightBorder() {\n  if (percentForMarginLeft > 0) {\n    percentForMarginLeft = 0;\n    return;\n  }\n};\n\nconst setValueForMarginLeft = function setValueForMarginLeft(value) {\n  sloganInner.style.marginLeft = `${value}%`;\n};\n\nconst getCurrentButton = function getCurrentButton(fromValue) {\n  let currentButton = Math.abs(fromValue);\n  currentButton = String(currentButton).substr(0, 1);\n  return currentButton;\n};\n\ntouchEventDispatcher.on('swipeleft', () => {\n  percentForMarginLeft -= 100;\n  checkLeftBorder();\n  setValueForMarginLeft(percentForMarginLeft);\n  removeActiveStateFromButtons();\n  setActiveStateOnButton(toggles[getCurrentButton(percentForMarginLeft)]);\n});\n\ntouchEventDispatcher.on('swiperight', () => {\n  percentForMarginLeft += 100;\n  checkRightBorder();\n  setValueForMarginLeft(percentForMarginLeft);\n  removeActiveStateFromButtons();\n  setActiveStateOnButton(toggles[getCurrentButton(percentForMarginLeft)]);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! hammerjs */ \"./node_modules/hammerjs/hammer.js\")))\n\n//# sourceURL=webpack:///./src/blocks/banner/banner.js?");

/***/ }),

/***/ "./src/blocks/latest-works/latest-works.js":
/*!*************************************************!*\
  !*** ./src/blocks/latest-works/latest-works.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(Hammer) {const slider = document.querySelector('.latest-works__slider');\nconst sliderInner = slider.querySelector('.latest-works__slider-inner');\nconst buttonLeft = document.querySelector('.arrow-button');\nconst buttonRight = document.querySelector('.arrow-button_direction_right');\nconst touchEventDispathcer = new Hammer(slider);\nlet percentForMarginLeft = 0;\n\nconst setMarginLeft = function setMarginLeft() {\n  sliderInner.style.marginLeft = `${percentForMarginLeft}%`;\n};\n\nconst checkLeftBorder = function checkLeftBorder() {\n  if (percentForMarginLeft < -400) {\n    percentForMarginLeft = -400;\n    console.log(percentForMarginLeft);\n    return;\n  }\n};\n\nconst checkRightBorder = function checkRightBrder() {\n  if (percentForMarginLeft > 0) {\n    percentForMarginLeft = 0;\n    return;\n  }\n};\n\nconst moveLeft = function moveLeft() {\n  percentForMarginLeft -= 100;\n  checkLeftBorder();\n  setMarginLeft();\n};\n\nconst moveRight = function moveRight() {\n  percentForMarginLeft += 100;\n  checkRightBorder();\n  setMarginLeft();\n};\n\nbuttonRight.addEventListener('click', moveLeft);\nbuttonLeft.addEventListener('click', moveRight);\ntouchEventDispathcer.on('swipeleft', moveLeft);\ntouchEventDispathcer.on('swiperight', moveRight);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! hammerjs */ \"./node_modules/hammerjs/hammer.js\")))\n\n//# sourceURL=webpack:///./src/blocks/latest-works/latest-works.js?");

/***/ }),

/***/ "./src/components/burger/burger.js":
/*!*****************************************!*\
  !*** ./src/components/burger/burger.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {const $burger = $('.burger');\nconst $nav = $('.main-nav');\n\nconst toggleMenu = function toggleMenu(event) {\n  const burger = event.currentTarget;\n\n  $burger.toggleClass('burger_close');\n\n  $nav.slideToggle(300, function () {\n    if ($(this).css('display') === 'none') $(this).removeAttr('style');\n  });\n};\n\n$burger.on('click', toggleMenu);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/components/burger/burger.js?");

/***/ }),

/***/ "./src/components/main-nav/main-nav.js":
/*!*********************************************!*\
  !*** ./src/components/main-nav/main-nav.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {const $links = $('.main-nav__item_has-child>.main-nav__link');\nconst $lists = $('.main-nav__list_level-2');\nconst $rootElement = $(document.documentElement);\n\nconst toggleMenu = function toggleMenu($list) {\n  $list.slideToggle(300, function () {\n    const $this = $(this);\n    if ($this.css('display') === 'none') $(this).removeAttr('style');\n  });\n};\n\nconst setToggle = function setToggle(list) {\n  return function (event) {\n    event.preventDefault();\n    const $list = $(list);\n    toggleMenu($list);\n  };\n};\n\n$links.each((index, item) => {\n  const list = $lists[index];\n  const $item = $(item);\n  $item.on('click', setToggle(list));\n});\n\nconst slideToggle = function slideToggle() {\n  return function (event) {\n    const { target } = event;\n\n    $lists.each(function (index, item) {\n      const $item = $(item);\n      const currentLink = $links[index];\n\n      if ($item.css('display') === 'block' && target !== currentLink) {\n        $item.slideUp(300, function () {\n          const $this = $(this);\n          if ($this.css('display') === 'none') $this.removeAttr('style');\n        });\n      }\n    });\n  };\n};\n\n$rootElement.on('click', slideToggle());\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/components/main-nav/main-nav.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_main_nav_main_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-nav/main-nav */ \"./src/components/main-nav/main-nav.js\");\n/* harmony import */ var _components_main_nav_main_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_main_nav_main_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/burger/burger */ \"./src/components/burger/burger.js\");\n/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blocks_banner_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/banner/banner */ \"./src/blocks/banner/banner.js\");\n/* harmony import */ var _blocks_banner_banner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_banner_banner__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blocks_latest_works_latest_works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/latest-works/latest-works */ \"./src/blocks/latest-works/latest-works.js\");\n/* harmony import */ var _blocks_latest_works_latest_works__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_latest_works_latest_works__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });