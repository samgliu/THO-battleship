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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    text-align: center;\\n    font-size: 1.5em;\\n    font-family: sans-serif;\\n}\\n.canvas {\\n    display: grid;\\n    background-color: rgb(215, 215, 243);\\n    padding: 10px;\\n}\\n.grid-item {\\n    background-color: rgba(255, 255, 255, 0.8);\\n    border: 1px solid rgba(0, 0, 0, 0.8);\\n    width: 28px;\\n    height: 28px;\\n    cursor: pointer;\\n}\\n\\n.grid-item:hover {\\n    background-color: rgba(160, 208, 247, 0.8);\\n}\\n\\n.grid-item-ship {\\n    background-color: rgba(29, 6, 233, 0.8);\\n}\\n.grid-item-ship-water {\\n    background-color: rgba(111, 186, 247, 0.8);\\n}\\n.grid-item-ship-hit {\\n    background-color: rgba(175, 59, 30, 0.8);\\n}\\n#p1container,\\n#p2container {\\n    margin: 20px 20px 20px 20px;\\n    width: 320px;\\n    display: inline-block;\\n}\\n\\n#displayShipContainer {\\n    width: 180px;\\n    height: 180px;\\n    display: inline-block;\\n}\\n\\nbutton {\\n    border: none;\\n    font-size: 0.7em;\\n    background-color: rgb(173, 192, 247);\\n    cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Ship */ \"./src/modules/Ship.js\");\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nwindow.clickonGrid = clickonGrid; // expose to global\nwindow.start = start;\nwindow.reset = reset;\nwindow.refresh = refresh;\nwindow.placeShip = placeShip;\nwindow.dodgeDirection = dodgeDirection;\nwindow.placeGrid = placeGrid;\n\nfunction start() {\n    document.getElementById(\"place\").style.display = \"none\";\n    document.getElementById(\"displayShipContainer\").style.display = \"none\";\n    document.querySelector(`#p2container`).style.display = \"inline-block\";\n    reset();\n}\n\nfunction reset() {\n    __webpack_require__.g.gb1 = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    __webpack_require__.g.gb2 = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    __webpack_require__.g.lastHitRow = -1;\n    __webpack_require__.g.lastHitCol = -1;\n    __webpack_require__.g.AIIndex = 0;\n    addbox(10);\n    setupPlayerShip(gb1);\n    setupComShip(gb2);\n}\n\nfunction refresh() {\n    reset();\n\n    document.getElementById(\"place\").style = null;\n    placeShip();\n    document.getElementById(\"displayShipContainer\").style = null;\n}\n\nfunction placeShip() {\n    // fixme\n    __webpack_require__.g.gb1 = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    __webpack_require__.g.gb2 = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    __webpack_require__.g.lastHitRow = -1;\n    __webpack_require__.g.lastHitCol = -1;\n    __webpack_require__.g.AIIndex = 0;\n    addbox(10);\n    document.getElementById(\"p2container\").style.display = \"none\";\n    placeHelper();\n    setupComShip(gb2);\n}\n\nfunction placeHelper() {\n    shipBodyGenerator(5, \"1\");\n}\n\nfunction dodgeDirection() {\n    let container = document.querySelector(`#shcan`);\n    if (container.value === \"1\") {\n        container.value = \"0\";\n    } else {\n        container.value = \"1\";\n    }\n    let elems = container.querySelectorAll(`.grid-item`);\n    let len = elems.length;\n    shipBodyGenerator(len, container.value);\n}\n\nfunction placeGrid(theDiv) {\n    let id = theDiv.id;\n    let arr = id.split(\"-\");\n    let row = arr[1];\n    let col = arr[2];\n    let container = document.querySelector(`#shcan`);\n    let len = container.querySelectorAll(`.grid-item`).length;\n    let direction = container.value;\n    let newShip = new _modules_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](len);\n    if (direction === \"0\") {\n        newShip.setIsVertical(true);\n    }\n    if (gb1.validPos(newShip, row, col)) {\n        shipBodyGenerator(len - 1, container.value);\n    }\n    drawShips(\"p1\", gb1);\n    if (len === 1) {\n        playerStart();\n    }\n}\n\nfunction playerStart() {\n    console.log(\"start the game\");\n    document.querySelector(`#displayShipContainer`).style.display = \"none\";\n    document.querySelector(`#p2container`).style.display = \"inline-block\";\n}\n\nfunction shipBodyGenerator(size, direction) {\n    if (direction === \"0\") {\n        let ele1 = document.querySelector(`#shcan`);\n        ele1.innerHTML = \"\";\n        ele1.style[\"grid-template-columns\"] = \"repeat(\" + 1 + \", 30px)\";\n        for (let i = 0; i < size; i++) {\n            let temp = document.createElement(\"div\");\n            temp.setAttribute(\"class\", \"grid-item\");\n            temp.classList.add(\"grid-item-ship\");\n            document.querySelector(`#shcan`).appendChild(temp);\n        }\n    } else {\n        let ele1 = document.querySelector(`#shcan`);\n        ele1.innerHTML = \"\";\n        ele1.style[\"grid-template-columns\"] = \"repeat(\" + size + \", 30px)\";\n        for (let i = 0; i < size; i++) {\n            let temp = document.createElement(\"div\");\n            temp.setAttribute(\"class\", \"grid-item\");\n            temp.classList.add(\"grid-item-ship\");\n            document.querySelector(`#shcan`).appendChild(temp);\n        }\n    }\n}\n\nfunction setupPlayerShip(gb1) {\n    gb1.randomShips();\n    drawShips(\"p1\", gb1);\n}\n\nfunction setupComShip(gb2) {\n    gb2.randomShips();\n    drawShips(\"p2\", gb2);\n    //document.getElementById(\"p2container\").style.display = \"inline-block\";\n}\n\nfunction drawShips(player, gb) {\n    let board = gb.getBoard();\n    for (let i = 0; i < board.length; i++) {\n        for (let j = 0; j < board[0].length; j++) {\n            if (board[i][j] === 1) {\n                if (player === \"p1\") {\n                    drawShipBody(player, i, j, \"\");\n                }\n            } else if (board[i][j] === -1) {\n                drawShipBody(player, i, j, \"-hit\");\n            } else if (board[i][j] === 0) {\n                drawShipBody(player, i, j, \"-water\");\n            }\n        }\n    }\n}\n\nfunction drawShipBody(player, row, col, sty) {\n    let id = player + \"-\" + row + \"-\" + col;\n    let thediv = document.getElementById(id);\n    thediv.classList.add(\"grid-item-ship\" + sty);\n}\n\nfunction receiveAttack(player, row, col) {\n    if (player === \"p1\") {\n        //\n    }\n    if (player == \"p2\") {\n        gb2.receiveAttack(row, col);\n        drawShips(player, gb2);\n        //gb1.setIsLose(true); // testing purpose\n        if (gb2.getIsLose()) {\n            document.getElementById(\"msg\").innerHTML = \"Player Won\";\n            removeListen(\"p2container\");\n        } else {\n            AIattackII();\n            if (gb1.getIsLose()) {\n                document.getElementById(\"msg\").innerHTML = \"Computer Won\";\n                removeListen(\"p2container\");\n            }\n        }\n    }\n}\n\nfunction removeListen(containerid) {\n    let container = document.querySelector(\"#\" + containerid);\n    let elems = container.querySelectorAll(`.grid-item`);\n    elems.forEach((elem) => {\n        elem.onclick = null;\n    });\n}\n\nfunction AIattack() {\n    let board = gb1.getBoard();\n    let row = Math.floor(Math.random() * 10);\n    let col = Math.floor(Math.random() * 10);\n    while (1) {\n        row = Math.floor(Math.random() * 10);\n        col = Math.floor(Math.random() * 10);\n        if (board[row][col] === 1) {\n            gb1.receiveAttack(row, col);\n            lastHitRow = row;\n            lastHitCol = col;\n            AIIndex = 1;\n            drawShips(\"p1\", gb1);\n            break;\n        } else if (board[row][col] === null) {\n            gb1.receiveAttack(row, col);\n            drawShips(\"p1\", gb1);\n            break;\n        }\n    }\n}\n\nfunction AIattackII() {\n    let board = gb1.getBoard();\n    if (lastHitCol === -1) {\n        AIattack();\n    } else {\n        if (AIIndex > 0) {\n            console.log(\"AIIndex \" + AIIndex);\n            console.log(\"lastHitCol \" + lastHitCol);\n            console.log(\"lastHitRow \" + lastHitRow);\n            if (AIIndex === 1) {\n                if (\n                    lastHitCol - 1 >= 0 &&\n                    board[lastHitRow][lastHitCol - 1] === 1\n                ) {\n                    gb1.receiveAttack(lastHitRow, lastHitCol - 1); // hit ship\n                    lastHitCol = lastHitCol - 1;\n                    AIIndex = 1;\n                    drawShips(\"p1\", gb1);\n                } else if (board[lastHitRow][lastHitCol - 1] === null) {\n                    gb1.receiveAttack(lastHitRow, lastHitCol - 1); // hit water\n                    drawShips(\"p1\", gb1);\n                    AIIndex = 2;\n                } else {\n                    AIIndex = 2;\n                    AIattackII();\n                }\n            } else if (AIIndex === 2) {\n                if (\n                    lastHitCol + 1 <= 10 &&\n                    board[lastHitRow][lastHitCol + 1] === 1\n                ) {\n                    gb1.receiveAttack(lastHitRow, lastHitCol + 1); // hit ship\n                    lastHitCol = lastHitCol + 1;\n                    AIIndex = 1;\n                    drawShips(\"p1\", gb1);\n                } else if (\n                    lastHitCol + 1 <= 10 &&\n                    board[lastHitRow][lastHitCol + 1] === null\n                ) {\n                    gb1.receiveAttack(lastHitRow, lastHitCol + 1); // hit water\n                    drawShips(\"p1\", gb1);\n                    AIIndex = 3;\n                } else {\n                    AIIndex = 3;\n                    AIattackII();\n                }\n            } else if (AIIndex === 3) {\n                if (\n                    lastHitRow - 1 >= 0 &&\n                    board[lastHitRow - 1][lastHitCol] === 1\n                ) {\n                    gb1.receiveAttack(lastHitRow - 1, lastHitCol); // hit ship\n                    lastHitRow = lastHitRow - 1;\n                    AIIndex = 1;\n                    drawShips(\"p1\", gb1);\n                } else if (\n                    lastHitRow - 1 >= 0 &&\n                    board[lastHitRow - 1][lastHitCol] === null\n                ) {\n                    gb1.receiveAttack(lastHitRow - 1, lastHitCol); // hit water\n                    drawShips(\"p1\", gb1);\n                    AIIndex = 4;\n                } else {\n                    AIIndex = 4;\n                    AIattackII();\n                }\n            } else if (AIIndex === 4) {\n                if (\n                    lastHitRow + 1 <= 10 &&\n                    board[lastHitRow + 1][lastHitCol] === 1\n                ) {\n                    gb1.receiveAttack(lastHitRow + 1, lastHitCol); // hit ship\n                    lastHitRow = lastHitRow + 1;\n                    AIIndex = 1;\n                    drawShips(\"p1\", gb1);\n                } else if (\n                    lastHitRow + 1 <= 10 &&\n                    board[lastHitRow + 1][lastHitCol] === null\n                ) {\n                    gb1.receiveAttack(lastHitRow + 1, lastHitCol); // hit water\n                    drawShips(\"p1\", gb1);\n                    AIIndex = 0;\n                } else {\n                    AIIndex = 0;\n                    AIattackII();\n                }\n            }\n        } else {\n            lastHitRow = -1;\n            lastHitCol = -1;\n            AIattack();\n        }\n    }\n}\n\nfunction clickonGrid(theDiv) {\n    let id = theDiv.id;\n    let arr = id.split(\"-\");\n    let row = arr[1];\n    let col = arr[2];\n    if (gb2.getBoard()[row][col] == null || gb2.getBoard()[row][col] === 1) {\n        receiveAttack(arr[0], row, col);\n    }\n}\n\n//function hoverEffect(row, col, len) {}\n\nfunction addbox(size) {\n    setCanvasAtt(size);\n    for (let i = 0; i < size * size; i++) {\n        let temp = document.createElement(\"div\");\n        temp.setAttribute(\"class\", \"grid-item\");\n        temp.setAttribute(\"onclick\", \"placeGrid(this);\");\n        temp.id = \"p1-\" + Math.floor(i / size) + \"-\" + (i % size);\n        document.querySelector(`#p1can`).appendChild(temp);\n    }\n\n    for (let i = 0; i < size * size; i++) {\n        let temp = document.createElement(\"div\");\n        temp.setAttribute(\"class\", \"grid-item\");\n        temp.setAttribute(\"onclick\", \"clickonGrid(this);\");\n        temp.id = \"p2-\" + Math.floor(i / size) + \"-\" + (i % size);\n        document.querySelector(`#p2can`).appendChild(temp);\n    }\n}\n\nfunction setCanvasAtt(size) {\n    let ele1 = document.querySelector(`#p1can`);\n    ele1.innerHTML = \"\";\n    ele1.style[\"grid-template-columns\"] = \"repeat(\" + size + \", 30px)\";\n    //ele1.style.width = 30 * size + \"px\";\n\n    let ele2 = document.querySelector(`#p2can`);\n    ele2.innerHTML = \"\";\n    ele2.style[\"grid-template-columns\"] = \"repeat(\" + size + \", 30px)\";\n    //ele2.style.width = 30 * size + \"px\";\n}\n\nfunction registerEventListener() {}\n\nfunction drawer() {}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Ship */ \"./src/modules/Ship.js\");\n\n\nclass Gameboard {\n    constructor() {\n        let board = new Array(10)\n            .fill(null)\n            .map(() => new Array(10).fill(null));\n        let ships = [];\n        let isLose = false;\n        let lifeLeft = 15;\n\n        boardInit();\n\n        const getBoard = () => board;\n        const getIsLose = () => isLose;\n        const setIsLose = (tf) => (isLose = tf); // testing purpose\n\n        const validPos = (aship, rrow, ccol) => {\n            let len = aship.getLength();\n            let direction = aship.getIsVertical(); // false: horizontal; true; vertical\n            let row = parseInt(rrow, 10);\n            let col = parseInt(ccol, 10);\n            if (direction) {\n                return verticalValid(row, col, len);\n            } else {\n                return horizontalValid(row, col, len);\n            }\n        };\n\n        function randomShips() {\n            for (let i = 0; i < ships.length; i++) {\n                if (Math.floor(Math.random() * 2) === 1) {\n                    ships[i].setIsVertical(true);\n                }\n                while (!randomaShip(ships[i])) {}\n            }\n        }\n        function randomaShip(aShip) {\n            let row = Math.floor(Math.random() * 10);\n            let col = Math.floor(Math.random() * 10);\n            return validPos(aShip, row, col);\n        }\n\n        function horizontalValid(row, col, len) {\n            let count = 0;\n            for (let j = col; j < 10; j++) {\n                if (board[row][j] === null && count < len) {\n                    count++;\n                    if (count === len) {\n                        markHorizontal(row, col, len);\n                        return true; // ok\n                    }\n                } else {\n                    return false; // ocupied\n                }\n            }\n        }\n\n        function markHorizontal(row, col, len) {\n            //console.log(row + col + len);\n            for (let j = 0; j < len; j++) {\n                board[row][col + j] = 1; // mark 1 means ship is here\n            }\n        }\n\n        function verticalValid(row, col, len) {\n            let count = 0;\n            for (let i = row; i < 10; i++) {\n                if (board[i][col] === null && count < len) {\n                    count++;\n                    if (count === len) {\n                        markVertical(row, col, len);\n                        return true; // ok\n                    }\n                } else {\n                    return false; // ocupied\n                }\n            }\n        }\n\n        function markVertical(row, col, len) {\n            for (let j = 0; j < len; j++) {\n                board[row + j][col] = 1; // mark 1 means ship is here\n            }\n        }\n\n        function boardInit() {\n            for (let i = 0; i < 5; i++) {\n                ships.push(new _modules_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5 - i));\n            }\n        }\n\n        function receiveAttack(row, col) {\n            if (board[row][col] === 1) {\n                board[row][col] = -1; // set the position to -1; means ship is here and got hit\n                lifeLeft--;\n                if (lifeLeft == 0) {\n                    isLose = true;\n                }\n                return true; // hit means. 1\n            } else {\n                board[row][col] = 0; // set to 0, means ship is not here but got hit\n                return false; // 0, means nothit\n            }\n        }\n\n        return {\n            getBoard,\n            setIsLose,\n            getIsLose,\n            validPos,\n            receiveAttack,\n            randomShips,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Ship */ \"./src/modules/Ship.js\");\n\n\n\nclass Player {\n    constructor() {\n        let gameboard = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        let round = 0;\n        //let maxRound = 100;\n        let isPlayerLose = false;\n\n        const getIsPlayerLost = () => isPlayerLose;\n\n        function receivePlayerAttack(row, col) {\n            if (gameboard.receiveAttack(row, col)) {\n                round++;\n                if (gameboard.getIsLose()) {\n                    isPlayerLose = true;\n                }\n                return true;\n            } else {\n                return false;\n            }\n        }\n        return {\n            receivePlayerAttack,\n            getIsPlayerLost,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(len) {\n        this.length = len;\n        this.life = len;\n        this.isSunk = false;\n        this.isVertical = false;\n        this.body = new Array(len).fill(0);\n\n        const hit = (pos) => {\n            //pos index from 1\n            if (this.body[pos - 1] === 0) {\n                // make sure the postion is unhit\n                this.body[pos - 1] = 1; // set pos to be 1, means got hit\n                this.life--;\n            }\n\n            if (this.life === 0) {\n                this.isSunk = true;\n            }\n        };\n        const getLength = () => this.length;\n        //const setIsSunk = (tf) => (this.isSunk = tf);\n        const getIsSunk = () => this.isSunk;\n        const setIsVertical = (tf) => (this.isVertical = tf);\n        const getIsVertical = () => this.isVertical;\n\n        return {\n            getLength,\n            getIsSunk,\n            hit,\n            setIsVertical,\n            getIsVertical,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/Ship.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;