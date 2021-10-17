/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/helpers/arithmetic.js":
/*!***********************************!*\
  !*** ./app/helpers/arithmetic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleOperator\": () => (/* binding */ handleOperator)\n/* harmony export */ });\n/* harmony import */ var _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorObj.js */ \"./app/helpers/calculatorObj.js\");\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ \"./app/helpers/math.js\");\n\r\n\r\n\r\nfunction handleOperator(nextOperator) {\r\n  // The function handle with arithmetic\r\n  const { firstOperand, displayValue, operator } = _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator;\r\n\r\n  const inputValue = parseFloat(displayValue); //get the result with float\r\n\r\n  if (operator && _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.waitingForSecondOperand) {\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.operator = nextOperator;\r\n    return;\r\n  }\r\n\r\n  if (firstOperand == null) {\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.firstOperand = inputValue;\r\n  } else if (operator) {\r\n    const currentValue = firstOperand || 0;\r\n    const result = _math_js__WEBPACK_IMPORTED_MODULE_1__.performCalculation[operator](currentValue, inputValue);\r\n\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue = String(result);\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.firstOperand = result;\r\n  }\r\n\r\n  _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.waitingForSecondOperand = true;\r\n  _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.operator = nextOperator;\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/arithmetic.js?");

/***/ }),

/***/ "./app/helpers/calculatorObj.js":
/*!**************************************!*\
  !*** ./app/helpers/calculatorObj.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculator\": () => (/* binding */ calculator)\n/* harmony export */ });\nconst calculator = {\r\n  displayValue: \"0\",\r\n  firstOperand: null,\r\n  waitingForSecondOperand: false,\r\n  operator: null,\r\n};\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/calculatorObj.js?");

/***/ }),

/***/ "./app/helpers/inputVallidation.js":
/*!*****************************************!*\
  !*** ./app/helpers/inputVallidation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputDigit\": () => (/* binding */ inputDigit),\n/* harmony export */   \"inputDecimal\": () => (/* binding */ inputDecimal)\n/* harmony export */ });\n/* harmony import */ var _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorObj.js */ \"./app/helpers/calculatorObj.js\");\n\r\n\r\nfunction inputDigit(digit) {\r\n  //Put the digit in the input\r\n  const { displayValue, waitingForSecondOperand } = _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator;\r\n\r\n  if (waitingForSecondOperand === true) {\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue = digit;\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.waitingForSecondOperand = false;\r\n  } else {\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue =\r\n      displayValue === \"0\" ? digit : displayValue + digit;\r\n  }\r\n}\r\n\r\nfunction inputDecimal(dot) {\r\n  // If the `displayValue` does not contain a decimal point\r\n  if (!_calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue.includes(dot)) {\r\n    // Append the decimal point\r\n    _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue += dot;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/inputVallidation.js?");

/***/ }),

/***/ "./app/helpers/logic.js":
/*!******************************!*\
  !*** ./app/helpers/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderDom.js */ \"./app/helpers/renderDom.js\");\n/* harmony import */ var _arithmetic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arithmetic.js */ \"./app/helpers/arithmetic.js\");\n/* harmony import */ var _inputVallidation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputVallidation.js */ \"./app/helpers/inputVallidation.js\");\n\r\n\r\n\r\n\r\n(0,_renderDom_js__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();\r\n\r\ndocument\r\n  .querySelector(\".calculator-keys\")\r\n  .addEventListener(\"click\", (event) => {\r\n    const { target } = event;\r\n    if (!target.matches(\"button\")) {\r\n      //If there isn't some clicked button, return\r\n      return;\r\n    }\r\n\r\n    if (target.classList.contains(\"operator\")) {\r\n      //handle the case of press on some operator\r\n      (0,_arithmetic_js__WEBPACK_IMPORTED_MODULE_1__.handleOperator)(target.value);\r\n      (0,_renderDom_js__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();\r\n      return;\r\n    }\r\n\r\n    if (target.classList.contains(\"decimal\")) {\r\n      //make sure we use the decimal dot when needed\r\n      (0,_inputVallidation_js__WEBPACK_IMPORTED_MODULE_2__.inputDecimal)(target.value);\r\n      (0,_renderDom_js__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();\r\n      return;\r\n    }\r\n\r\n    if (target.classList.contains(\"all-clear\")) {\r\n      //clear the input\r\n      (0,_renderDom_js__WEBPACK_IMPORTED_MODULE_0__.resetCalculator)();\r\n      (0,_renderDom_js__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();\r\n      return;\r\n    }\r\n\r\n    (0,_inputVallidation_js__WEBPACK_IMPORTED_MODULE_2__.inputDigit)(target.value);\r\n    (0,_renderDom_js__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();\r\n  });\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/logic.js?");

/***/ }),

