"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_productServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/productServices */ \"(api)/./services/productServices.js\");\n\nfunction handler(req, res) {\n    const products = (0,_services_productServices__WEBPACK_IMPORTED_MODULE_0__.getAllProducts)();\n    res.status(200).json(products);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEQ7QUFFN0MsU0FBU0MsUUFBUUMsR0FBRyxFQUFHQyxHQUFHO0lBQ3JDLE1BQU1DLFdBQVdKLHlFQUFjQTtJQUNuQ0csSUFBSUUsT0FBTyxLQUFLQyxLQUFLRjtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtYXBpLXJvdXRlc19wcm9kdWN0cy8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC5qcz81OTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFByb2R1Y3RzIH0gZnJvbSBcIkAvc2VydmljZXMvcHJvZHVjdFNlcnZpY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxICwgcmVzKXtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGdldEFsbFByb2R1Y3RzKCk7XG5yZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XG59Il0sIm5hbWVzIjpbImdldEFsbFByb2R1Y3RzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByb2R1Y3RzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ }),

/***/ "(api)/./services/productServices.js":
/*!*************************************!*\
  !*** ./services/productServices.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllProducts: () => (/* binding */ getAllProducts),\n/* harmony export */   getProductById: () => (/* binding */ getProductById)\n/* harmony export */ });\nconst products = [\n    {\n        id: \"1\",\n        name: \"Shrimp\",\n        description: \"Prefers to live in pairs\",\n        price: 19,\n        currency: \"€\",\n        category: \"Invertebrates\"\n    },\n    {\n        id: \"2\",\n        name: \"Anemonefish\",\n        description: \"Nemo\",\n        price: 65,\n        currency: \"€\",\n        category: \"Seawater\"\n    },\n    {\n        id: \"3\",\n        name: \"Splendid anemone\",\n        description: \"Is splendid\",\n        price: 90,\n        currency: \"€\",\n        category: \"Corals and floral animals\"\n    },\n    {\n        id: \"4\",\n        name: \"Killer mussel\",\n        description: \"Is prettier than her name\",\n        price: 12,\n        currency: \"€\",\n        category: \"Mussels\"\n    },\n    {\n        id: \"5\",\n        name: \"Angelfish\",\n        description: \"A diurnal loner\",\n        price: 90,\n        currency: \"€\",\n        category: \"Seawater\"\n    },\n    {\n        id: \"6\",\n        name: \"Guppy\",\n        description: \"Small but nice\",\n        price: 5,\n        currency: \"€\",\n        category: \"Freshwater\"\n    },\n    {\n        id: \"7\",\n        name: \"Rainbow fish\",\n        description: \"In all colors\",\n        price: 12,\n        currency: \"€\",\n        category: \"Freshwater\"\n    }\n];\nfunction getAllProducts() {\n    return products;\n}\nfunction getProductById(id) {\n    return products.find((product)=>product.id === id);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9kdWN0U2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO1FBRVBDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtDQUNEO0FBRU0sU0FBU0M7SUFDZCxPQUFPUDtBQUNUO0FBRU8sU0FBU1EsZUFBZVAsRUFBRTtJQUMvQixPQUFPRCxTQUFTUyxLQUFLLENBQUNDLFVBQVlBLFFBQVFULE9BQU9BO0FBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1hcGktcm91dGVzX3Byb2R1Y3RzLy4vc2VydmljZXMvcHJvZHVjdFNlcnZpY2VzLmpzP2RhMDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJTaHJpbXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmVmZXJzIHRvIGxpdmUgaW4gcGFpcnNcIixcbiAgICBwcmljZTogMTksXG4gICAgY3VycmVuY3k6IFwi4oKsXCIsXG4gICAgY2F0ZWdvcnk6IFwiSW52ZXJ0ZWJyYXRlc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG5hbWU6IFwiQW5lbW9uZWZpc2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOZW1vXCIsXG4gICAgcHJpY2U6IDY1LFxuICAgIGN1cnJlbmN5OiBcIuKCrFwiLFxuICAgIGNhdGVnb3J5OiBcIlNlYXdhdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCIzXCIsXG4gICAgbmFtZTogXCJTcGxlbmRpZCBhbmVtb25lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXMgc3BsZW5kaWRcIixcbiAgICBwcmljZTogOTAsXG4gICAgY3VycmVuY3k6IFwi4oKsXCIsXG4gICAgY2F0ZWdvcnk6IFwiQ29yYWxzIGFuZCBmbG9yYWwgYW5pbWFsc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNFwiLFxuICAgIG5hbWU6IFwiS2lsbGVyIG11c3NlbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklzIHByZXR0aWVyIHRoYW4gaGVyIG5hbWVcIixcbiAgICBwcmljZTogMTIsXG4gICAgY3VycmVuY3k6IFwi4oKsXCIsXG4gICAgY2F0ZWdvcnk6IFwiTXVzc2Vsc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNVwiLFxuICAgIG5hbWU6IFwiQW5nZWxmaXNoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkaXVybmFsIGxvbmVyXCIsXG4gICAgcHJpY2U6IDkwLFxuICAgIGN1cnJlbmN5OiBcIuKCrFwiLFxuICAgIGNhdGVnb3J5OiBcIlNlYXdhdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI2XCIsXG4gICAgbmFtZTogXCJHdXBweVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNtYWxsIGJ1dCBuaWNlXCIsXG4gICAgcHJpY2U6IDUsXG5cbiAgICBjdXJyZW5jeTogXCLigqxcIixcbiAgICBjYXRlZ29yeTogXCJGcmVzaHdhdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI3XCIsXG4gICAgbmFtZTogXCJSYWluYm93IGZpc2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbiBhbGwgY29sb3JzXCIsXG4gICAgcHJpY2U6IDEyLFxuICAgIGN1cnJlbmN5OiBcIuKCrFwiLFxuICAgIGNhdGVnb3J5OiBcIkZyZXNod2F0ZXJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0cygpIHtcbiAgcmV0dXJuIHByb2R1Y3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcbiAgcmV0dXJuIHByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKTtcbn1cbiJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJjdXJyZW5jeSIsImNhdGVnb3J5IiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRQcm9kdWN0QnlJZCIsImZpbmQiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/productServices.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();