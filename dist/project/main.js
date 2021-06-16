(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _task_and_solve_page_task_and_solve_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-and-solve-page/task-and-solve-page.component */ "./src/app/task-and-solve-page/task-and-solve-page.component.ts");
/* harmony import */ var _create_only_task_create_only_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-only-task/create-only-task.component */ "./src/app/create-only-task/create-only-task.component.ts");
/* harmony import */ var _create_only_solve_create_only_solve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-only-solve/create-only-solve.component */ "./src/app/create-only-solve/create-only-solve.component.ts");
/* harmony import */ var _total_board_page_total_board_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./total-board-page/total-board-page.component */ "./src/app/total-board-page/total-board-page.component.ts");
/* harmony import */ var _solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solve-page/solve-page.component */ "./src/app/solve-page/solve-page.component.ts");









const routes = [
    { path: 'task_and_solve', component: _task_and_solve_page_task_and_solve_page_component__WEBPACK_IMPORTED_MODULE_2__["TaskAndSolvePageComponent"] },
    { path: 'create_only_task', component: _create_only_task_create_only_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateOnlyTaskComponent"] },
    { path: 'create_only_solve', component: _create_only_solve_create_only_solve_component__WEBPACK_IMPORTED_MODULE_4__["CreateOnlySolveComponent"] },
    { path: 'total', component: _total_board_page_total_board_page_component__WEBPACK_IMPORTED_MODULE_5__["TotalBoardPageComponent"] },
    { path: 'solve', component: _solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_6__["SolvePageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solve-page/solve-page.component */ "./src/app/solve-page/solve-page.component.ts");



class AppComponent {
    constructor() {
        this.title = 'project';
        this.spaceTemplate = ' ';
        this.tst = 'Вася';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["role", "banner", 1, "x", "toolbar"], [1, "x", "left"], [1, "x", "name"], [1, "add-name"], [1, "right", "x"], ["href", "https://github.com/mirabu2801/hse_project_2021", "target", "_blank", 1, "github-project", "x"], [1, "github-project-logo"], ["src", "https://image.flaticon.com/icons/png/512/25/25231.png", "alt", ""], [1, "github-project-text"], [1, "content-page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A \u0438\u0437 1\u043E\u0433\u043E \u043B\u0438\u0446\u0430 \u0432 3\u0435\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-solve-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_1__["SolvePageComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Concert+One&display=swap\");\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  background: #ffffff;\n  border-bottom: 1px solid #e6e6e6;\n  padding: 0 20px;\n  justify-content: space-between;\n}\n.toolbar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 330px;\n  flex-shrink: 0;\n}\n.toolbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-shrink: 1;\n  justify-content: center;\n}\n.menu-e[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 500;\n  height: 100%;\n  padding: 0 10px;\n  outline: none;\n  border: none;\n  border-bottom: 3px solid rgba(0, 0, 0, 0);\n}\n.menu-e[_ngcontent-%COMP%]:hover {\n  color: #1DA1F2;\n  background: rgba(29, 161, 242, 0.05);\n}\n.menu-e-active[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  border-bottom: 3px solid #1DA1F2;\n}\n.second-color[_ngcontent-%COMP%] {\n  color: #9D9FA3;\n  font-weight: 500;\n}\nbody[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.x[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.main-name[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  font-family: \"Pacifico\", cursive;\n  font-size: 27px;\n  font-weight: 700;\n  margin-right: 12px;\n}\n.add-name[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #71747A;\n  font-size: 22px;\n}\n.list-options[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n}\n.wrap-option-translate[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.option-translate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 9px 18px;\n  border-radius: 50px;\n}\n.option-translate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  fill: #1DA1F2;\n  background: rgba(29, 161, 242, 0.1);\n}\n.translator[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.translator-header-left-name[_ngcontent-%COMP%], .translator-header-right-name[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n}\n.translator-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  border-bottom: 1px solid #e6e6e6;\n  justify-content: center;\n}\n.translator-header-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.translator-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.translator-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 200px;\n  height: 100%;\n  border-right: 1px solid #e6e6e6;\n}\n.translator-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.translator-output[_ngcontent-%COMP%] {\n  min-height: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.translator-output[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.output-data[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px 20px;\n}\n.word-select[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  cursor: pointer;\n  background: rgba(29, 161, 242, 0.1);\n}\n.word[_ngcontent-%COMP%] {\n  position: relative;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%] {\n  position: absolute;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  bottom: -5px;\n  left: 0;\n  transform: translateY(100%);\n  padding: 5px 0;\n  border-radius: 3px;\n  z-index: 1;\n  background: white;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 9px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.github-project[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px 5px 5px 10px;\n  border-radius: 6px;\n  transition: 0.1s;\n  color: #333333;\n  outline: none;\n}\n.github-project-logo[_ngcontent-%COMP%] {\n  width: 33px;\n}\n.github-project-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  margin: 0 10px;\n}\n@media (max-width: 767.98px) {\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .add-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .github-project-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n    width: 50% !important;\n    flex-shrink: 1 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREUSxpSEFBQTtBQUNBLGdGQUFBO0FBN0RSO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBR0Y7QUFGRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBSUo7QUFGRTtFQUNFLHlCQUFBO0FBSUo7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBR0Y7QUFEQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFJRjtBQUhFO0VBQ0UsY0FBQTtFQUNBLG9DQUFBO0FBS0o7QUFGQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQUtGO0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7QUFHRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFJQSxpQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFIRTtFQUNFLGtCQUFBO0FBS0o7QUFDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBR0Y7QUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBR0Y7QUFERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdKO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVGO0FBREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFHSjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFERTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBR0o7QUFGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUlOO0FBSE07RUFDRSxtQkFBQTtBQUtSO0FBRUEsSUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGO0FBU0E7RUFDRTtJQUNFLGFBQUE7RUFORjs7RUFRQTtJQUNFLGFBQUE7RUFMRjs7RUFPQTtJQUNFLGFBQUE7RUFKRjs7RUFNQTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnI2Nsb3VkcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTE2MHB4O1xyXG4gIGxlZnQ6IC0yMzBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuLnRvb2xiYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAubGVmdCwgLnJpZ2h0e1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gIC5yaWdodHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfTtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tZW51LWV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMCk7XHJcbiAgJjpob3ZlcntcclxuICAgIGNvbG9yOiAjMURBMUYyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMDUpO1xyXG4gIH1cclxufVxyXG4ubWVudS1lLWFjdGl2ZXtcclxuICBjb2xvcjogIzFEQTFGMjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFEQTFGMjtcclxufVxyXG5cclxuXHJcblxyXG4uc2Vjb25kLWNvbG9ye1xyXG4gIGNvbG9yOiAjOUQ5RkEzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMrQ29uZGVuc2VkOndnaHRAMzAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29uY2VydCtPbmUmZGlzcGxheT1zd2FwJyk7XHJcbi54e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tbmFtZXtcclxuICBjb2xvcjogIzFEQTFGMjtcclxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLmFkZC1uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3MTc0N0E7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubGlzdC1vcHRpb25ze1xyXG4gIHBhZGRpbmc6IDI1cHggMTVweDtcclxufVxyXG5cclxuLndyYXAtb3B0aW9uLXRyYW5zbGF0ZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24tdHJhbnNsYXRle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBzdmd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDlweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgY29sb3I6ICMxREExRjI7XHJcbiAgZmlsbDogIzFEQTFGMjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKTtcclxufVxyXG5cclxuLnRyYW5zbGF0b3J7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRyYW5zbGF0b3ItaGVhZGVyLWxlZnQtbmFtZSwgLnRyYW5zbGF0b3ItaGVhZGVyLXJpZ2h0LW5hbWV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXItYXJyb3d7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4udHJhbnNsYXRvci10ZXh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1pbnB1dHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNmU2ZTY7XHJcblxyXG4gIHRleHRhcmVhe1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLW91dHB1dHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dGFyZWF7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm91dHB1dC1kYXRhe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi53b3JkLXNlbGVjdHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpO1xyXG59XHJcblxyXG4ud29yZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLndvcmQtc2VsZWN0LW9wdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAud29yZC1zZWxlY3Qtb3B0aW9ucy1le1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKiovXHJcbi5naXRodWItcHJvamVjdHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2l0aHViLXByb2plY3QtbG9nb3tcclxuICB3aWR0aDogMzNweDtcclxufVxyXG5cclxuLmdpdGh1Yi1wcm9qZWN0LXRleHR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcblxyXG4vLyDQrdC60YHRgtGA0LDQvNCw0LvRi9C1INC00LXQstCw0LnRgdGLICjCq9GC0LXQu9C10YTQvtC90YvCuywgPCA1NzZweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcblxyXG59XHJcblxyXG4vLyDQnNCw0LvRi9C1INC00LXQstCw0LnRgdGLICjCq9C70LDQvdC00YjQsNGE0YLQvdGL0LXCuywgPCA3NjhweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLm1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYWRkLW5hbWV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZ2l0aHViLXByb2plY3QtdGV4dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5sZWZ0LCAucmlnaHR7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8g0KHRgNC10LTQvdC40LUg0LTQtdCy0LDQudGB0YsgKMKr0YLQsNCx0LvQtdGC0LrQuMK7LCA8IDk5MnB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuXHJcbn1cclxuXHJcbi8vINCR0L7Qu9GM0YjQuNC1INC00LXQstCw0LnRgdGLICjQsdC+0LvRjNGI0LjQtSDQtNC10YHQutGC0L7Qv9GLLCA8IDEyMDBweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _task_and_solve_page_task_and_solve_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-and-solve-page/task-and-solve-page.component */ "./src/app/task-and-solve-page/task-and-solve-page.component.ts");
/* harmony import */ var _create_only_task_create_only_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-only-task/create-only-task.component */ "./src/app/create-only-task/create-only-task.component.ts");
/* harmony import */ var _create_only_solve_create_only_solve_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-only-solve/create-only-solve.component */ "./src/app/create-only-solve/create-only-solve.component.ts");
/* harmony import */ var _total_board_page_total_board_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./total-board-page/total-board-page.component */ "./src/app/total-board-page/total-board-page.component.ts");
/* harmony import */ var _solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solve-page/solve-page.component */ "./src/app/solve-page/solve-page.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_14__["ClickOutsideModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _task_and_solve_page_task_and_solve_page_component__WEBPACK_IMPORTED_MODULE_9__["TaskAndSolvePageComponent"],
        _create_only_task_create_only_task_component__WEBPACK_IMPORTED_MODULE_10__["CreateOnlyTaskComponent"],
        _create_only_solve_create_only_solve_component__WEBPACK_IMPORTED_MODULE_11__["CreateOnlySolveComponent"],
        _total_board_page_total_board_page_component__WEBPACK_IMPORTED_MODULE_12__["TotalBoardPageComponent"],
        _solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_13__["SolvePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"],
        ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_14__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _task_and_solve_page_task_and_solve_page_component__WEBPACK_IMPORTED_MODULE_9__["TaskAndSolvePageComponent"],
                    _create_only_task_create_only_task_component__WEBPACK_IMPORTED_MODULE_10__["CreateOnlyTaskComponent"],
                    _create_only_solve_create_only_solve_component__WEBPACK_IMPORTED_MODULE_11__["CreateOnlySolveComponent"],
                    _total_board_page_total_board_page_component__WEBPACK_IMPORTED_MODULE_12__["TotalBoardPageComponent"],
                    _solve_page_solve_page_component__WEBPACK_IMPORTED_MODULE_13__["SolvePageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"],
                    ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_14__["ClickOutsideModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: host, Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return Endpoints; });
const host = 'http://52.168.49.186:8000';
const Endpoints = {
    onlyTask: `${host}/get_original/`,
    createTask: `${host}/create_raw/`,
    createTaskAndSolve: `${host}/add_result/`,
    cnt: `${host}/count/`,
    algos: `${host}/algos/`,
};


/***/ }),

/***/ "./src/app/create-only-solve/create-only-solve.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/create-only-solve/create-only-solve.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateOnlySolveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOnlySolveComponent", function() { return CreateOnlySolveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");






function CreateOnlySolveComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u042F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 1\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u041E\u041D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 3\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateOnlySolveComponent_div_1_Template_textarea_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.inputText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateOnlySolveComponent_div_1_Template_textarea_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.outputText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateOnlySolveComponent_div_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateOnlySolveComponent_div_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.send(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.inputText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.outputText);
} }
class CreateOnlySolveComponent {
    constructor(userService) {
        this.userService = userService;
        this.inputText = '';
        this.outputText = '';
        this.task = null;
    }
    reset() {
        this.userService.getOnlyTask().subscribe(resp => {
            console.log('Получаем пример', resp);
            this.task = resp;
            this.inputText = this.task.text;
        });
    }
    send() {
        if (this.inputText.trim() === '' || this.outputText.trim() === '') {
            return;
        }
        if (this.inputText.split('\n').length !== this.outputText.split('\n').length) {
            alert('Не одинаковое кол-во переносов строки в текстах');
            return;
        }
        const tmp = {
            id: this.task.id,
            output: this.outputText
        };
        console.log('Отрпавляю новый текст + решение', tmp);
        this.userService.sendTaskAndSolve(tmp).subscribe(resp => {
            console.log('Все успешно создалося:', resp);
        });
        this.inputText = '';
        this.outputText = '';
    }
    ngOnInit() {
        this.reset();
    }
}
CreateOnlySolveComponent.ɵfac = function CreateOnlySolveComponent_Factory(t) { return new (t || CreateOnlySolveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
CreateOnlySolveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateOnlySolveComponent, selectors: [["app-create-only-solve"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "wrap-translator"], [1, "translator"], ["translator", ""], [1, "x", "translator-header"], [1, "translator-header-left-name"], [1, "second-color"], [1, "translator-header-arrow"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "r-13gxpu9", "r-4qtqp9", "r-yyyyoo", "r-1q142lx", "r-50lct3", "r-dnmrzs", "r-bnwqim", "r-1plcrui", "r-lrvibr", "r-1srniue"], ["d", "M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"], [1, "x", "translator-text"], [1, "translator-input"], ["disabled", "", "autosize", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043B\u0438\u0446\u0430", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "translator-output"], ["autosize", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043B\u0438\u0446\u0430", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "footer-trans"], [1, "second-button", 3, "click"], [1, "accent-button", 3, "click"]], template: function CreateOnlySolveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateOnlySolveComponent_div_1_Template, 27, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Concert+One&display=swap\");\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  overflow: hidden;\n}\n.layout-menu[_ngcontent-%COMP%] {\n  flex-shrink: 1;\n  flex-grow: 1;\n  z-index: 3;\n  height: 100%;\n  flex-direction: column;\n  -webkit-flex-shrink: 1;\n  -webkit-flex-grow: 1;\n  max-width: 320px;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.layout-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 0px;\n  flex-grow: 1;\n  min-width: 500px;\n  height: 100%;\n  flex-direction: column;\n  background-color: var(--backgroundPrimary);\n  z-index: 2;\n}\n.wrap-search-block[_ngcontent-%COMP%] {\n  padding: 0 16px 12px 16px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.search-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 38px;\n  padding: 8px 12px 8px 12px;\n  border-radius: 8px;\n  align-items: center;\n  background-color: rgba(201, 204, 209, 0.24);\n}\n.search-block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #9D9FA3;\n  margin-right: 6px;\n  flex-shrink: 0;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0);\n  outline: none;\n  border: none;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9D9FA3;\n}\n.layout-menu-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n  margin-right: 16px;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-size: 15px;\n}\n.layout-menu-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #4595E5 !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FFFFFF !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%] {\n  padding: 0 12px 4px 16px;\n  justify-content: space-between;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  padding: 7px 16px 7px 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n  align-items: center;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: relative;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: calc(100% - 62px);\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-description[_ngcontent-%COMP%] {\n  height: 18px;\n  min-width: 0;\n  color: #71747A;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.no-img[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #FFC619 0%, #FF7919 100%);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.header-page[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n  padding: 0 16px;\n  justify-content: space-between;\n}\n.header-page-left[_ngcontent-%COMP%], .header-page-right[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.go-back-ico[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.go-back-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.go-back-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.title-huge[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 3px;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  font-size: 24px;\n  font-weight: 700;\n}\n.default-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 15px;\n  line-height: 24px;\n  height: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  border-radius: 8px;\n}\n.accent-button[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #248BF2;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.accent-button[_ngcontent-%COMP%]:hover {\n  background-color: #3399FF;\n}\n.accent-button[_ngcontent-%COMP%]:active {\n  background-color: #1677D9;\n}\n.second-button[_ngcontent-%COMP%] {\n  color: #71747A;\n  background-color: #F2F3F4;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.second-button[_ngcontent-%COMP%]:hover {\n  background-color: #e8e9eb;\n}\n.second-button[_ngcontent-%COMP%]:active {\n  background-color: #d9dadb;\n}\n.mgr8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 40px;\n  padding: 5px 15px;\n  border-radius: 6px;\n}\n.x[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.main-name[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  font-family: \"Pacifico\", cursive;\n  font-size: 27px;\n  font-weight: 700;\n  margin-right: 12px;\n}\n.add-name[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #71747A;\n  font-size: 22px;\n}\n.list-options[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n}\n.wrap-option-translate[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.option-translate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 9px 18px;\n  border-radius: 50px;\n}\n.option-translate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  fill: #1DA1F2;\n  background: rgba(29, 161, 242, 0.1);\n}\n.translator[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.translator-header-left-name[_ngcontent-%COMP%], .translator-header-right-name[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n}\n.translator-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  border-bottom: 1px solid #e6e6e6;\n  justify-content: center;\n}\n.translator-header-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.translator-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.translator-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 200px;\n  height: 100%;\n  border-right: 1px solid #e6e6e6;\n}\n.translator-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.translator-output[_ngcontent-%COMP%] {\n  min-height: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.translator-output[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.output-data[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px 20px;\n}\n.word-select[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  cursor: pointer;\n  background: rgba(29, 161, 242, 0.1);\n}\n.word[_ngcontent-%COMP%] {\n  position: relative;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%] {\n  position: absolute;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  bottom: -5px;\n  left: 0;\n  transform: translateY(100%);\n  padding: 5px 0;\n  border-radius: 3px;\n  z-index: 1;\n  background: white;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 9px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.footer-trans[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\ntextarea[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW9ubHktc29sdmUvY3JlYXRlLW9ubHktc29sdmUuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLGdGQUFBO0FDOEVSO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEekVGO0FDK0VBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUlBLGdCQUFBO0VBQ0EsMkNBQUE7QUQ1RUY7QUMrRUE7RUFDRSxrQkFBQTtFQUlBLGFBQUE7RUFDQSxVQUFBO0VBSUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUdBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FENUVGO0FDK0VBO0VBRUUseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUQ3RUY7QUNnRkE7RUFJRSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsMkNBbEl3QjtBRHFEMUI7QUM4RUU7RUFDRSxhQWpKaUI7RUFrSmpCLGlCQUFBO0VBQ0EsY0FBQTtBRDVFSjtBQzhFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBRDVFSjtBQzZFSTtFQUNFLGNBNUplO0FEaUZyQjtBQ2dGQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUtBLGNBakxrQjtBRGtHcEI7QUNrRkk7RUFDRSxhQXBMZ0I7RUFxTGhCLGNBckxnQjtFQXNMaEIsa0JBQUE7QURoRk47QUNtRkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURqRko7QUNvRkU7RUFDRSxtQkE1THFCO0FEMEd6QjtBQ3VGRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QURwRko7QUNxRkk7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FEbkZOO0FDMEZFO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtBRHZGSjtBQ3dGSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0ExTmdCO0FEb0l0QjtBQ3lGSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUR2Rk47QUN3Rk07RUFDRSxhQXBPYztFQXFPZCxjQXJPYztBRCtJdEI7QUN3Rk07RUFDRSxtQkFsT2lCO0FENEl6QjtBQ2dHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBR0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUtBLGNBalFrQjtFQWtRbEIsbUJBQUE7QURoR0Y7QUNrR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEaEdKO0FDa0dFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBRGhHSjtBQ2lHSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEL0ZOO0FDaUdJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQXpSZ0I7RUEwUmhCLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUQvRk47QUNvR0U7RUFDRSxtQkE3UnFCO0FEMkx6QjtBQ3NHQTtFQUNFLG1FQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRG5HRjtBQ3NHQSxLQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBRHBHRjtBQ3NHQTtFQUNFLFlBQUE7QURuR0Y7QUNzR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRG5HRjtBQ29HRTtFQUNFLGFBclVrQjtFQXNVbEIsY0F0VWtCO0FEb090QjtBQ29HRTtFQUNFLG1CQW5VcUI7QURpT3pCO0FDc0dBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURuR0Y7QUNzR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURuR0Y7QUNzR0E7RUFDRSxjQS9WbUI7RUFnV25CLHlCQXpVYztFQTBVZCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRG5HRjtBQ29HRTtFQUNFLHlCQTlVaUI7QUQ0T3JCO0FDb0dFO0VBQ0UseUJBaFZrQjtBRDhPdEI7QUNzR0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRG5HRjtBQ29HRTtFQUNFLHlCQUFBO0FEbEdKO0FDb0dFO0VBQ0UseUJBQUE7QURsR0o7QUNzR0E7RUFDRSxpQkFBQTtBRG5HRjtBQ3NHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURuR0Y7QUFsU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFxU0Y7QUFsU0E7RUFDRSxnQkFBQTtBQXFTRjtBQWxTQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBcVNGO0FBblNBO0VBQ0UsOENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXNTRjtBQW5TQTtFQUNFLGtCQUFBO0FBc1NGO0FBblNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBc1NGO0FBblNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUlBLGlCQUFBO0VBQ0EsbUJBQUE7QUFtU0Y7QUF2U0U7RUFDRSxrQkFBQTtBQXlTSjtBQW5TQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUFzU0Y7QUFuU0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFzU0Y7QUFuU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFzU0Y7QUFuU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFzU0Y7QUFuU0E7RUFDRSx5QkFBQTtBQXNTRjtBQXBTQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQXVTRjtBQXBTQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBdVNGO0FBclNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdVNKO0FBblNBO0VBQ0UsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFzU0Y7QUFyU0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF1U0o7QUFuU0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFzU0Y7QUFuU0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQXNTRjtBQW5TQTtFQUNFLGtCQUFBO0FBc1NGO0FBclNFO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUF1U0o7QUF0U0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF3U047QUF2U007RUFDRSxtQkFBQTtBQXlTUjtBQW5TQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFzU0Y7QUFuU0E7RUFDRSxnQkFBQTtBQXNTRiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1vbmx5LXNvbHZlL2NyZWF0ZS1vbmx5LXNvbHZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zK0NvbmRlbnNlZDp3Z2h0QDMwMCZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbmNlcnQrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lLnNjc3NcIjtcclxuXHJcblxyXG4ueHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLm1haW4tbmFtZXtcclxuICBjb2xvcjogIzFEQTFGMjtcclxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLmFkZC1uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3MTc0N0E7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubGlzdC1vcHRpb25ze1xyXG4gIHBhZGRpbmc6IDI1cHggMTVweDtcclxufVxyXG5cclxuLndyYXAtb3B0aW9uLXRyYW5zbGF0ZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24tdHJhbnNsYXRle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBzdmd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDlweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgY29sb3I6ICMxREExRjI7XHJcbiAgZmlsbDogIzFEQTFGMjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKTtcclxufVxyXG5cclxuLnRyYW5zbGF0b3J7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRyYW5zbGF0b3ItaGVhZGVyLWxlZnQtbmFtZSwgLnRyYW5zbGF0b3ItaGVhZGVyLXJpZ2h0LW5hbWV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXItYXJyb3d7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4udHJhbnNsYXRvci10ZXh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1pbnB1dHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNmU2ZTY7XHJcblxyXG4gIHRleHRhcmVhe1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLW91dHB1dHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dGFyZWF7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm91dHB1dC1kYXRhe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi53b3JkLXNlbGVjdHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpO1xyXG59XHJcblxyXG4ud29yZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLndvcmQtc2VsZWN0LW9wdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAud29yZC1zZWxlY3Qtb3B0aW9ucy1le1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci10cmFuc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuIiwiJHRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4kZm9yZWdyb3VuZFByaW1hcnk6ICMxNzFBMUY7XHJcbiRmb3JlZ3JvdW5kU2Vjb25kYXJ5OiAjNzE3NDdBO1xyXG4kZm9yZWdyb3VuZFRlcnRpYXJ5OiAjOUQ5RkEzO1xyXG4kZm9yZWdyb3VuZFF1YXRlcm5hcnk6ICNDOEM5Q0M7XHJcbiRmb3JlZ3JvdW5kQ29udHJhc3Q6ICNGRkZGRkY7XHJcbiRmb3JlZ3JvdW5kSW52ZXJ0ZWQ6ICNGRkZGRkY7XHJcbiRiYWNrZ3JvdW5kUHJpbWFyeTogI0ZGRkZGRjtcclxuJGJhY2tncm91bmRQcmltYXJ5SG92ZXI6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kUHJpbWFyeUFjdGl2ZTogI0YyRjNGNTtcclxuJGJhY2tncm91bmRTZWNvbmRhcnk6ICNGRkZGRkY7XHJcbiRiYWNrZ3JvdW5kU2Vjb25kYXJ5SG92ZXI6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kU2Vjb25kYXJ5QWN0aXZlOiAjRjJGM0Y1O1xyXG4kYmFja2dyb3VuZFRlcnRpYXJ5OiAjRjJGM0Y1O1xyXG4kYmFja2dyb3VuZFRlcnRpYXJ5SG92ZXI6ICNFREVFRjA7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlBY3RpdmU6ICNFNkU3RUI7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlUcmFuczogcmdiYSgyMDEsIDIwNCwgMjA5LCAwLjI0KTtcclxuJGJhY2tncm91bmRUZXJ0aWFyeUhvdmVyVHJhbnM6IHJnYmEoMTY5LCAxNzQsIDE4NCwgMC4yNCk7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlBY3RpdmVUcmFuczogcmdiYSgxNDgsIDE1NSwgMTY4LCAwLjI0KTtcclxuJGFjY2VudFBheTogIzE3MUExRjtcclxuJGFjY2VudFBheUhvdmVyOiAjMjEyMzI5O1xyXG4kYWNjZW50UGF5QWN0aXZlOiAjMzMzNzNEO1xyXG4kYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4kYm9yZGVyTGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiRiYWNrZ3JvdW5kQmx1clByaW1hcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XHJcbiRiYWNrZ3JvdW5kQmx1clNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcclxuJGJveFNoYWRvd1BvcHBlcjogMHB4IDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4kYm94U2hhZG93TW9kYWw6IDBweCA4cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwcHggMHB4IDk2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuJGFjY2VudFByaW1hcnk6ICMyNDhCRjI7XHJcbiRhY2NlbnRQcmltYXJ5SG92ZXI6ICMzMzk5RkY7XHJcbiRhY2NlbnRQcmltYXJ5QWN0aXZlOiAjMTY3N0Q5O1xyXG4kYWNjZW50UHJpbWFyeVRyYW5zOiByZ2JhKDI0LCAxMzMsIDI0MiwgMC4yNCk7XHJcbiRhY2NlbnRNdXRlZDogIzQ1OTVFNTtcclxuJGFjY2VudE11dGVkSG92ZXI6ICM0NTk1RTU7XHJcbiRhY2NlbnRNdXRlZEFjdGl2ZTogIzQ1OTVFNTtcclxuJGFjY2VudFBvc2l0aXZlOiAjNDBCODU1O1xyXG4kYWNjZW50UG9zaXRpdmVIb3ZlcjogIzUyQ0M2NjtcclxuJGFjY2VudFBvc2l0aXZlQWN0aXZlOiAjMzJBNjQ1O1xyXG4kYWNjZW50TmVnYXRpdmU6ICNGMjMwNTE7XHJcbiRhY2NlbnROZWdhdGl2ZUhvdmVyOiAjRkY0MDYwO1xyXG4kYWNjZW50TmVnYXRpdmVBY3RpdmU6ICNEOTIxNDA7XHJcbiRvdmVybGF5VG90YWw6ICMwMDAwMDA7XHJcbiRvdmVybGF5SGVhdnk6IHJnYmEoMCwgMCwgMCwgMC44NCk7XHJcbiRvdmVybGF5TWVkaXVtOiByZ2JhKDAsIDAsIDAsIDAuNDgpO1xyXG4kb3ZlcmxheUxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4vLyRzcGFjZUJhY2tncm91bmRQcmltYXJ5OiBsaW5lYXIgLSBncmFkaWVudCgxODBkZWcsICMwRjBGMjkgMCAlLCAjMjYxQjNEIDEwMCAlKTtcclxuJHNwYWNlQmFja2dyb3VuZFNlY29uZGFyeTogIzM2MzE1MjtcclxuJHNwYWNlQmFja2dyb3VuZFRlcnRpYXJ5OiAjNUE1MzdBO1xyXG4kdGludFJlZDogI0YyMzA1MTtcclxuJHRpbnRSZWRIb3ZlcjogI0ZGNDA2MDtcclxuJHRpbnRSZWRBY3RpdmU6ICNEOTIxNDA7XHJcbiR0aW50T3JhbmdlOiAjRkY5RjFBO1xyXG4kdGludE9yYW5nZUhvdmVyOiAjRkZCQjMzO1xyXG4kdGludE9yYW5nZUFjdGl2ZTogI0YyN0YwQztcclxuJHRpbnRHcmVlbjogIzQwQjg1NTtcclxuJHRpbnRHcmVlbkhvdmVyOiAjNTJDQzY2O1xyXG4kdGludEdyZWVuQWN0aXZlOiAjMzJBNjQ1O1xyXG4kdGludEN5YW46ICMzNkJFRDk7XHJcbiR0aW50Q3lhbkhvdmVyOiAjNDVDQkU1O1xyXG4kdGludEN5YW5BY3RpdmU6ICMyNkExQkY7XHJcbiR0aW50Qmx1ZTogIzI0OEJGMjtcclxuJHRpbnRCbHVlSG92ZXI6ICMzMzk5RkY7XHJcbiR0aW50Qmx1ZUFjdGl2ZTogIzE2NzdEOTtcclxuJHRpbnRQdXJwbGU6ICM3QTI0RjI7XHJcbiR0aW50UHVycGxlSG92ZXI6ICM4ODMzRkY7XHJcbiR0aW50UHVycGxlQWN0aXZlOiAjNjExNENDO1xyXG4kdGludFBpbms6ICNFNTM5QUM7XHJcbiR0aW50UGlua0hvdmVyOiAjRjI0OUJBO1xyXG4kdGludFBpbmtBY3RpdmU6ICNDQzFGOTM7XHJcbiR0aW50R3JleTogIzcxNzQ3QTtcclxuJHRpbnRHcmV5SG92ZXI6ICM4MTg0OEE7XHJcbiR0aW50R3JleUFjdGl2ZTogIzVDNUY2NjtcclxuJHRpbnRJbnZlcnRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKTtcclxuLy8kZmVhdHVyZWQgLSBpY29uIC0gZGlzcGxheTogZmxleDtcclxuLy8kc2VjcmV0IC0gY2hhdCAtIHRpdGxlIC0gY29sb3I6IHZhcigkZm9yZWdyb3VuZFByaW1hcnkpO1xyXG4vLyRzZWNyZXQgLSBjaGF0IC0gaWNvbiAtIGRpc3BsYXk6IG5vbmU7XHJcbi8vJGVtb2ppIC0gc2l6ZTogMzhweDtcclxuXHJcblxyXG4ubGF5b3V0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmxheW91dC1tZW51e1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG59XHJcblxyXG4ubGF5b3V0LWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFByaW1hcnkpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi53cmFwLXNlYXJjaC1ibG9ja3tcclxuICAvL21hcmdpbi10b3A6IDEycHg7XHJcbiAgcGFkZGluZzogMCAxNnB4IDEycHggMTZweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJsb2Nre1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kVGVydGlhcnlUcmFucztcclxuICBzdmd7XHJcbiAgICBmaWxsOiAkZm9yZWdyb3VuZFRlcnRpYXJ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFRlcnRpYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LWJsb2Nre1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIC8vYmFja2dyb3VuZDogcmVkO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgY29sb3I6ICRmb3JlZ3JvdW5kUHJpbWFyeTtcclxuXHJcbiAgLmxheW91dC1tZW51LWJsb2NrLWljb3tcclxuICAgIHN2Z3tcclxuICAgICAgZmlsbDogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubGF5b3V0LW1lbnUtYmxvY2stdGV4dHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LWxpc3QsIC5sYXlvdXQtbWVudS13b3Jrc3BhY2Vze1xyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudE11dGVkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGZvcmVncm91bmRDb250cmFzdCAhaW1wb3J0YW50O1xyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogJGZvcmVncm91bmRDb250cmFzdCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogJGZvcmVncm91bmRDb250cmFzdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LXdvcmtzcGFjZXN7XHJcbiAgLy9tYXJnaW4tdG9wOiAyNHB4O1xyXG4gIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLXRpdGxle1xyXG4gICAgcGFkZGluZzogMCAxMnB4IDRweCAxNnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxheW91dC1tZW51LXdvcmtzcGFjZXMtdGl0bGUtaWNve1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHN2Z3tcclxuICAgICAgICBmaWxsOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgICBjb2xvcjogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZFByaW1hcnlIb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LXdvcmtzcGFjZXMtYmxvY2t7XHJcblxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9ja3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8vbWluLWhlaWdodDogNjBweDtcclxuICAvL2JhY2tncm91bmQ6IHJlZDtcclxuICBwYWRkaW5nOiA3cHggMTZweCA3cHggMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgY29sb3I6ICRmb3JlZ3JvdW5kUHJpbWFyeTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9jay1pbWd7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9jay10ZXh0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjJweCk7XHJcbiAgICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9jay10ZXh0LW5hbWV7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIH1cclxuICAgIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLXRleHQtZGVzY3JpcHRpb257XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICBjb2xvcjogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLm5vLWltZ3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkZDNjE5IDAlLCAjRkY3OTE5IDEwMCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qKioqL1xyXG5cclxuLmhlYWRlci1wYWdle1xyXG4gIGhlaWdodDogNjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkZXItcGFnZS1sZWZ0LCAuaGVhZGVyLXBhZ2UtcmlnaHR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ28tYmFjay1pY297XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBzdmd7XHJcbiAgICBmaWxsOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICB9XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlLWh1Z2V7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmRlZmF1bHQtYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYWNjZW50LWJ1dHRvbntcclxuICBjb2xvcjogJGZvcmVncm91bmRDb250cmFzdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50UHJpbWFyeTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50UHJpbWFyeUhvdmVyO1xyXG4gIH1cclxuICAmOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRQcmltYXJ5QWN0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZC1idXR0b257XHJcbiAgY29sb3I6ICM3MTc0N0E7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOWViO1xyXG4gIH1cclxuICAmOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWRhZGI7XHJcbiAgfVxyXG59XHJcblxyXG4ubWdyOHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateOnlySolveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-only-solve',
                templateUrl: './create-only-solve.component.html',
                styleUrls: ['./create-only-solve.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/create-only-task/create-only-task.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-only-task/create-only-task.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateOnlyTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOnlyTaskComponent", function() { return CreateOnlyTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");





class CreateOnlyTaskComponent {
    constructor(userService) {
        this.userService = userService;
        this.inputText = '';
        this.outputText = '';
    }
    send() {
        if (this.inputText.trim() === '') {
            return;
        }
        const tmp = {
            text: this.inputText
        };
        console.log('Отрпавляю новый чисто текст', tmp);
        this.userService.createOnlyTask(tmp).subscribe(resp => {
            console.log('Все успешно создалося:', resp);
        });
        this.inputText = '';
    }
    ngOnInit() {
    }
}
CreateOnlyTaskComponent.ɵfac = function CreateOnlyTaskComponent_Factory(t) { return new (t || CreateOnlyTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
CreateOnlyTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateOnlyTaskComponent, selectors: [["app-create-only-task"]], decls: 18, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12", "wrap-translator"], [1, "translator"], ["translator", ""], [1, "x", "translator-header"], [1, "translator-header-left-name"], [1, "second-color"], [1, "x", "translator-text"], [1, "translator-input"], ["autosize", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043B\u0438\u0446\u0430", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "footer-trans"], [1, "second-button"], [1, "accent-button", 3, "click"]], template: function CreateOnlyTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u042F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 1\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateOnlyTaskComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateOnlyTaskComponent_Template_button_click_16_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_autosize__WEBPACK_IMPORTED_MODULE_3__["AutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Concert+One&display=swap\");\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  overflow: hidden;\n}\n.layout-menu[_ngcontent-%COMP%] {\n  flex-shrink: 1;\n  flex-grow: 1;\n  z-index: 3;\n  height: 100%;\n  flex-direction: column;\n  -webkit-flex-shrink: 1;\n  -webkit-flex-grow: 1;\n  max-width: 320px;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.layout-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 0px;\n  flex-grow: 1;\n  min-width: 500px;\n  height: 100%;\n  flex-direction: column;\n  background-color: var(--backgroundPrimary);\n  z-index: 2;\n}\n.wrap-search-block[_ngcontent-%COMP%] {\n  padding: 0 16px 12px 16px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.search-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 38px;\n  padding: 8px 12px 8px 12px;\n  border-radius: 8px;\n  align-items: center;\n  background-color: rgba(201, 204, 209, 0.24);\n}\n.search-block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #9D9FA3;\n  margin-right: 6px;\n  flex-shrink: 0;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0);\n  outline: none;\n  border: none;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9D9FA3;\n}\n.layout-menu-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n  margin-right: 16px;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-size: 15px;\n}\n.layout-menu-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #4595E5 !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FFFFFF !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%] {\n  padding: 0 12px 4px 16px;\n  justify-content: space-between;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  padding: 7px 16px 7px 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n  align-items: center;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: relative;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: calc(100% - 62px);\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-description[_ngcontent-%COMP%] {\n  height: 18px;\n  min-width: 0;\n  color: #71747A;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.no-img[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #FFC619 0%, #FF7919 100%);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.header-page[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n  padding: 0 16px;\n  justify-content: space-between;\n}\n.header-page-left[_ngcontent-%COMP%], .header-page-right[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.go-back-ico[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.go-back-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.go-back-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.title-huge[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 3px;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  font-size: 24px;\n  font-weight: 700;\n}\n.default-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 15px;\n  line-height: 24px;\n  height: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  border-radius: 8px;\n}\n.accent-button[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #248BF2;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.accent-button[_ngcontent-%COMP%]:hover {\n  background-color: #3399FF;\n}\n.accent-button[_ngcontent-%COMP%]:active {\n  background-color: #1677D9;\n}\n.second-button[_ngcontent-%COMP%] {\n  color: #71747A;\n  background-color: #F2F3F4;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.second-button[_ngcontent-%COMP%]:hover {\n  background-color: #e8e9eb;\n}\n.second-button[_ngcontent-%COMP%]:active {\n  background-color: #d9dadb;\n}\n.mgr8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 40px;\n  padding: 5px 15px;\n  border-radius: 6px;\n}\n.x[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.main-name[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  font-family: \"Pacifico\", cursive;\n  font-size: 27px;\n  font-weight: 700;\n  margin-right: 12px;\n}\n.add-name[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #71747A;\n  font-size: 22px;\n}\n.list-options[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n}\n.wrap-option-translate[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.option-translate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 9px 18px;\n  border-radius: 50px;\n}\n.option-translate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  fill: #1DA1F2;\n  background: rgba(29, 161, 242, 0.1);\n}\n.translator[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.translator-header-left-name[_ngcontent-%COMP%], .translator-header-right-name[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n}\n.translator-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  border-bottom: 1px solid #e6e6e6;\n  justify-content: center;\n}\n.translator-header-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.translator-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.translator-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 200px;\n  height: 100%;\n  border-right: 1px solid #e6e6e6;\n}\n.translator-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.translator-output[_ngcontent-%COMP%] {\n  min-height: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.translator-output[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.output-data[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px 20px;\n}\n.word-select[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  cursor: pointer;\n  background: rgba(29, 161, 242, 0.1);\n}\n.word[_ngcontent-%COMP%] {\n  position: relative;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%] {\n  position: absolute;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  bottom: -5px;\n  left: 0;\n  transform: translateY(100%);\n  padding: 5px 0;\n  border-radius: 3px;\n  z-index: 1;\n  background: white;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 9px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.footer-trans[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\ntextarea[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW9ubHktdGFzay9jcmVhdGUtb25seS10YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSxnRkFBQTtBQzhFUjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHpFRjtBQytFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFJQSxnQkFBQTtFQUNBLDJDQUFBO0FENUVGO0FDK0VBO0VBQ0Usa0JBQUE7RUFJQSxhQUFBO0VBQ0EsVUFBQTtFQUlBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBRDVFRjtBQytFQTtFQUVFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEN0VGO0FDZ0ZBO0VBSUUsYUFBQTtFQUdBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFJQSxtQkFBQTtFQUNBLDJDQWxJd0I7QURxRDFCO0FDOEVFO0VBQ0UsYUFqSmlCO0VBa0pqQixpQkFBQTtFQUNBLGNBQUE7QUQ1RUo7QUM4RUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUQ1RUo7QUM2RUk7RUFDRSxjQTVKZTtBRGlGckI7QUNnRkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFLQSxjQWpMa0I7QURrR3BCO0FDa0ZJO0VBQ0UsYUFwTGdCO0VBcUxoQixjQXJMZ0I7RUFzTGhCLGtCQUFBO0FEaEZOO0FDbUZFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFB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bUJBQUE7QUF5U1I7QUFuU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBc1NGO0FBblNBO0VBQ0UsZ0JBQUE7QUFzU0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtb25seS10YXNrL2NyZWF0ZS1vbmx5LXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMrQ29uZGVuc2VkOndnaHRAMzAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29uY2VydCtPbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUuc2Nzc1wiO1xyXG5cclxuXHJcbi54e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubWFpbi1uYW1le1xyXG4gIGNvbG9yOiAjMURBMUYyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4uYWRkLW5hbWV7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzcxNzQ3QTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5saXN0LW9wdGlvbnN7XHJcbiAgcGFkZGluZzogMjVweCAxNXB4O1xyXG59XHJcblxyXG4ud3JhcC1vcHRpb24tdHJhbnNsYXRle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm9wdGlvbi10cmFuc2xhdGV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHN2Z3tcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBjb2xvcjogIzFEQTFGMjtcclxuICBmaWxsOiAjMURBMUYyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpO1xyXG59XHJcblxyXG4udHJhbnNsYXRvcntcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXItbGVmdC1uYW1lLCAudHJhbnNsYXRvci1oZWFkZXItcmlnaHQtbmFtZXtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWhlYWRlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWhlYWRlci1hcnJvd3tcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi50cmFuc2xhdG9yLXRleHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWlucHV0e1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2ZTZlNjtcclxuXHJcbiAgdGV4dGFyZWF7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRyYW5zbGF0b3Itb3V0cHV0e1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0YXJlYXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ub3V0cHV0LWRhdGF7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG5cclxuLndvcmQtc2VsZWN0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMSk7XHJcbn1cclxuXHJcbi53b3Jke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAud29yZC1zZWxlY3Qtb3B0aW9uc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC53b3JkLXNlbGVjdC1vcHRpb25zLWV7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogM3B4IDlweDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLXRyYW5ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iLCIkdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiRmb3JlZ3JvdW5kUHJpbWFyeTogIzE3MUExRjtcclxuJGZvcmVncm91bmRTZWNvbmRhcnk6ICM3MTc0N0E7XHJcbiRmb3JlZ3JvdW5kVGVydGlhcnk6ICM5RDlGQTM7XHJcbiRmb3JlZ3JvdW5kUXVhdGVybmFyeTogI0M4QzlDQztcclxuJGZvcmVncm91bmRDb250cmFzdDogI0ZGRkZGRjtcclxuJGZvcmVncm91bmRJbnZlcnRlZDogI0ZGRkZGRjtcclxuJGJhY2tncm91bmRQcmltYXJ5OiAjRkZGRkZGO1xyXG4kYmFja2dyb3VuZFByaW1hcnlIb3ZlcjogI0YyRjNGNTtcclxuJGJhY2tncm91bmRQcmltYXJ5QWN0aXZlOiAjRjJGM0Y1O1xyXG4kYmFja2dyb3VuZFNlY29uZGFyeTogI0ZGRkZGRjtcclxuJGJhY2tncm91bmRTZWNvbmRhcnlIb3ZlcjogI0YyRjNGNTtcclxuJGJhY2tncm91bmRTZWNvbmRhcnlBY3RpdmU6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnk6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlIb3ZlcjogI0VERUVGMDtcclxuJGJhY2tncm91bmRUZXJ0aWFyeUFjdGl2ZTogI0U2RTdFQjtcclxuJGJhY2tncm91bmRUZXJ0aWFyeVRyYW5zOiByZ2JhKDIwMSwgMjA0LCAyMDksIDAuMjQpO1xyXG4kYmFja2dyb3VuZFRlcnRpYXJ5SG92ZXJUcmFuczogcmdiYSgxNjksIDE3NCwgMTg0LCAwLjI0KTtcclxuJGJhY2tncm91bmRUZXJ0aWFyeUFjdGl2ZVRyYW5zOiByZ2JhKDE0OCwgMTU1LCAxNjgsIDAuMjQpO1xyXG4kYWNjZW50UGF5OiAjMTcxQTFGO1xyXG4kYWNjZW50UGF5SG92ZXI6ICMyMTIzMjk7XHJcbiRhY2NlbnRQYXlBY3RpdmU6ICMzMzM3M0Q7XHJcbiRib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiRib3JkZXJMaWdodDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuJGJhY2tncm91bmRCbHVyUHJpbWFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcclxuJGJhY2tncm91bmRCbHVyU2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xyXG4kYm94U2hhZG93UG9wcGVyOiAwcHggOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDBweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiRib3hTaGFkb3dNb2RhbDogMHB4IDhweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDBweCAwcHggOTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4kYWNjZW50UHJpbWFyeTogIzI0OEJGMjtcclxuJGFjY2VudFByaW1hcnlIb3ZlcjogIzMzOTlGRjtcclxuJGFjY2VudFByaW1hcnlBY3RpdmU6ICMxNjc3RDk7XHJcbiRhY2NlbnRQcmltYXJ5VHJhbnM6IHJnYmEoMjQsIDEzMywgMjQyLCAwLjI0KTtcclxuJGFjY2VudE11dGVkOiAjNDU5NUU1O1xyXG4kYWNjZW50TXV0ZWRIb3ZlcjogIzQ1OTVFNTtcclxuJGFjY2VudE11dGVkQWN0aXZlOiAjNDU5NUU1O1xyXG4kYWNjZW50UG9zaXRpdmU6ICM0MEI4NTU7XHJcbiRhY2NlbnRQb3NpdGl2ZUhvdmVyOiAjNTJDQzY2O1xyXG4kYWNjZW50UG9zaXRpdmVBY3RpdmU6ICMzMkE2NDU7XHJcbiRhY2NlbnROZWdhdGl2ZTogI0YyMzA1MTtcclxuJGFjY2VudE5lZ2F0aXZlSG92ZXI6ICNGRjQwNjA7XHJcbiRhY2NlbnROZWdhdGl2ZUFjdGl2ZTogI0Q5MjE0MDtcclxuJG92ZXJsYXlUb3RhbDogIzAwMDAwMDtcclxuJG92ZXJsYXlIZWF2eTogcmdiYSgwLCAwLCAwLCAwLjg0KTtcclxuJG92ZXJsYXlNZWRpdW06IHJnYmEoMCwgMCwgMCwgMC40OCk7XHJcbiRvdmVybGF5TGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbi8vJHNwYWNlQmFja2dyb3VuZFByaW1hcnk6IGxpbmVhciAtIGdyYWRpZW50KDE4MGRlZywgIzBGMEYyOSAwICUsICMyNjFCM0QgMTAwICUpO1xyXG4kc3BhY2VCYWNrZ3JvdW5kU2Vjb25kYXJ5OiAjMzYzMTUyO1xyXG4kc3BhY2VCYWNrZ3JvdW5kVGVydGlhcnk6ICM1QTUzN0E7XHJcbiR0aW50UmVkOiAjRjIzMDUxO1xyXG4kdGludFJlZEhvdmVyOiAjRkY0MDYwO1xyXG4kdGludFJlZEFjdGl2ZTogI0Q5MjE0MDtcclxuJHRpbnRPcmFuZ2U6ICNGRjlGMUE7XHJcbiR0aW50T3JhbmdlSG92ZXI6ICNGRkJCMzM7XHJcbiR0aW50T3JhbmdlQWN0aXZlOiAjRjI3RjBDO1xyXG4kdGludEdyZWVuOiAjNDBCODU1O1xyXG4kdGludEdyZWVuSG92ZXI6ICM1MkNDNjY7XHJcbiR0aW50R3JlZW5BY3RpdmU6ICMzMkE2NDU7XHJcbiR0aW50Q3lhbjogIzM2QkVEOTtcclxuJHRpbnRDeWFuSG92ZXI6ICM0NUNCRTU7XHJcbiR0aW50Q3lhbkFjdGl2ZTogIzI2QTFCRjtcclxuJHRpbnRCbHVlOiAjMjQ4QkYyO1xyXG4kdGludEJsdWVIb3ZlcjogIzMzOTlGRjtcclxuJHRpbnRCbHVlQWN0aXZlOiAjMTY3N0Q5O1xyXG4kdGludFB1cnBsZTogIzdBMjRGMjtcclxuJHRpbnRQdXJwbGVIb3ZlcjogIzg4MzNGRjtcclxuJHRpbnRQdXJwbGVBY3RpdmU6ICM2MTE0Q0M7XHJcbiR0aW50UGluazogI0U1MzlBQztcclxuJHRpbnRQaW5rSG92ZXI6ICNGMjQ5QkE7XHJcbiR0aW50UGlua0FjdGl2ZTogI0NDMUY5MztcclxuJHRpbnRHcmV5OiAjNzE3NDdBO1xyXG4kdGludEdyZXlIb3ZlcjogIzgxODQ4QTtcclxuJHRpbnRHcmV5QWN0aXZlOiAjNUM1RjY2O1xyXG4kdGludEludmVydGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpO1xyXG4vLyRmZWF0dXJlZCAtIGljb24gLSBkaXNwbGF5OiBmbGV4O1xyXG4vLyRzZWNyZXQgLSBjaGF0IC0gdGl0bGUgLSBjb2xvcjogdmFyKCRmb3JlZ3JvdW5kUHJpbWFyeSk7XHJcbi8vJHNlY3JldCAtIGNoYXQgLSBpY29uIC0gZGlzcGxheTogbm9uZTtcclxuLy8kZW1vamkgLSBzaXplOiAzOHB4O1xyXG5cclxuXHJcbi5sYXlvdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubGF5b3V0LW1lbnV7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXI7XHJcbn1cclxuXHJcbi5sYXlvdXQtY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDBweDtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kUHJpbWFyeSk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLndyYXAtc2VhcmNoLWJsb2Nre1xyXG4gIC8vbWFyZ2luLXRvcDogMTJweDtcclxuICBwYWRkaW5nOiAwIDE2cHggMTJweCAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmxvY2t7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRUZXJ0aWFyeVRyYW5zO1xyXG4gIHN2Z3tcclxuICAgIGZpbGw6ICRmb3JlZ3JvdW5kVGVydGlhcnk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgY29sb3I6ICRmb3JlZ3JvdW5kVGVydGlhcnk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtYmxvY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgLy9iYWNrZ3JvdW5kOiByZWQ7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBjb2xvcjogJGZvcmVncm91bmRQcmltYXJ5O1xyXG5cclxuICAubGF5b3V0LW1lbnUtYmxvY2staWNve1xyXG4gICAgc3Zne1xyXG4gICAgICBmaWxsOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgY29sb3I6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sYXlvdXQtbWVudS1ibG9jay10ZXh0e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtbGlzdCwgLmxheW91dC1tZW51LXdvcmtzcGFjZXN7XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50TXV0ZWQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZm9yZWdyb3VuZENvbnRyYXN0ICFpbXBvcnRhbnQ7XHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiAkZm9yZWdyb3VuZENvbnRyYXN0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZENvbnRyYXN0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtd29ya3NwYWNlc3tcclxuICAvL21hcmdpbi10b3A6IDI0cHg7XHJcbiAgLmxheW91dC1tZW51LXdvcmtzcGFjZXMtdGl0bGV7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggNHB4IDE2cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFue1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy10aXRsZS1pY297XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgc3Zne1xyXG4gICAgICAgIGZpbGw6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gICAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9ja3tcclxuXHJcbn1cclxuXHJcbi5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2Nre1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLy9taW4taGVpZ2h0OiA2MHB4O1xyXG4gIC8vYmFja2dyb3VuZDogcmVkO1xyXG4gIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBjb2xvcjogJGZvcmVncm91bmRQcmltYXJ5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLWltZ3tcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLXRleHR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MnB4KTtcclxuICAgIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLXRleHQtbmFtZXtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgfVxyXG4gICAgLmxheW91dC1tZW51LXdvcmtzcGFjZXMtYmxvY2stdGV4dC1kZXNjcmlwdGlvbntcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8taW1ne1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkM2MTkgMCUsICNGRjc5MTkgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyoqKiovXHJcblxyXG4uaGVhZGVyLXBhZ2V7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmhlYWRlci1wYWdlLWxlZnQsIC5oZWFkZXItcGFnZS1yaWdodHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nby1iYWNrLWljb3tcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHN2Z3tcclxuICAgIGZpbGw6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtaHVnZXtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZGVmYXVsdC1idXR0b257XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hY2NlbnQtYnV0dG9ue1xyXG4gIGNvbG9yOiAkZm9yZWdyb3VuZENvbnRyYXN0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRQcmltYXJ5O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG4gICY6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFByaW1hcnlBY3RpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vjb25kLWJ1dHRvbntcclxuICBjb2xvcjogIzcxNzQ3QTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU5ZWI7XHJcbiAgfVxyXG4gICY6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGFkYjtcclxuICB9XHJcbn1cclxuXHJcbi5tZ3I4e1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateOnlyTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-only-task',
                templateUrl: './create-only-task.component.html',
                styleUrls: ['./create-only-task.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");












































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/solve-page/solve-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/solve-page/solve-page.component.ts ***!
  \****************************************************/
/*! exports provided: SolvePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolvePageComponent", function() { return SolvePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");







function SolvePageComponent_ng_container_30_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolvePageComponent_ng_container_30_ng_container_3_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const opt_r9 = ctx.$implicit; const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setChangeVariant(i_r5, opt_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r9, " ");
} }
function SolvePageComponent_ng_container_30_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function SolvePageComponent_ng_container_30_ng_container_3_div_1_Template_div_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.setSelectOutputId(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolvePageComponent_ng_container_30_ng_container_3_div_1_div_1_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.tmp[i_r5]);
} }
function SolvePageComponent_ng_container_30_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolvePageComponent_ng_container_30_ng_container_3_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectOutputId === i_r5);
} }
function SolvePageComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolvePageComponent_ng_container_30_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r5 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.setSelectOutputId(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SolvePageComponent_ng_container_30_ng_container_3_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("acceptChange", ctx_r1.tmp[i_r5] && ctx_r1.tmp[i_r5].length !== 0 - 1)("variableChange", ctx_r1.tmp[i_r5] && ctx_r1.tmp[i_r5].length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tmp[i_r5] && ctx_r1.tmp[i_r5].length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.spaceTemplate);
} }
function SolvePageComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u043E\u0436\u0434\u0438\u0442\u0435\u043B\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438, \u044D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SolvePageComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class SolvePageComponent {
    constructor(userService) {
        this.userService = userService;
        this.spaceTemplate = ' ';
        this.s = 'Начните вводить текст и он начнет переводиться в 3ее лицо.';
        this.id = null;
        this.tmp = { 4: ['он', 'текст'] };
        this.arr = [];
        this.wait = false;
        this.selectOutputId = -1;
        this.inputText = '';
    }
    setSelectOutputId(id) {
        setTimeout(() => {
            this.selectOutputId = id;
        }, 0);
    }
    closeSelectOutputId() {
        this.selectOutputId = -1;
    }
    setChangeVariant(id, val) {
        this.arr[id] = val;
        this.setSelectOutputId(-1);
    }
    getTranslateAlgos() {
        if (this.inputText.trim() === '') {
            return;
        }
        const tmp = {
            text: this.inputText,
        };
        console.log('Отрпавляю запрос алгосу', tmp);
        this.wait = true;
        this.userService.takeTranslateAlgos(tmp).subscribe(resp => {
            console.log('Алгос прислал:', resp);
            this.s = resp.result[0];
            this.arr = this.s.split(' ');
            this.tmp = resp.result[1];
            this.wait = false;
        });
    }
    ngOnInit() {
        this.uploadTask();
    }
    uploadTask() {
        this.userService.getOnlyTask().subscribe(value => {
            this.id = value.id;
            this.inputText = value.text;
            this.arr = value.text.split(' ');
            this.getTranslateAlgos();
        });
    }
    sendResult() {
        this.userService.sendTaskAndSolve({
            id: this.id,
            output: this.arr.join(' '),
        }).subscribe(value => {
            this.uploadTask();
        });
    }
}
SolvePageComponent.ɵfac = function SolvePageComponent_Factory(t) { return new (t || SolvePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
SolvePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolvePageComponent, selectors: [["app-solve-page"]], decls: 35, vars: 7, consts: [[1, "container", "wrap-page"], [1, "row"], [1, "col-12"], [1, "legend-title"], [1, "legend-block", "x"], [1, "legend-block-color", "acceptChange"], [1, "legend-block-text"], [1, "col-12", "wrap-translator"], [1, "translator"], ["translator", ""], [1, "x", "translator-header"], [1, "translator-header-left-name"], [1, "second-color"], [1, "translator-header-arrow"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "r-13gxpu9", "r-4qtqp9", "r-yyyyoo", "r-1q142lx", "r-50lct3", "r-dnmrzs", "r-bnwqim", "r-1plcrui", "r-lrvibr", "r-1srniue"], ["d", "M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"], [1, "x", "translator-text"], [1, "translator-input"], ["autosize", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043B\u0438\u0446\u0430", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "translator-output"], [1, "output-data"], [4, "ngFor", "ngForOf"], [1, "footer-trans"], [1, "accent-button", 3, "disabled", "click"], [4, "ngIf"], [1, "word", 3, "click"], [1, "word"], ["class", "word-select-options", 3, "clickOutside", 4, "ngIf"], [1, "word-select-options", 3, "clickOutside"], ["class", "word-select-options-e", 3, "click", 4, "ngFor", "ngForOf"], [1, "word-select-options-e", 3, "click"]], template: function SolvePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " - \u0438\u0437\u043C\u0435\u043D\u043D\u0435\u043D\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u042F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 1\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u041E\u041D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 3\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SolvePageComponent_Template_textarea_ngModelChange_27_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SolvePageComponent_ng_container_30_Template, 6, 7, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolvePageComponent_Template_button_click_32_listener() { return ctx.getTranslateAlgos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SolvePageComponent_ng_container_33_Template, 2, 0, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SolvePageComponent_ng_container_34_Template, 2, 0, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.wait === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.wait === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wait === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wait !== true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_autosize__WEBPACK_IMPORTED_MODULE_3__["AutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Concert+One&display=swap\");\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  overflow: hidden;\n}\n.layout-menu[_ngcontent-%COMP%] {\n  flex-shrink: 1;\n  flex-grow: 1;\n  z-index: 3;\n  height: 100%;\n  flex-direction: column;\n  -webkit-flex-shrink: 1;\n  -webkit-flex-grow: 1;\n  max-width: 320px;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.layout-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 0px;\n  flex-grow: 1;\n  min-width: 500px;\n  height: 100%;\n  flex-direction: column;\n  background-color: var(--backgroundPrimary);\n  z-index: 2;\n}\n.wrap-search-block[_ngcontent-%COMP%] {\n  padding: 0 16px 12px 16px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.search-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 38px;\n  padding: 8px 12px 8px 12px;\n  border-radius: 8px;\n  align-items: center;\n  background-color: rgba(201, 204, 209, 0.24);\n}\n.search-block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #9D9FA3;\n  margin-right: 6px;\n  flex-shrink: 0;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0);\n  outline: none;\n  border: none;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9D9FA3;\n}\n.layout-menu-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n  margin-right: 16px;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-size: 15px;\n}\n.layout-menu-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #4595E5 !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FFFFFF !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%] {\n  padding: 0 12px 4px 16px;\n  justify-content: space-between;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  padding: 7px 16px 7px 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n  align-items: center;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: relative;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: calc(100% - 62px);\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-description[_ngcontent-%COMP%] {\n  height: 18px;\n  min-width: 0;\n  color: #71747A;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.no-img[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #FFC619 0%, #FF7919 100%);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.header-page[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n  padding: 0 16px;\n  justify-content: space-between;\n}\n.header-page-left[_ngcontent-%COMP%], .header-page-right[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.go-back-ico[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.go-back-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.go-back-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.title-huge[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 3px;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  font-size: 24px;\n  font-weight: 700;\n}\n.default-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 15px;\n  line-height: 24px;\n  height: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  border-radius: 8px;\n}\n.accent-button[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #248BF2;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.accent-button[_ngcontent-%COMP%]:hover {\n  background-color: #3399FF;\n}\n.accent-button[_ngcontent-%COMP%]:active {\n  background-color: #1677D9;\n}\n.second-button[_ngcontent-%COMP%] {\n  color: #71747A;\n  background-color: #F2F3F4;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.second-button[_ngcontent-%COMP%]:hover {\n  background-color: #e8e9eb;\n}\n.second-button[_ngcontent-%COMP%]:active {\n  background-color: #d9dadb;\n}\n.mgr8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 40px;\n  padding: 5px 15px;\n  border-radius: 6px;\n}\n.x[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding-bottom: 60px;\n}\n.main-name[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  font-family: \"Pacifico\", cursive;\n  font-size: 27px;\n  font-weight: 700;\n  margin-right: 12px;\n}\n.add-name[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #71747A;\n  font-size: 22px;\n}\n.list-options[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n}\n.wrap-option-translate[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.option-translate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 9px 18px;\n  border-radius: 50px;\n}\n.option-translate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  fill: #1DA1F2;\n  background: rgba(29, 161, 242, 0.1);\n}\n.translator[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n}\n.translator-header-left-name[_ngcontent-%COMP%], .translator-header-right-name[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n}\n.translator-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  border-bottom: 1px solid #e6e6e6;\n  justify-content: center;\n}\n.translator-header-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.translator-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: flex-start !important;\n}\n.translator-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 200px;\n  height: 100%;\n  border-right: 1px solid #e6e6e6;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.translator-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n  width: 100%;\n}\n.translator-output[_ngcontent-%COMP%] {\n  min-height: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}\n.translator-output[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n  width: 100%;\n  line-height: 1.5;\n}\n.output-data[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px 20px;\n  line-height: 1.5;\n}\n.word-select[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  cursor: pointer;\n  background: rgba(29, 161, 242, 0.1);\n}\n.word[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 3px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%] {\n  position: absolute;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  bottom: -5px;\n  right: 0;\n  transform: translateY(100%);\n  padding: 5px 0;\n  border-radius: 3px;\n  z-index: 1;\n  background: white;\n  max-width: 250px;\n  min-width: 200px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  padding: 6px 10px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.word-change[_ngcontent-%COMP%] {\n  background: rgba(29, 161, 242, 0.1);\n}\n.footer-trans[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  margin-top: 20px;\n}\ntextarea[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.acceptChange[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #8df0bb;\n}\n.variableChange[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #fdff7a;\n}\n.legend-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.legend-block-color[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 3px;\n  margin-right: 5px;\n}\n.legend-block[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.wrap-translator[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n@media (max-width: 767.98px) {\n  .translator-text[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n  }\n\n  .translator-input[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none !important;\n    border-bottom: 1px solid #e6e6e6;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sdmUtcGFnZS9zb2x2ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSxnRkFBQTtBQzhFUjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHpFRjtBQytFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFJQSxnQkFBQTtFQUNBLDJDQUFBO0FENUVGO0FDK0VBO0VBQ0Usa0JBQUE7RUFJQSxhQUFBO0VBQ0EsVUFBQTtFQUlBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBRDVFRjtBQytFQTtFQUVFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEN0VGO0FDZ0ZBO0VBSUUsYUFBQTtFQUdBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFJQSxtQkFBQTtFQUNBLDJDQWxJd0I7QURxRDFCO0FDOEVFO0VBQ0UsYUFqSmlCO0VBa0pqQixpQkFBQTtFQUNBLGNBQUE7QUQ1RUo7QUM4RUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUQ1RUo7QUM2RUk7RUFDRSxjQTVKZTtBRGlGckI7QUNnRkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFLQSxjQWpMa0I7QURrR3BCO0FDa0ZJO0VBQ0UsYUFwTGdCO0VBcUxoQixjQXJMZ0I7RUFzTGhCLGtCQUFBO0FEaEZOO0FDbUZFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEakZKO0FDb0ZF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QUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXVTSjtBQXJTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF1U047QUF0U007RUFDRSxtQkFBQTtBQXdTUjtBQWxTQTtFQUNFLG1DQUFBO0FBcVNGO0FBbFNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXFTRjtBQWxTQTtFQUNFLGdCQUFBO0FBcVNGO0FBbFNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBcVNGO0FBblNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBc1NGO0FBblNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQXNTRjtBQXBTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXVTRjtBQXJTQTtFQUNFLGtCQUFBO0FBd1NGO0FBdFNBO0VBQ0UsZ0JBQUE7QUF5U0Y7QUF0U0E7RUFDRSxZQUFBO0FBeVNGO0FBaFNBO0VBQ0U7SUFDRSwwQkFBQTtFQW1TRjs7RUFqU0E7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxnQ0FBQTtFQW9TRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc29sdmUtcGFnZS9zb2x2ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zK0NvbmRlbnNlZDp3Z2h0QDMwMCZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbmNlcnQrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lLnNjc3NcIjtcclxuXHJcblxyXG4ueHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLm1haW4tbmFtZXtcclxuICBjb2xvcjogIzFEQTFGMjtcclxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLmFkZC1uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3MTc0N0E7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubGlzdC1vcHRpb25ze1xyXG4gIHBhZGRpbmc6IDI1cHggMTVweDtcclxufVxyXG5cclxuLndyYXAtb3B0aW9uLXRyYW5zbGF0ZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24tdHJhbnNsYXRle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBzdmd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDlweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgY29sb3I6ICMxREExRjI7XHJcbiAgZmlsbDogIzFEQTFGMjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKTtcclxufVxyXG5cclxuLnRyYW5zbGF0b3J7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXItbGVmdC1uYW1lLCAudHJhbnNsYXRvci1oZWFkZXItcmlnaHQtbmFtZXtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWhlYWRlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWhlYWRlci1hcnJvd3tcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi50cmFuc2xhdG9yLXRleHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYW5zbGF0b3ItaW5wdXR7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB0ZXh0YXJlYXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLW91dHB1dHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHRhcmVhe1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbn1cclxuXHJcbi5vdXRwdXQtZGF0YXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi53b3JkLXNlbGVjdHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpO1xyXG59XHJcblxyXG4ud29yZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC53b3JkLXNlbGVjdC1vcHRpb25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuXHJcbiAgICAud29yZC1zZWxlY3Qtb3B0aW9ucy1le1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud29yZC1jaGFuZ2V7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMSk7XHJcbn1cclxuXHJcbi5mb290ZXItdHJhbnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uYWNjZXB0Q2hhbmdle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjOGRmMGJiO1xyXG59XHJcbi52YXJpYWJsZUNoYW5nZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZkZmY3YTtcclxufVxyXG5cclxuLmxlZ2VuZC10aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxlZ2VuZC1ibG9jay1jb2xvcntcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5sZWdlbmQtYmxvY2t7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi53cmFwLXRyYW5zbGF0b3J7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmRpc2FibGVke1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLy8g0K3QutGB0YLRgNCw0LzQsNC70YvQtSDQtNC10LLQsNC50YHRiyAowqvRgtC10LvQtdGE0L7QvdGLwrssIDwgNTc2cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG5cclxufVxyXG5cclxuLy8g0JzQsNC70YvQtSDQtNC10LLQsNC50YHRiyAowqvQu9Cw0L3QtNGI0LDRhNGC0L3Ri9C1wrssIDwgNzY4cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC50cmFuc2xhdG9yLXRleHR7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRyYW5zbGF0b3ItaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICB9XHJcbn1cclxuXHJcbi8vINCh0YDQtdC00L3QuNC1INC00LXQstCw0LnRgdGLICjCq9GC0LDQsdC70LXRgtC60LjCuywgPCA5OTJweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcblxyXG59XHJcblxyXG4vLyDQkdC+0LvRjNGI0LjQtSDQtNC10LLQsNC50YHRiyAo0LHQvtC70YzRiNC40LUg0LTQtdGB0LrRgtC+0L/RiywgPCAxMjAwcHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbn1cclxuIiwiJHRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4kZm9yZWdyb3VuZFByaW1hcnk6ICMxNzFBMUY7XHJcbiRmb3JlZ3JvdW5kU2Vjb25kYXJ5OiAjNzE3NDdBO1xyXG4kZm9yZWdyb3VuZFRlcnRpYXJ5OiAjOUQ5RkEzO1xyXG4kZm9yZWdyb3VuZFF1YXRlcm5hcnk6ICNDOEM5Q0M7XHJcbiRmb3JlZ3JvdW5kQ29udHJhc3Q6ICNGRkZGRkY7XHJcbiRmb3JlZ3JvdW5kSW52ZXJ0ZWQ6ICNGRkZGRkY7XHJcbiRiYWNrZ3JvdW5kUHJpbWFyeTogI0ZGRkZGRjtcclxuJGJhY2tncm91bmRQcmltYXJ5SG92ZXI6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kUHJpbWFyeUFjdGl2ZTogI0YyRjNGNTtcclxuJGJhY2tncm91bmRTZWNvbmRhcnk6ICNGRkZGRkY7XHJcbiRiYWNrZ3JvdW5kU2Vjb25kYXJ5SG92ZXI6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kU2Vjb25kYXJ5QWN0aXZlOiAjRjJGM0Y1O1xyXG4kYmFja2dyb3VuZFRlcnRpYXJ5OiAjRjJGM0Y1O1xyXG4kYmFja2dyb3VuZFRlcnRpYXJ5SG92ZXI6ICNFREVFRjA7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlBY3RpdmU6ICNFNkU3RUI7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlUcmFuczogcmdiYSgyMDEsIDIwNCwgMjA5LCAwLjI0KTtcclxuJGJhY2tncm91bmRUZXJ0aWFyeUhvdmVyVHJhbnM6IHJnYmEoMTY5LCAxNzQsIDE4NCwgMC4yNCk7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlBY3RpdmVUcmFuczogcmdiYSgxNDgsIDE1NSwgMTY4LCAwLjI0KTtcclxuJGFjY2VudFBheTogIzE3MUExRjtcclxuJGFjY2VudFBheUhvdmVyOiAjMjEyMzI5O1xyXG4kYWNjZW50UGF5QWN0aXZlOiAjMzMzNzNEO1xyXG4kYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4kYm9yZGVyTGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiRiYWNrZ3JvdW5kQmx1clByaW1hcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XHJcbiRiYWNrZ3JvdW5kQmx1clNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcclxuJGJveFNoYWRvd1BvcHBlcjogMHB4IDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4kYm94U2hhZG93TW9kYWw6IDBweCA4cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwcHggMHB4IDk2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuJGFjY2VudFByaW1hcnk6ICMyNDhCRjI7XHJcbiRhY2NlbnRQcmltYXJ5SG92ZXI6ICMzMzk5RkY7XHJcbiRhY2NlbnRQcmltYXJ5QWN0aXZlOiAjMTY3N0Q5O1xyXG4kYWNjZW50UHJpbWFyeVRyYW5zOiByZ2JhKDI0LCAxMzMsIDI0MiwgMC4yNCk7XHJcbiRhY2NlbnRNdXRlZDogIzQ1OTVFNTtcclxuJGFjY2VudE11dGVkSG92ZXI6ICM0NTk1RTU7XHJcbiRhY2NlbnRNdXRlZEFjdGl2ZTogIzQ1OTVFNTtcclxuJGFjY2VudFBvc2l0aXZlOiAjNDBCODU1O1xyXG4kYWNjZW50UG9zaXRpdmVIb3ZlcjogIzUyQ0M2NjtcclxuJGFjY2VudFBvc2l0aXZlQWN0aXZlOiAjMzJBNjQ1O1xyXG4kYWNjZW50TmVnYXRpdmU6ICNGMjMwNTE7XHJcbiRhY2NlbnROZWdhdGl2ZUhvdmVyOiAjRkY0MDYwO1xyXG4kYWNjZW50TmVnYXRpdmVBY3RpdmU6ICNEOTIxNDA7XHJcbiRvdmVybGF5VG90YWw6ICMwMDAwMDA7XHJcbiRvdmVybGF5SGVhdnk6IHJnYmEoMCwgMCwgMCwgMC44NCk7XHJcbiRvdmVybGF5TWVkaXVtOiByZ2JhKDAsIDAsIDAsIDAuNDgpO1xyXG4kb3ZlcmxheUxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4vLyRzcGFjZUJhY2tncm91bmRQcmltYXJ5OiBsaW5lYXIgLSBncmFkaWVudCgxODBkZWcsICMwRjBGMjkgMCAlLCAjMjYxQjNEIDEwMCAlKTtcclxuJHNwYWNlQmFja2dyb3VuZFNlY29uZGFyeTogIzM2MzE1MjtcclxuJHNwYWNlQmFja2dyb3VuZFRlcnRpYXJ5OiAjNUE1MzdBO1xyXG4kdGludFJlZDogI0YyMzA1MTtcclxuJHRpbnRSZWRIb3ZlcjogI0ZGNDA2MDtcclxuJHRpbnRSZWRBY3RpdmU6ICNEOTIxNDA7XHJcbiR0aW50T3JhbmdlOiAjRkY5RjFBO1xyXG4kdGludE9yYW5nZUhvdmVyOiAjRkZCQjMzO1xyXG4kdGludE9yYW5nZUFjdGl2ZTogI0YyN0YwQztcclxuJHRpbnRHcmVlbjogIzQwQjg1NTtcclxuJHRpbnRHcmVlbkhvdmVyOiAjNTJDQzY2O1xyXG4kdGludEdyZWVuQWN0aXZlOiAjMzJBNjQ1O1xyXG4kdGludEN5YW46ICMzNkJFRDk7XHJcbiR0aW50Q3lhbkhvdmVyOiAjNDVDQkU1O1xyXG4kdGludEN5YW5BY3RpdmU6ICMyNkExQkY7XHJcbiR0aW50Qmx1ZTogIzI0OEJGMjtcclxuJHRpbnRCbHVlSG92ZXI6ICMzMzk5RkY7XHJcbiR0aW50Qmx1ZUFjdGl2ZTogIzE2NzdEOTtcclxuJHRpbnRQdXJwbGU6ICM3QTI0RjI7XHJcbiR0aW50UHVycGxlSG92ZXI6ICM4ODMzRkY7XHJcbiR0aW50UHVycGxlQWN0aXZlOiAjNjExNENDO1xyXG4kdGludFBpbms6ICNFNTM5QUM7XHJcbiR0aW50UGlua0hvdmVyOiAjRjI0OUJBO1xyXG4kdGludFBpbmtBY3RpdmU6ICNDQzFGOTM7XHJcbiR0aW50R3JleTogIzcxNzQ3QTtcclxuJHRpbnRHcmV5SG92ZXI6ICM4MTg0OEE7XHJcbiR0aW50R3JleUFjdGl2ZTogIzVDNUY2NjtcclxuJHRpbnRJbnZlcnRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKTtcclxuLy8kZmVhdHVyZWQgLSBpY29uIC0gZGlzcGxheTogZmxleDtcclxuLy8kc2VjcmV0IC0gY2hhdCAtIHRpdGxlIC0gY29sb3I6IHZhcigkZm9yZWdyb3VuZFByaW1hcnkpO1xyXG4vLyRzZWNyZXQgLSBjaGF0IC0gaWNvbiAtIGRpc3BsYXk6IG5vbmU7XHJcbi8vJGVtb2ppIC0gc2l6ZTogMzhweDtcclxuXHJcblxyXG4ubGF5b3V0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmxheW91dC1tZW51e1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG59XHJcblxyXG4ubGF5b3V0LWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFByaW1hcnkpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi53cmFwLXNlYXJjaC1ibG9ja3tcclxuICAvL21hcmdpbi10b3A6IDEycHg7XHJcbiAgcGFkZGluZzogMCAxNnB4IDEycHggMTZweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJsb2Nre1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kVGVydGlhcnlUcmFucztcclxuICBzdmd7XHJcbiAgICBmaWxsOiAkZm9yZWdyb3VuZFRlcnRpYXJ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFRlcnRpYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LWJsb2Nre1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIC8vYmFja2dyb3VuZDogcmVkO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgY29sb3I6ICRmb3JlZ3JvdW5kUHJpbWFyeTtcclxuXHJcbiAgLmxheW91dC1tZW51LWJsb2NrLWljb3tcclxuICAgIHN2Z3tcclxuICAgICAgZmlsbDogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubGF5b3V0LW1lbnUtYmxvY2stdGV4dHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LWxpc3QsIC5sYXlvdXQtbWVudS13b3Jrc3BhY2Vze1xyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudE11dGVkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGZvcmVncm91bmRDb250cmFzdCAhaW1wb3J0YW50O1xyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogJGZvcmVncm91bmRDb250cmFzdCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogJGZvcmVncm91bmRDb250cmFzdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LXdvcmtzcGFjZXN7XHJcbiAgLy9tYXJnaW4tdG9wOiAyNHB4O1xyXG4gIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLXRpdGxle1xyXG4gICAgcGFkZGluZzogMCAxMnB4IDRweCAxNnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxheW91dC1tZW51LXdvcmtzcGFjZXMtdGl0bGUtaWNve1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHN2Z3tcclxuICAgICAgICBmaWxsOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgICBjb2xvcjogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZFByaW1hcnlIb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dC1tZW51LXdvcmtzcGFjZXMtYmxvY2t7XHJcblxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9ja3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8vbWluLWhlaWdodDogNjBweDtcclxuICAvL2JhY2tncm91bmQ6IHJlZDtcclxuICBwYWRkaW5nOiA3cHggMTZweCA3cHggMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgY29sb3I6ICRmb3JlZ3JvdW5kUHJpbWFyeTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9jay1pbWd7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9jay10ZXh0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjJweCk7XHJcbiAgICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9jay10ZXh0LW5hbWV7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIH1cclxuICAgIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLXRleHQtZGVzY3JpcHRpb257XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICBjb2xvcjogJGZvcmVncm91bmRTZWNvbmRhcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLm5vLWltZ3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkZDNjE5IDAlLCAjRkY3OTE5IDEwMCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qKioqL1xyXG5cclxuLmhlYWRlci1wYWdle1xyXG4gIGhlaWdodDogNjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkZXItcGFnZS1sZWZ0LCAuaGVhZGVyLXBhZ2UtcmlnaHR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ28tYmFjay1pY297XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBzdmd7XHJcbiAgICBmaWxsOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICB9XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlLWh1Z2V7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmRlZmF1bHQtYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYWNjZW50LWJ1dHRvbntcclxuICBjb2xvcjogJGZvcmVncm91bmRDb250cmFzdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50UHJpbWFyeTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50UHJpbWFyeUhvdmVyO1xyXG4gIH1cclxuICAmOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRQcmltYXJ5QWN0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZC1idXR0b257XHJcbiAgY29sb3I6ICM3MTc0N0E7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOWViO1xyXG4gIH1cclxuICAmOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWRhZGI7XHJcbiAgfVxyXG59XHJcblxyXG4ubWdyOHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolvePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solve-page',
                templateUrl: './solve-page.component.html',
                styleUrls: ['./solve-page.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/task-and-solve-page/task-and-solve-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/task-and-solve-page/task-and-solve-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: TaskAndSolvePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAndSolvePageComponent", function() { return TaskAndSolvePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");





class TaskAndSolvePageComponent {
    constructor(userService) {
        this.userService = userService;
        this.inputText = '';
        this.outputText = '';
    }
    send() {
        if (this.inputText.trim() === '' || this.outputText.trim() === '') {
            return;
        }
        if (this.inputText.split('\n').length !== this.outputText.split('\n').length) {
            alert('Не одинаковое кол-во переносов строки в текстах');
            return;
        }
        const tmp = {
            id: -1,
            input: this.inputText,
            output: this.outputText
        };
        console.log('Отрпавляю новый текст + решение', tmp);
        this.userService.sendTaskAndSolve(tmp).subscribe(resp => {
            console.log('Все успешно создалося:', resp);
        });
        this.inputText = '';
        this.outputText = '';
    }
    ngOnInit() {
    }
}
TaskAndSolvePageComponent.ɵfac = function TaskAndSolvePageComponent_Factory(t) { return new (t || TaskAndSolvePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
TaskAndSolvePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskAndSolvePageComponent, selectors: [["app-task-and-solve-page"]], decls: 28, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-12", "wrap-translator"], [1, "translator"], ["translator", ""], [1, "x", "translator-header"], [1, "translator-header-left-name"], [1, "second-color"], [1, "translator-header-arrow"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "r-13gxpu9", "r-4qtqp9", "r-yyyyoo", "r-1q142lx", "r-50lct3", "r-dnmrzs", "r-bnwqim", "r-1plcrui", "r-lrvibr", "r-1srniue"], ["d", "M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"], [1, "x", "translator-text"], [1, "translator-input"], ["autosize", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043B\u0438\u0446\u0430", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "translator-output"], ["autosize", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043B\u0438\u0446\u0430", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "footer-trans"], [1, "second-button"], [1, "accent-button", 3, "click"]], template: function TaskAndSolvePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u042F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 1\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041E\u041D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (\u0422\u0435\u043A\u0441\u0442 \u043E\u0442 3\u043E\u0433\u043E \u043B\u0438\u0446\u0430) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskAndSolvePageComponent_Template_textarea_ngModelChange_20_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskAndSolvePageComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.outputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskAndSolvePageComponent_Template_button_click_26_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.outputText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_autosize__WEBPACK_IMPORTED_MODULE_3__["AutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Concert+One&display=swap\");\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  overflow: hidden;\n}\n.layout-menu[_ngcontent-%COMP%] {\n  flex-shrink: 1;\n  flex-grow: 1;\n  z-index: 3;\n  height: 100%;\n  flex-direction: column;\n  -webkit-flex-shrink: 1;\n  -webkit-flex-grow: 1;\n  max-width: 320px;\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n}\n.layout-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 0px;\n  flex-grow: 1;\n  min-width: 500px;\n  height: 100%;\n  flex-direction: column;\n  background-color: var(--backgroundPrimary);\n  z-index: 2;\n}\n.wrap-search-block[_ngcontent-%COMP%] {\n  padding: 0 16px 12px 16px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.search-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 38px;\n  padding: 8px 12px 8px 12px;\n  border-radius: 8px;\n  align-items: center;\n  background-color: rgba(201, 204, 209, 0.24);\n}\n.search-block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #9D9FA3;\n  margin-right: 6px;\n  flex-shrink: 0;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0);\n  outline: none;\n  border: none;\n}\n.search-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9D9FA3;\n}\n.layout-menu-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n  margin-right: 16px;\n}\n.layout-menu-block[_ngcontent-%COMP%]   .layout-menu-block-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-size: 15px;\n}\n.layout-menu-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #4595E5 !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .layout-menu-workspaces[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FFFFFF !important;\n  color: #FFFFFF !important;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%] {\n  padding: 0 12px 4px 16px;\n  justify-content: space-between;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.layout-menu-workspaces[_ngcontent-%COMP%]   .layout-menu-workspaces-title[_ngcontent-%COMP%]   .layout-menu-workspaces-title-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  padding: 7px 16px 7px 16px;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  color: #171A1F;\n  align-items: center;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  position: relative;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: calc(100% - 62px);\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text[_ngcontent-%COMP%]   .layout-menu-workspaces-block-text-description[_ngcontent-%COMP%] {\n  height: 18px;\n  min-width: 0;\n  color: #71747A;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.layout-menu-workspaces-block[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.no-img[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #FFC619 0%, #FF7919 100%);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.header-page[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n  padding: 0 16px;\n  justify-content: space-between;\n}\n.header-page-left[_ngcontent-%COMP%], .header-page-right[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.go-back-ico[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  transition: 0.15s;\n  cursor: pointer;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.go-back-ico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #71747A;\n  color: #71747A;\n}\n.go-back-ico[_ngcontent-%COMP%]:hover {\n  background: #F2F3F5;\n}\n.title-huge[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 3px;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  font-size: 24px;\n  font-weight: 700;\n}\n.default-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 15px;\n  line-height: 24px;\n  height: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  border-radius: 8px;\n}\n.accent-button[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #248BF2;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.accent-button[_ngcontent-%COMP%]:hover {\n  background-color: #3399FF;\n}\n.accent-button[_ngcontent-%COMP%]:active {\n  background-color: #1677D9;\n}\n.second-button[_ngcontent-%COMP%] {\n  color: #71747A;\n  background-color: #F2F3F4;\n  white-space: nowrap;\n  overflow: hidden;\n  font-weight: 600;\n  transition: 0.1s;\n}\n.second-button[_ngcontent-%COMP%]:hover {\n  background-color: #e8e9eb;\n}\n.second-button[_ngcontent-%COMP%]:active {\n  background-color: #d9dadb;\n}\n.mgr8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 40px;\n  padding: 5px 15px;\n  border-radius: 6px;\n}\n.x[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.main-name[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  font-family: \"Pacifico\", cursive;\n  font-size: 27px;\n  font-weight: 700;\n  margin-right: 12px;\n}\n.add-name[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #71747A;\n  font-size: 22px;\n}\n.list-options[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n}\n.wrap-option-translate[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.option-translate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 9px 18px;\n  border-radius: 50px;\n}\n.option-translate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n  fill: #1DA1F2;\n  background: rgba(29, 161, 242, 0.1);\n}\n.translator[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.translator-header-left-name[_ngcontent-%COMP%], .translator-header-right-name[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n}\n.translator-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  border-bottom: 1px solid #e6e6e6;\n  justify-content: center;\n}\n.translator-header-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.translator-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.translator-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 200px;\n  height: 100%;\n  border-right: 1px solid #e6e6e6;\n}\n.translator-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.translator-output[_ngcontent-%COMP%] {\n  min-height: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.translator-output[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  font-size: 20px;\n  padding: 20px 20px;\n  resize: none;\n}\n.output-data[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px 20px;\n}\n.word-select[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  cursor: pointer;\n  background: rgba(29, 161, 242, 0.1);\n}\n.word[_ngcontent-%COMP%] {\n  position: relative;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%] {\n  position: absolute;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  bottom: -5px;\n  left: 0;\n  transform: translateY(100%);\n  padding: 5px 0;\n  border-radius: 3px;\n  z-index: 1;\n  background: white;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 9px;\n}\n.word[_ngcontent-%COMP%]   .word-select-options[_ngcontent-%COMP%]   .word-select-options-e[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.footer-trans[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\ntextarea[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1hbmQtc29sdmUtcGFnZS90YXNrLWFuZC1zb2x2ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSxnRkFBQTtBQzhFUjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHpFRjtBQytFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFJQSxnQkFBQTtFQUNBLDJDQUFBO0FENUVGO0FDK0VBO0VBQ0Usa0JBQUE7RUFJQSxhQUFBO0VBQ0EsVUFBQTtFQUlBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBRDVFRjtBQytFQTtFQUVFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEN0VGO0FDZ0ZBO0VBSUUsYUFBQTtFQUdBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFJQSxtQkFBQTtFQUNBLDJDQWxJd0I7QURxRDFCO0FDOEVFO0VBQ0UsYUFqSmlCO0VBa0pqQixpQkFBQTtFQUNBLGNBQUE7QUQ1RUo7QUM4RUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUQ1RUo7QUM2RUk7RUFDRSxjQTVKZTtBRGlGckI7QUNnRkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFLQSxjQWpMa0I7QURrR3BCO0FDa0ZJO0VBQ0UsYUFwTGdCO0VBcUxoQixjQXJMZ0I7RUFzTGhCLGtCQUFBO0FEaEZOO0FDbUZFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFD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O0VBQ0UsbUJBQUE7QUF5U1I7QUFuU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBc1NGO0FBblNBO0VBQ0UsZ0JBQUE7QUFzU0YiLCJmaWxlIjoic3JjL2FwcC90YXNrLWFuZC1zb2x2ZS1wYWdlL3Rhc2stYW5kLXNvbHZlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMrQ29uZGVuc2VkOndnaHRAMzAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29uY2VydCtPbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUuc2Nzc1wiO1xyXG5cclxuXHJcbi54e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubWFpbi1uYW1le1xyXG4gIGNvbG9yOiAjMURBMUYyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4uYWRkLW5hbWV7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzcxNzQ3QTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5saXN0LW9wdGlvbnN7XHJcbiAgcGFkZGluZzogMjVweCAxNXB4O1xyXG59XHJcblxyXG4ud3JhcC1vcHRpb24tdHJhbnNsYXRle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm9wdGlvbi10cmFuc2xhdGV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHN2Z3tcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBjb2xvcjogIzFEQTFGMjtcclxuICBmaWxsOiAjMURBMUYyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpO1xyXG59XHJcblxyXG4udHJhbnNsYXRvcntcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHJhbnNsYXRvci1oZWFkZXItbGVmdC1uYW1lLCAudHJhbnNsYXRvci1oZWFkZXItcmlnaHQtbmFtZXtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWhlYWRlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWhlYWRlci1hcnJvd3tcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi50cmFuc2xhdG9yLXRleHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yLWlucHV0e1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2ZTZlNjtcclxuXHJcbiAgdGV4dGFyZWF7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRyYW5zbGF0b3Itb3V0cHV0e1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0YXJlYXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ub3V0cHV0LWRhdGF7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG5cclxuLndvcmQtc2VsZWN0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMSk7XHJcbn1cclxuXHJcbi53b3Jke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAud29yZC1zZWxlY3Qtb3B0aW9uc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC53b3JkLXNlbGVjdC1vcHRpb25zLWV7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogM3B4IDlweDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLXRyYW5ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iLCIkdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiRmb3JlZ3JvdW5kUHJpbWFyeTogIzE3MUExRjtcclxuJGZvcmVncm91bmRTZWNvbmRhcnk6ICM3MTc0N0E7XHJcbiRmb3JlZ3JvdW5kVGVydGlhcnk6ICM5RDlGQTM7XHJcbiRmb3JlZ3JvdW5kUXVhdGVybmFyeTogI0M4QzlDQztcclxuJGZvcmVncm91bmRDb250cmFzdDogI0ZGRkZGRjtcclxuJGZvcmVncm91bmRJbnZlcnRlZDogI0ZGRkZGRjtcclxuJGJhY2tncm91bmRQcmltYXJ5OiAjRkZGRkZGO1xyXG4kYmFja2dyb3VuZFByaW1hcnlIb3ZlcjogI0YyRjNGNTtcclxuJGJhY2tncm91bmRQcmltYXJ5QWN0aXZlOiAjRjJGM0Y1O1xyXG4kYmFja2dyb3VuZFNlY29uZGFyeTogI0ZGRkZGRjtcclxuJGJhY2tncm91bmRTZWNvbmRhcnlIb3ZlcjogI0YyRjNGNTtcclxuJGJhY2tncm91bmRTZWNvbmRhcnlBY3RpdmU6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnk6ICNGMkYzRjU7XHJcbiRiYWNrZ3JvdW5kVGVydGlhcnlIb3ZlcjogI0VERUVGMDtcclxuJGJhY2tncm91bmRUZXJ0aWFyeUFjdGl2ZTogI0U2RTdFQjtcclxuJGJhY2tncm91bmRUZXJ0aWFyeVRyYW5zOiByZ2JhKDIwMSwgMjA0LCAyMDksIDAuMjQpO1xyXG4kYmFja2dyb3VuZFRlcnRpYXJ5SG92ZXJUcmFuczogcmdiYSgxNjksIDE3NCwgMTg0LCAwLjI0KTtcclxuJGJhY2tncm91bmRUZXJ0aWFyeUFjdGl2ZVRyYW5zOiByZ2JhKDE0OCwgMTU1LCAxNjgsIDAuMjQpO1xyXG4kYWNjZW50UGF5OiAjMTcxQTFGO1xyXG4kYWNjZW50UGF5SG92ZXI6ICMyMTIzMjk7XHJcbiRhY2NlbnRQYXlBY3RpdmU6ICMzMzM3M0Q7XHJcbiRib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiRib3JkZXJMaWdodDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuJGJhY2tncm91bmRCbHVyUHJpbWFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcclxuJGJhY2tncm91bmRCbHVyU2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xyXG4kYm94U2hhZG93UG9wcGVyOiAwcHggOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDBweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiRib3hTaGFkb3dNb2RhbDogMHB4IDhweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDBweCAwcHggOTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4kYWNjZW50UHJpbWFyeTogIzI0OEJGMjtcclxuJGFjY2VudFByaW1hcnlIb3ZlcjogIzMzOTlGRjtcclxuJGFjY2VudFByaW1hcnlBY3RpdmU6ICMxNjc3RDk7XHJcbiRhY2NlbnRQcmltYXJ5VHJhbnM6IHJnYmEoMjQsIDEzMywgMjQyLCAwLjI0KTtcclxuJGFjY2VudE11dGVkOiAjNDU5NUU1O1xyXG4kYWNjZW50TXV0ZWRIb3ZlcjogIzQ1OTVFNTtcclxuJGFjY2VudE11dGVkQWN0aXZlOiAjNDU5NUU1O1xyXG4kYWNjZW50UG9zaXRpdmU6ICM0MEI4NTU7XHJcbiRhY2NlbnRQb3NpdGl2ZUhvdmVyOiAjNTJDQzY2O1xyXG4kYWNjZW50UG9zaXRpdmVBY3RpdmU6ICMzMkE2NDU7XHJcbiRhY2NlbnROZWdhdGl2ZTogI0YyMzA1MTtcclxuJGFjY2VudE5lZ2F0aXZlSG92ZXI6ICNGRjQwNjA7XHJcbiRhY2NlbnROZWdhdGl2ZUFjdGl2ZTogI0Q5MjE0MDtcclxuJG92ZXJsYXlUb3RhbDogIzAwMDAwMDtcclxuJG92ZXJsYXlIZWF2eTogcmdiYSgwLCAwLCAwLCAwLjg0KTtcclxuJG92ZXJsYXlNZWRpdW06IHJnYmEoMCwgMCwgMCwgMC40OCk7XHJcbiRvdmVybGF5TGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbi8vJHNwYWNlQmFja2dyb3VuZFByaW1hcnk6IGxpbmVhciAtIGdyYWRpZW50KDE4MGRlZywgIzBGMEYyOSAwICUsICMyNjFCM0QgMTAwICUpO1xyXG4kc3BhY2VCYWNrZ3JvdW5kU2Vjb25kYXJ5OiAjMzYzMTUyO1xyXG4kc3BhY2VCYWNrZ3JvdW5kVGVydGlhcnk6ICM1QTUzN0E7XHJcbiR0aW50UmVkOiAjRjIzMDUxO1xyXG4kdGludFJlZEhvdmVyOiAjRkY0MDYwO1xyXG4kdGludFJlZEFjdGl2ZTogI0Q5MjE0MDtcclxuJHRpbnRPcmFuZ2U6ICNGRjlGMUE7XHJcbiR0aW50T3JhbmdlSG92ZXI6ICNGRkJCMzM7XHJcbiR0aW50T3JhbmdlQWN0aXZlOiAjRjI3RjBDO1xyXG4kdGludEdyZWVuOiAjNDBCODU1O1xyXG4kdGludEdyZWVuSG92ZXI6ICM1MkNDNjY7XHJcbiR0aW50R3JlZW5BY3RpdmU6ICMzMkE2NDU7XHJcbiR0aW50Q3lhbjogIzM2QkVEOTtcclxuJHRpbnRDeWFuSG92ZXI6ICM0NUNCRTU7XHJcbiR0aW50Q3lhbkFjdGl2ZTogIzI2QTFCRjtcclxuJHRpbnRCbHVlOiAjMjQ4QkYyO1xyXG4kdGludEJsdWVIb3ZlcjogIzMzOTlGRjtcclxuJHRpbnRCbHVlQWN0aXZlOiAjMTY3N0Q5O1xyXG4kdGludFB1cnBsZTogIzdBMjRGMjtcclxuJHRpbnRQdXJwbGVIb3ZlcjogIzg4MzNGRjtcclxuJHRpbnRQdXJwbGVBY3RpdmU6ICM2MTE0Q0M7XHJcbiR0aW50UGluazogI0U1MzlBQztcclxuJHRpbnRQaW5rSG92ZXI6ICNGMjQ5QkE7XHJcbiR0aW50UGlua0FjdGl2ZTogI0NDMUY5MztcclxuJHRpbnRHcmV5OiAjNzE3NDdBO1xyXG4kdGludEdyZXlIb3ZlcjogIzgxODQ4QTtcclxuJHRpbnRHcmV5QWN0aXZlOiAjNUM1RjY2O1xyXG4kdGludEludmVydGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpO1xyXG4vLyRmZWF0dXJlZCAtIGljb24gLSBkaXNwbGF5OiBmbGV4O1xyXG4vLyRzZWNyZXQgLSBjaGF0IC0gdGl0bGUgLSBjb2xvcjogdmFyKCRmb3JlZ3JvdW5kUHJpbWFyeSk7XHJcbi8vJHNlY3JldCAtIGNoYXQgLSBpY29uIC0gZGlzcGxheTogbm9uZTtcclxuLy8kZW1vamkgLSBzaXplOiAzOHB4O1xyXG5cclxuXHJcbi5sYXlvdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubGF5b3V0LW1lbnV7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXI7XHJcbn1cclxuXHJcbi5sYXlvdXQtY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDBweDtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kUHJpbWFyeSk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLndyYXAtc2VhcmNoLWJsb2Nre1xyXG4gIC8vbWFyZ2luLXRvcDogMTJweDtcclxuICBwYWRkaW5nOiAwIDE2cHggMTJweCAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmxvY2t7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRUZXJ0aWFyeVRyYW5zO1xyXG4gIHN2Z3tcclxuICAgIGZpbGw6ICRmb3JlZ3JvdW5kVGVydGlhcnk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgY29sb3I6ICRmb3JlZ3JvdW5kVGVydGlhcnk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtYmxvY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgLy9iYWNrZ3JvdW5kOiByZWQ7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBjb2xvcjogJGZvcmVncm91bmRQcmltYXJ5O1xyXG5cclxuICAubGF5b3V0LW1lbnUtYmxvY2staWNve1xyXG4gICAgc3Zne1xyXG4gICAgICBmaWxsOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgY29sb3I6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sYXlvdXQtbWVudS1ibG9jay10ZXh0e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtbGlzdCwgLmxheW91dC1tZW51LXdvcmtzcGFjZXN7XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50TXV0ZWQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZm9yZWdyb3VuZENvbnRyYXN0ICFpbXBvcnRhbnQ7XHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiAkZm9yZWdyb3VuZENvbnRyYXN0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZENvbnRyYXN0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtd29ya3NwYWNlc3tcclxuICAvL21hcmdpbi10b3A6IDI0cHg7XHJcbiAgLmxheW91dC1tZW51LXdvcmtzcGFjZXMtdGl0bGV7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggNHB4IDE2cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFue1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0LW1lbnUtd29ya3NwYWNlcy10aXRsZS1pY297XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgc3Zne1xyXG4gICAgICAgIGZpbGw6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gICAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kUHJpbWFyeUhvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGF5b3V0LW1lbnUtd29ya3NwYWNlcy1ibG9ja3tcclxuXHJcbn1cclxuXHJcbi5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2Nre1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLy9taW4taGVpZ2h0OiA2MHB4O1xyXG4gIC8vYmFja2dyb3VuZDogcmVkO1xyXG4gIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBjb2xvcjogJGZvcmVncm91bmRQcmltYXJ5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLWltZ3tcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLXRleHR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MnB4KTtcclxuICAgIC5sYXlvdXQtbWVudS13b3Jrc3BhY2VzLWJsb2NrLXRleHQtbmFtZXtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgfVxyXG4gICAgLmxheW91dC1tZW51LXdvcmtzcGFjZXMtYmxvY2stdGV4dC1kZXNjcmlwdGlvbntcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgIGNvbG9yOiAkZm9yZWdyb3VuZFNlY29uZGFyeTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8taW1ne1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkM2MTkgMCUsICNGRjc5MTkgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyoqKiovXHJcblxyXG4uaGVhZGVyLXBhZ2V7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmhlYWRlci1wYWdlLWxlZnQsIC5oZWFkZXItcGFnZS1yaWdodHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nby1iYWNrLWljb3tcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHN2Z3tcclxuICAgIGZpbGw6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kU2Vjb25kYXJ5O1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtaHVnZXtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZGVmYXVsdC1idXR0b257XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hY2NlbnQtYnV0dG9ue1xyXG4gIGNvbG9yOiAkZm9yZWdyb3VuZENvbnRyYXN0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRQcmltYXJ5O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRQcmltYXJ5SG92ZXI7XHJcbiAgfVxyXG4gICY6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFByaW1hcnlBY3RpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vjb25kLWJ1dHRvbntcclxuICBjb2xvcjogIzcxNzQ3QTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU5ZWI7XHJcbiAgfVxyXG4gICY6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGFkYjtcclxuICB9XHJcbn1cclxuXHJcbi5tZ3I4e1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskAndSolvePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-and-solve-page',
                templateUrl: './task-and-solve-page.component.html',
                styleUrls: ['./task-and-solve-page.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/total-board-page/total-board-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/total-board-page/total-board-page.component.ts ***!
  \****************************************************************/
/*! exports provided: TotalBoardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalBoardPageComponent", function() { return TotalBoardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TotalBoardPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0423\u0420\u0410! \u0423\u0436\u0435 *\u041A\u043E\u043B-\u0432\u043E \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0420\u041E\u0411\u041E\u0422\u0410\u0422\u042C! *\u041A\u043E\u043B-\u0432\u043E \u0430\u0431\u0437\u0430\u0446\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043A \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0443* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.cnt_task_and_solve_complete_total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.cnt_task_without_solve, " ");
} }
class TotalBoardPageComponent {
    constructor(userService) {
        this.userService = userService;
        this.data = null;
    }
    ngOnInit() {
        this.userService.getStatistic().subscribe(resp => {
            console.log('Все успешно создалося:', resp);
            this.data = resp;
        });
    }
}
TotalBoardPageComponent.ɵfac = function TotalBoardPageComponent_Factory(t) { return new (t || TotalBoardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
TotalBoardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotalBoardPageComponent, selectors: [["app-total-board-page"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-6", "wrap"], [1, "number"], [1, "title"]], template: function TotalBoardPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TotalBoardPageComponent_div_1_Template, 11, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".wrap[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.wrap[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 700;\n}\n.wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG90YWwtYm9hcmQtcGFnZS90b3RhbC1ib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC90b3RhbC1ib2FyZC1wYWdlL3RvdGFsLWJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLm51bWJlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalBoardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-total-board-page',
                templateUrl: './total-board-page.component.html',
                styleUrls: ['./total-board-page.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
        // this.getUserInfo().subscribe(userInfo => {
        //   this.userInfo = userInfo;
        // });
    }
    getOnlyTask() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["Endpoints"].onlyTask, {});
    }
    getStatistic() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["Endpoints"].cnt, {});
    }
    createOnlyTask(request) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["Endpoints"].createTask, request, {});
    }
    sendTaskAndSolve(request) {
        return this.http.patch(_config__WEBPACK_IMPORTED_MODULE_1__["Endpoints"].createTaskAndSolve, request, {});
    }
    takeTranslateAlgos(request) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["Endpoints"].algos, request, {});
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/borisshosin/ez750k-MVD-translate/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map