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
/******/ ([
/* 0 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2018 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString === Object.prototype.toString) {\n\t\t\t\t\tfor (var key in arg) {\n\t\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_slider__ = __webpack_require__(/*! ./custom-slider */ 3);\n/**\n * Gutenberg Blocks\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqL1xuXG5pbXBvcnQgXCIuL2N1c3RvbS1zbGlkZXJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************!*\
  !*** ./src/custom-slider/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(/*! ./edit */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save__ = __webpack_require__(/*! ./save */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_json__ = __webpack_require__(/*! ./block.json */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__block_json__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__wordpress_blocks__);\n/**\n * BLOCK: custom-slider\n *\n * Registering a basic block with Gutenberg.\n */\n\n//  Import CSS.\n\n\n\n\n\n\n\n\n\n\n\nvar name = __WEBPACK_IMPORTED_MODULE_4__block_json___default.a.name,\n    attributes = __WEBPACK_IMPORTED_MODULE_4__block_json___default.a.attributes,\n    description = __WEBPACK_IMPORTED_MODULE_4__block_json___default.a.description;\n/**\n * Registering  Block.\n */\n\nObject(__WEBPACK_IMPORTED_MODULE_6__wordpress_blocks__[\"registerBlockType\"])(name, {\n\ttitle: Object(__WEBPACK_IMPORTED_MODULE_5__wordpress_i18n__[\"__\"])(\"custom-slider\"),\n\tdescription: description,\n\ticon: \"shield\",\n\tcategory: \"common\",\n\tkeywords: [Object(__WEBPACK_IMPORTED_MODULE_5__wordpress_i18n__[\"__\"])(\"custom-slider\")],\n\tedit: __WEBPACK_IMPORTED_MODULE_2__edit__[\"a\" /* default */],\n\tsave: __WEBPACK_IMPORTED_MODULE_3__save__[\"a\" /* default */],\n\tattributes: attributes\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20tc2xpZGVyL2luZGV4LmpzPzk1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogY3VzdG9tLXNsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuaW1wb3J0IEVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IFNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcbmltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSBcIkB3b3JkcHJlc3MvYmxvY2tzXCI7XG5cbnZhciBuYW1lID0gbWV0YWRhdGEubmFtZSxcbiAgICBhdHRyaWJ1dGVzID0gbWV0YWRhdGEuYXR0cmlidXRlcyxcbiAgICBkZXNjcmlwdGlvbiA9IG1ldGFkYXRhLmRlc2NyaXB0aW9uO1xuLyoqXG4gKiBSZWdpc3RlcmluZyAgQmxvY2suXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobmFtZSwge1xuXHR0aXRsZTogX18oXCJjdXN0b20tc2xpZGVyXCIpLFxuXHRkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cdGljb246IFwic2hpZWxkXCIsXG5cdGNhdGVnb3J5OiBcImNvbW1vblwiLFxuXHRrZXl3b3JkczogW19fKFwiY3VzdG9tLXNsaWRlclwiKV0sXG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6IFNhdmUsXG5cdGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2N1c3RvbS1zbGlkZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./src/custom-slider/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20tc2xpZGVyL2VkaXRvci5zY3NzP2Y0ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jdXN0b20tc2xpZGVyL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/custom-slider/style.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20tc2xpZGVyL3N0eWxlLnNjc3M/NDBkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2N1c3RvbS1zbGlkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** ./src/custom-slider/edit.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Edit;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(/*! classnames */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider__ = __webpack_require__(/*! ./slider */ 13);\n/**\n * internal dependencies\n */\n\n\n\n\n\n/**\n * external dependencies\n */\n\n\n\nfunction Edit(props) {\n\tvar className = props.className,\n\t    setAttributes = props.setAttributes,\n\t    _props$attributes = props.attributes,\n\t    sliderItems = _props$attributes.sliderItems,\n\t    autoPlay = _props$attributes.autoPlay,\n\t    navArrows = _props$attributes.navArrows,\n\t    dots = _props$attributes.dots;\n\n\t/**\n  * Update Carousel items \n  * on media selection\n  * @param {*} selectedMedias \n  */\n\n\tvar onSelectMedia = function onSelectMedia(selectedMedias) {\n\t\tvar filteredData = selectedMedias.map(function (_ref) {\n\t\t\tvar id = _ref.id,\n\t\t\t    type = _ref.type,\n\t\t\t    alt = _ref.alt,\n\t\t\t    url = _ref.url,\n\t\t\t    sizes = _ref.sizes;\n\t\t\treturn {\n\t\t\t\tid: id,\n\t\t\t\ttype: type,\n\t\t\t\talt: alt,\n\t\t\t\turl: url,\n\t\t\t\tsizes: sizes\n\t\t\t};\n\t\t});\n\t\tsetAttributes({ sliderItems: filteredData });\n\t};\n\n\tvar sliderSettings = {\n\t\tautoPlay: autoPlay, navArrows: navArrows, dots: dots\n\t};\n\tvar classNames = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(\"custom-carousel\", className);\n\n\treturn wp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_element__[\"Fragment\"],\n\t\tnull,\n\t\tsliderItems.length > 0 && wp.element.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__[\"InspectorControls\"],\n\t\t\t{ key: \"inspector\" },\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"PanelBody\"],\n\t\t\t\t{ title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])(\"Carousel Settings\"), initialOpen: true },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tchecked: autoPlay,\n\t\t\t\t\tlabel: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])(\"Auto Play\"),\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ autoPlay: value });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tchecked: navArrows,\n\t\t\t\t\tlabel: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])(\"Navigation Arrows\"),\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ navArrows: value });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tchecked: dots,\n\t\t\t\t\tlabel: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])(\"Dots\"),\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ dots: value });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: classNames },\n\t\t\tsliderItems.length === 0 ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__[\"MediaPlaceholder\"], {\n\t\t\t\tmultiple: true,\n\t\t\t\tonSelect: function onSelect(selectedItems) {\n\t\t\t\t\treturn onSelectMedia(selectedItems);\n\t\t\t\t},\n\t\t\t\tallowedTypes: [\"image\", \"video\"],\n\t\t\t\tlabels: {\n\t\t\t\t\ttitle: \"Media Slider\",\n\t\t\t\t\tinstructions: \"Drag images or videos, upload new ones or select files from your library.\"\n\t\t\t\t}\n\t\t\t}) : wp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"gutenberg-custom-slider\" },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__slider__[\"a\" /* default */], { slides: sliderItems, sliderSettings: sliderSettings })\n\t\t\t)\n\t\t)\n\t);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20tc2xpZGVyL2VkaXQuanM/MWQxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcbmltcG9ydCB7IFBhbmVsQm9keSwgVG9nZ2xlQ29udHJvbCB9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMsIE1lZGlhUGxhY2Vob2xkZXIsIE1lZGlhVXBsb2FkIH0gZnJvbSBcIkB3b3JkcHJlc3MvYmxvY2stZWRpdG9yXCI7XG5cbi8qKlxuICogZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdChwcm9wcykge1xuXHR2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdCAgICBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdCAgICBzbGlkZXJJdGVtcyA9IF9wcm9wcyRhdHRyaWJ1dGVzLnNsaWRlckl0ZW1zLFxuXHQgICAgYXV0b1BsYXkgPSBfcHJvcHMkYXR0cmlidXRlcy5hdXRvUGxheSxcblx0ICAgIG5hdkFycm93cyA9IF9wcm9wcyRhdHRyaWJ1dGVzLm5hdkFycm93cyxcblx0ICAgIGRvdHMgPSBfcHJvcHMkYXR0cmlidXRlcy5kb3RzO1xuXG5cdC8qKlxuICAqIFVwZGF0ZSBDYXJvdXNlbCBpdGVtcyBcbiAgKiBvbiBtZWRpYSBzZWxlY3Rpb25cbiAgKiBAcGFyYW0geyp9IHNlbGVjdGVkTWVkaWFzIFxuICAqL1xuXG5cdHZhciBvblNlbGVjdE1lZGlhID0gZnVuY3Rpb24gb25TZWxlY3RNZWRpYShzZWxlY3RlZE1lZGlhcykge1xuXHRcdHZhciBmaWx0ZXJlZERhdGEgPSBzZWxlY3RlZE1lZGlhcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcblx0XHRcdHZhciBpZCA9IF9yZWYuaWQsXG5cdFx0XHQgICAgdHlwZSA9IF9yZWYudHlwZSxcblx0XHRcdCAgICBhbHQgPSBfcmVmLmFsdCxcblx0XHRcdCAgICB1cmwgPSBfcmVmLnVybCxcblx0XHRcdCAgICBzaXplcyA9IF9yZWYuc2l6ZXM7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZDogaWQsXG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGFsdDogYWx0LFxuXHRcdFx0XHR1cmw6IHVybCxcblx0XHRcdFx0c2l6ZXM6IHNpemVzXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHNldEF0dHJpYnV0ZXMoeyBzbGlkZXJJdGVtczogZmlsdGVyZWREYXRhIH0pO1xuXHR9O1xuXG5cdHZhciBzbGlkZXJTZXR0aW5ncyA9IHtcblx0XHRhdXRvUGxheTogYXV0b1BsYXksIG5hdkFycm93czogbmF2QXJyb3dzLCBkb3RzOiBkb3RzXG5cdH07XG5cdHZhciBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcImN1c3RvbS1jYXJvdXNlbFwiLCBjbGFzc05hbWUpO1xuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0RnJhZ21lbnQsXG5cdFx0bnVsbCxcblx0XHRzbGlkZXJJdGVtcy5sZW5ndGggPiAwICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0eyBrZXk6IFwiaW5zcGVjdG9yXCIgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHR7IHRpdGxlOiBfXyhcIkNhcm91c2VsIFNldHRpbmdzXCIpLCBpbml0aWFsT3BlbjogdHJ1ZSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQ29udHJvbCwge1xuXHRcdFx0XHRcdGNoZWNrZWQ6IGF1dG9QbGF5LFxuXHRcdFx0XHRcdGxhYmVsOiBfXyhcIkF1dG8gUGxheVwiKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYXV0b1BsYXk6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0Y2hlY2tlZDogbmF2QXJyb3dzLFxuXHRcdFx0XHRcdGxhYmVsOiBfXyhcIk5hdmlnYXRpb24gQXJyb3dzXCIpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBuYXZBcnJvd3M6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0Y2hlY2tlZDogZG90cyxcblx0XHRcdFx0XHRsYWJlbDogX18oXCJEb3RzXCIpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBkb3RzOiB2YWx1ZSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZXMgfSxcblx0XHRcdHNsaWRlckl0ZW1zLmxlbmd0aCA9PT0gMCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVBsYWNlaG9sZGVyLCB7XG5cdFx0XHRcdG11bHRpcGxlOiB0cnVlLFxuXHRcdFx0XHRvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3Qoc2VsZWN0ZWRJdGVtcykge1xuXHRcdFx0XHRcdHJldHVybiBvblNlbGVjdE1lZGlhKHNlbGVjdGVkSXRlbXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGxvd2VkVHlwZXM6IFtcImltYWdlXCIsIFwidmlkZW9cIl0sXG5cdFx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRcdHRpdGxlOiBcIk1lZGlhIFNsaWRlclwiLFxuXHRcdFx0XHRcdGluc3RydWN0aW9uczogXCJEcmFnIGltYWdlcyBvciB2aWRlb3MsIHVwbG9hZCBuZXcgb25lcyBvciBzZWxlY3QgZmlsZXMgZnJvbSB5b3VyIGxpYnJhcnkuXCJcblx0XHRcdFx0fVxuXHRcdFx0fSkgOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBcImd1dGVuYmVyZy1jdXN0b20tc2xpZGVyXCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNsaWRlciwgeyBzbGlkZXM6IHNsaWRlckl0ZW1zLCBzbGlkZXJTZXR0aW5nczogc2xpZGVyU2V0dGluZ3MgfSlcblx0XHRcdClcblx0XHQpXG5cdCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3VzdG9tLXNsaWRlci9lZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: PanelBody, ToggleControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 8 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: Fragment, useEffect, useState */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),
/* 9 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls, MediaPlaceholder */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 10 */
/*!***********************************!*\
  !*** ./src/custom-slider/save.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Save;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\n\n\nfunction Save(props) {\n\tvar className = props.className,\n\t    _props$attributes = props.attributes,\n\t    autoTransition = _props$attributes.autoTransition,\n\t    navArrows = _props$attributes.navArrows,\n\t    dots = _props$attributes.dots;\n\n\n\tvar classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(\"custom-carousel\", className);\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: classNames },\n\t\twp.element.createElement(\n\t\t\t\"p\",\n\t\t\tnull,\n\t\t\t\"Custom Slider content will go here\"\n\t\t)\n\t);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLXNsaWRlci9zYXZlLmpzPzI3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZShwcm9wcykge1xuXHR2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHQgICAgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHQgICAgYXV0b1RyYW5zaXRpb24gPSBfcHJvcHMkYXR0cmlidXRlcy5hdXRvVHJhbnNpdGlvbixcblx0ICAgIG5hdkFycm93cyA9IF9wcm9wcyRhdHRyaWJ1dGVzLm5hdkFycm93cyxcblx0ICAgIGRvdHMgPSBfcHJvcHMkYXR0cmlidXRlcy5kb3RzO1xuXG5cblx0dmFyIGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFwiY3VzdG9tLWNhcm91c2VsXCIsIGNsYXNzTmFtZSk7XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJkaXZcIixcblx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwicFwiLFxuXHRcdFx0bnVsbCxcblx0XHRcdFwiQ3VzdG9tIFNsaWRlciBjb250ZW50IHdpbGwgZ28gaGVyZVwiXG5cdFx0KVxuXHQpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2N1c3RvbS1zbGlkZXIvc2F2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**************************************!*\
  !*** ./src/custom-slider/block.json ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

eval("module.exports = {\"name\":\"cgb/custom-slider\",\"title\":\"Custom Slider2\",\"category\":\"common\",\"description\":\"Showcase important info with rich Slider\",\"keywords\":[\"custom-slider\"],\"textdomain\":\"default\",\"attributes\":{\"sliderItems\":{\"type\":\"array\",\"default\":[]},\"autoPlay \":{\"type\":\"boolean\",\"default\":true},\"navArrows\":{\"type\":\"boolean\",\"default\":true},\"dots\":{\"type\":\"boolean\",\"default\":true}}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLXNsaWRlci9ibG9jay5qc29uPzQwMjgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJjZ2IvY3VzdG9tLXNsaWRlclwiLFwidGl0bGVcIjpcIkN1c3RvbSBTbGlkZXIyXCIsXCJjYXRlZ29yeVwiOlwiY29tbW9uXCIsXCJkZXNjcmlwdGlvblwiOlwiU2hvd2Nhc2UgaW1wb3J0YW50IGluZm8gd2l0aCByaWNoIFNsaWRlclwiLFwia2V5d29yZHNcIjpbXCJjdXN0b20tc2xpZGVyXCJdLFwidGV4dGRvbWFpblwiOlwiZGVmYXVsdFwiLFwiYXR0cmlidXRlc1wiOntcInNsaWRlckl0ZW1zXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX0sXCJhdXRvUGxheSBcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJuYXZBcnJvd3NcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJkb3RzXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOnRydWV9fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jdXN0b20tc2xpZGVyL2Jsb2NrLmpzb25cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: registerBlockType */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),
/* 13 */
/*!*************************************!*\
  !*** ./src/custom-slider/slider.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sliderItem__ = __webpack_require__(/*! ./sliderItem */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(/*! classnames */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n\nvar Slider = function Slider(_ref) {\n    var slides = _ref.slides,\n        _ref$sliderSettings = _ref.sliderSettings,\n        autoPlay = _ref$sliderSettings.autoPlay,\n        navArrows = _ref$sliderSettings.navArrows,\n        dots = _ref$sliderSettings.dots;\n\n    var _useState = Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__[\"useState\"])(false),\n        _useState2 = _slicedToArray(_useState, 2),\n        activeItem = _useState2[0],\n        setActiveItem = _useState2[1];\n\n    var _useState3 = Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__[\"useState\"])(false),\n        _useState4 = _slicedToArray(_useState3, 2),\n        isHovered = _useState4[0],\n        setHovered = _useState4[1];\n\n    /**\n     * Set Active item of slider\n     * @param {*} newIndex \n     */\n\n\n    var updateSlider = function updateSlider(newIndex) {\n        if (newIndex < 0) {\n            setActiveItem(slides.length - 1);\n        } else if (newIndex >= slides.length) {\n            setActiveItem(0);\n        } else {\n            setActiveItem(newIndex);\n        }\n    };\n\n    var style = {\n        transform: 'translateX(' + activeItem * -100 + '%)'\n    };\n\n    Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__[\"useEffect\"])(function () {\n        if (autoPlay) {\n            var interval = setInterval(function () {\n                if (!isHovered) {\n                    setActiveItem(function () {\n                        return (activeItem + 1) % slides.length;\n                    });\n                }\n            }, 1000);\n            return function () {\n                if (interval) {\n                    clearInterval(interval);\n                }\n            };\n        }\n    }), [autoPlay];\n\n    return wp.element.createElement(\n        __WEBPACK_IMPORTED_MODULE_1__wordpress_element__[\"Fragment\"],\n        null,\n        navArrows && wp.element.createElement(\n            'div',\n            { className: 'slider-nav-btns' },\n            wp.element.createElement(\n                'button',\n                { onClick: function onClick() {\n                        return updateSlider(activeItem - 1);\n                    }, className: 'carousel-nav-btn prev' },\n                Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Prev')\n            ),\n            wp.element.createElement(\n                'button',\n                { onClick: function onClick() {\n                        return updateSlider(activeItem + 1);\n                    }, className: 'carousel-nav-btn next' },\n                Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Next')\n            )\n        ),\n        dots && wp.element.createElement(\n            'div',\n            { className: 'slider-dots' },\n            slides.map(function (_, index) {\n                return wp.element.createElement('button', { onClick: function onClick() {\n                        return updateSlider(index);\n                    }, className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('slider-dot', { 'active': index === activeItem }) });\n            })\n        ),\n        wp.element.createElement(\n            'div',\n            { className: 'slider-wrapper',\n                onMouseEnter: function onMouseEnter() {\n                    return setHovered(true);\n                },\n                onMouseLeave: function onMouseLeave() {\n                    return setHovered(false);\n                } },\n            wp.element.createElement(\n                'div',\n                { className: 'slider', style: style },\n                slides.map(function (slide) {\n                    return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__sliderItem__[\"a\" /* default */], { key: slide, slide: slide });\n                })\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLXNsaWRlci9zbGlkZXIuanM/YjBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSAnLi9zbGlkZXJJdGVtJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgU2xpZGVyID0gZnVuY3Rpb24gU2xpZGVyKF9yZWYpIHtcbiAgICB2YXIgc2xpZGVzID0gX3JlZi5zbGlkZXMsXG4gICAgICAgIF9yZWYkc2xpZGVyU2V0dGluZ3MgPSBfcmVmLnNsaWRlclNldHRpbmdzLFxuICAgICAgICBhdXRvUGxheSA9IF9yZWYkc2xpZGVyU2V0dGluZ3MuYXV0b1BsYXksXG4gICAgICAgIG5hdkFycm93cyA9IF9yZWYkc2xpZGVyU2V0dGluZ3MubmF2QXJyb3dzLFxuICAgICAgICBkb3RzID0gX3JlZiRzbGlkZXJTZXR0aW5ncy5kb3RzO1xuXG4gICAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICAgIGFjdGl2ZUl0ZW0gPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgICBzZXRBY3RpdmVJdGVtID0gX3VzZVN0YXRlMlsxXTtcblxuICAgIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICAgIGlzSG92ZXJlZCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICAgIHNldEhvdmVyZWQgPSBfdXNlU3RhdGU0WzFdO1xuXG4gICAgLyoqXG4gICAgICogU2V0IEFjdGl2ZSBpdGVtIG9mIHNsaWRlclxuICAgICAqIEBwYXJhbSB7Kn0gbmV3SW5kZXggXG4gICAgICovXG5cblxuICAgIHZhciB1cGRhdGVTbGlkZXIgPSBmdW5jdGlvbiB1cGRhdGVTbGlkZXIobmV3SW5kZXgpIHtcbiAgICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgICAgc2V0QWN0aXZlSXRlbShzbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPj0gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0QWN0aXZlSXRlbSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUl0ZW0obmV3SW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgYWN0aXZlSXRlbSAqIC0xMDAgKyAnJSknXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhdXRvUGxheSkge1xuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNIb3ZlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUl0ZW0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhY3RpdmVJdGVtICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSwgW2F1dG9QbGF5XTtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEZyYWdtZW50LFxuICAgICAgICBudWxsLFxuICAgICAgICBuYXZBcnJvd3MgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NsaWRlci1uYXYtYnRucycgfSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlU2xpZGVyKGFjdGl2ZUl0ZW0gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiAnY2Fyb3VzZWwtbmF2LWJ0biBwcmV2JyB9LFxuICAgICAgICAgICAgICAgIF9fKCdQcmV2JylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVNsaWRlcihhY3RpdmVJdGVtICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogJ2Nhcm91c2VsLW5hdi1idG4gbmV4dCcgfSxcbiAgICAgICAgICAgICAgICBfXygnTmV4dCcpXG4gICAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGRvdHMgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NsaWRlci1kb3RzJyB9LFxuICAgICAgICAgICAgc2xpZGVzLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlU2xpZGVyKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdzbGlkZXItZG90JywgeyAnYWN0aXZlJzogaW5kZXggPT09IGFjdGl2ZUl0ZW0gfSkgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc2xpZGVyLXdyYXBwZXInLFxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SG92ZXJlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SG92ZXJlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc2xpZGVyJywgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgICAgICAgICAgc2xpZGVzLm1hcChmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTbGlkZXJJdGVtLCB7IGtleTogc2xpZGUsIHNsaWRlOiBzbGlkZSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jdXN0b20tc2xpZGVyL3NsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!*****************************************!*\
  !*** ./src/custom-slider/sliderItem.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var SliderItem = function SliderItem(_ref) {\n    var _ref$slide = _ref.slide,\n        type = _ref$slide.type,\n        url = _ref$slide.url,\n        alt = _ref$slide.alt,\n        id = _ref$slide.id;\n\n    return wp.element.createElement(\n        \"div\",\n        { className: \"slider-item\" },\n        type === 'image' ? wp.element.createElement(\"img\", { src: url, alt: alt | id }) : wp.element.createElement(\n            \"div\",\n            null,\n            \"video\"\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SliderItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLXNsaWRlci9zbGlkZXJJdGVtLmpzP2YzNTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFNsaWRlckl0ZW0gPSBmdW5jdGlvbiBTbGlkZXJJdGVtKF9yZWYpIHtcbiAgICB2YXIgX3JlZiRzbGlkZSA9IF9yZWYuc2xpZGUsXG4gICAgICAgIHR5cGUgPSBfcmVmJHNsaWRlLnR5cGUsXG4gICAgICAgIHVybCA9IF9yZWYkc2xpZGUudXJsLFxuICAgICAgICBhbHQgPSBfcmVmJHNsaWRlLmFsdCxcbiAgICAgICAgaWQgPSBfcmVmJHNsaWRlLmlkO1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwic2xpZGVyLWl0ZW1cIiB9LFxuICAgICAgICB0eXBlID09PSAnaW1hZ2UnID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiB1cmwsIGFsdDogYWx0IHwgaWQgfSkgOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIFwidmlkZW9cIlxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlckl0ZW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3VzdG9tLXNsaWRlci9zbGlkZXJJdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ })
/******/ ]);