/***/ "./app/helpers/math.js":
/*!*****************************!*\
  !*** ./app/helpers/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"performCalculation\": () => (/* binding */ performCalculation)\n/* harmony export */ });\nconst performCalculation = {\r\n  //Do all the needed calculation\r\n  \"/\": function divide(n1, n2) {\r\n    return n1 / n2;\r\n  },\r\n\r\n  \"*\": function multiply(n1, n2) {\r\n    return n1 * n2;\r\n  },\r\n\r\n  \"+\": function add(n1, n2) {\r\n    return n1 + n2;\r\n  },\r\n\r\n  \"-\": function sub(n1, n2) {\r\n    return n1 - n2;\r\n  },\r\n\r\n  \"=\": function equals(n1, n2) {\r\n    return n2;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/math.js?");

/***/ }),

/***/ "./app/helpers/renderDom.js":
/*!**********************************!*\
  !*** ./app/helpers/renderDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay),\n/* harmony export */   \"resetCalculator\": () => (/* binding */ resetCalculator)\n/* harmony export */ });\n/* harmony import */ var _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorObj.js */ \"./app/helpers/calculatorObj.js\");\n\r\nfunction updateDisplay() {\r\n  //update the content of the input\r\n  const display = document.querySelector(\".calculator-screen\");\r\n  display.value = _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue;\r\n}\r\n\r\nfunction resetCalculator() {\r\n  //reset the calculator-screen\r\n  _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.displayValue = \"0\";\r\n  _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.firstOperand = null;\r\n  _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.waitingForSecondOperand = false;\r\n  _calculatorObj_js__WEBPACK_IMPORTED_MODULE_0__.calculator.operator = null;\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/renderDom.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./app/styles.css\");\n/* harmony import */ var _helpers_calculatorObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/calculatorObj */ \"./app/helpers/calculatorObj.js\");\n/* harmony import */ var _helpers_arithmetic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/arithmetic.js */ \"./app/helpers/arithmetic.js\");\n/* harmony import */ var _helpers_inputVallidation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/inputVallidation.js */ \"./app/helpers/inputVallidation.js\");\n/* harmony import */ var _helpers_logic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/logic.js */ \"./app/helpers/logic.js\");\n/* harmony import */ var _helpers_math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/math.js */ \"./app/helpers/math.js\");\n/* harmony import */ var _helpers_renderDom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/renderDom.js */ \"./app/helpers/renderDom.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"h1 {\\r\\n  text-align: center;\\r\\n  margin-top: 0.67em;\\r\\n  margin-bottom: 0.67em;\\r\\n}\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n.container {\\r\\n  margin: auto;\\r\\n  width: 25%;\\r\\n  padding: 10px;\\r\\n  border: 1px solid #f2f2f2;\\r\\n  -webkit-box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);\\r\\n  -moz-box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);\\r\\n  box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);\\r\\n  background-color: #fff;\\r\\n  height: 450px;\\r\\n  background-color: #f8f8f8;\\r\\n}\\r\\n.header {\\r\\n  background-color: #81c784;\\r\\n  padding: 10px;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n}\\r\\n.result {\\r\\n  font-size: 24px;\\r\\n  padding: 24px 5px;\\r\\n  font-weight: 700;\\r\\n  text-align: right;\\r\\n  width: 96%;\\r\\n  border: none;\\r\\n  background-color: #f8f8f8;\\r\\n}\\r\\n.first-row,\\r\\n.second-row,\\r\\n.third-row,\\r\\n.fourth-row,\\r\\n.conflict {\\r\\n  display: inline-block;\\r\\n  width: 100%;\\r\\n}\\r\\n.global {\\r\\n  padding: 15px;\\r\\n  font-weight: bold;\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n  border-radius: 3px;\\r\\n  background-color: #f2f2f2;\\r\\n  float: left;\\r\\n  width: 23.5%;\\r\\n  margin: 0 2px;\\r\\n  /*border: 1px solid #000;*/\\r\\n}\\r\\n.conflict .left,\\r\\n.conflict .right {\\r\\n  float: left;\\r\\n  position: relative;\\r\\n}\\r\\n.left {\\r\\n  width: 74%;\\r\\n}\\r\\n.right {\\r\\n  width: 24%;\\r\\n}\\r\\n.big {\\r\\n  padding: 15px;\\r\\n  font-weight: bold;\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n  border-radius: 3px;\\r\\n  background-color: #f2f2f2;\\r\\n  float: left;\\r\\n  width: 64.5%;\\r\\n  margin: 0 2px;\\r\\n}\\r\\n.small {\\r\\n  padding: 15px;\\r\\n  font-weight: bold;\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n  border-radius: 3px;\\r\\n  background-color: #f2f2f2;\\r\\n  float: left;\\r\\n  width: 31.5%;\\r\\n  margin: 0 2px;\\r\\n}\\r\\n.plus {\\r\\n  height: 105px;\\r\\n  width: 100%;\\r\\n}\\r\\n.green {\\r\\n  background-color: #81c784;\\r\\n}\\r\\n.red {\\r\\n  background-color: #f50258;\\r\\n}\\r\\n.grey {\\r\\n  background-color: #f2f2f2;\\r\\n}\\r\\n.white-text {\\r\\n  color: #fff;\\r\\n}\\r\\n.top-margin {\\r\\n  margin-top: 4px;\\r\\n}\\r\\n.X {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles.css":
/*!************************!*\
  !*** ./app/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;