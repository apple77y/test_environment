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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SpinboxModel = __webpack_require__(1);

var _SpinboxModel2 = _interopRequireDefault(_SpinboxModel);

var _SpinboxView = __webpack_require__(2);

var _SpinboxView2 = _interopRequireDefault(_SpinboxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpinboxController = function () {
    function SpinboxController() {
        _classCallCheck(this, SpinboxController);

        this.oSpinboxView = new _SpinboxView2.default();
        this.oSpinboxModel = new _SpinboxModel2.default();

        this.oSpinboxView.render(this.oSpinboxModel.getData());
        this.oSpinboxView.elIncrease.addEventListener('click', this.onClickIncrease.bind(this));
        this.oSpinboxView.elDecrease.addEventListener('click', this.onClickDecrease.bind(this));
    }

    _createClass(SpinboxController, [{
        key: 'onClickIncrease',
        value: function onClickIncrease() {
            this.oSpinboxModel.increase();
            this.oSpinboxView.render(this.oSpinboxModel.getData());
        }
    }, {
        key: 'onClickDecrease',
        value: function onClickDecrease() {
            this.oSpinboxModel.decrease();
            this.oSpinboxView.render(this.oSpinboxModel.getData());
        }
    }]);

    return SpinboxController;
}();

exports.default = SpinboxController;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpinboxModel = function () {
    function SpinboxModel() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

        _classCallCheck(this, SpinboxModel);

        this.data = value;
    }

    _createClass(SpinboxModel, [{
        key: "increase",
        value: function increase() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            this.data += value;

            return this.data;
        }
    }, {
        key: "decrease",
        value: function decrease() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            this.data -= value;

            return this.data;
        }
    }, {
        key: "getData",
        value: function getData() {
            return this.data;
        }
    }]);

    return SpinboxModel;
}();

exports.default = SpinboxModel;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpinboxView = function () {
    function SpinboxView() {
        _classCallCheck(this, SpinboxView);

        this.elResult = document.querySelector('.result');
        this.elIncrease = document.querySelector('.increase');
        this.elDecrease = document.querySelector('.decrease');
    }

    _createClass(SpinboxView, [{
        key: 'render',
        value: function render(value) {
            this.elResult.value = value;
        }
    }]);

    return SpinboxView;
}();

exports.default = SpinboxView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SpinboxController = __webpack_require__(0);

var _SpinboxController2 = _interopRequireDefault(_SpinboxController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Spinbox >', function () {
    var oSpinboxController = void 0;
    var oSpinboxModel = void 0;
    var oSpinboxView = void 0;
    var beforeValue = void 0;

    var DEFAULT_VALUE = 100;

    beforeEach(function () {
        oSpinboxController = new _SpinboxController2.default();
        oSpinboxModel = oSpinboxController.oSpinboxModel;
        oSpinboxView = oSpinboxController.oSpinboxView;
    });

    describe('최초 인스턴스를 생성할 때,', function () {
        it('기본값은 100이다.', function () {
            // given
            // when
            // then
            expect(oSpinboxModel.data).toBe(DEFAULT_VALUE);
        });

        it('기본값이 인풋에 반영 되어있다.', function () {
            // given
            // when
            // then
            expect(Number(oSpinboxView.elResult.value)).toBe(DEFAULT_VALUE);
        });
    });

    describe('▲ 버튼을 누르면,', function () {
        it("모델의 데이터 값이 1 증가한다.", function () {
            // given
            beforeValue = oSpinboxModel.getData();
            // when
            oSpinboxController.onClickIncrease();
            // then
            expect(oSpinboxModel.getData()).toBe(beforeValue + 1);
        });

        it("뷰의 인풋 값이 1 증가한다.", function () {
            // given
            beforeValue = Number(oSpinboxView.elResult.value);
            // when
            oSpinboxController.onClickIncrease();
            // then
            expect(Number(oSpinboxView.elResult.value)).toBe(beforeValue + 1);
        });
    });

    describe('▼ 버튼을 누르면,', function () {
        it("모델의 데이터 값이 1 감소한다.", function () {
            // given
            beforeValue = oSpinboxModel.getData();
            // when
            oSpinboxController.onClickDecrease();
            // then
            expect(oSpinboxModel.getData()).toBe(beforeValue - 1);
        });

        it("뷰의 인풋 값이 1 감소한다.", function () {
            // given
            beforeValue = Number(oSpinboxView.elResult.value);
            // when
            oSpinboxController.onClickDecrease();
            // then
            expect(Number(oSpinboxView.elResult.value)).toBe(beforeValue - 1);
        });
    });

    afterEach(function () {
        oSpinboxController = undefined;
        oSpinboxModel = undefined;
        oSpinboxView = undefined;
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzJmZWY5MzBmZDk3ZDJhYTUwMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaW5ib3hDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TcGluYm94TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaW5ib3hWaWV3LmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3BlYy9TcGluYm94LnNwZWMuanMiXSwibmFtZXMiOlsiU3BpbmJveENvbnRyb2xsZXIiLCJvU3BpbmJveFZpZXciLCJvU3BpbmJveE1vZGVsIiwicmVuZGVyIiwiZ2V0RGF0YSIsImVsSW5jcmVhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0luY3JlYXNlIiwiYmluZCIsImVsRGVjcmVhc2UiLCJvbkNsaWNrRGVjcmVhc2UiLCJpbmNyZWFzZSIsImRlY3JlYXNlIiwiU3BpbmJveE1vZGVsIiwidmFsdWUiLCJkYXRhIiwiU3BpbmJveFZpZXciLCJlbFJlc3VsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlc2NyaWJlIiwib1NwaW5ib3hDb250cm9sbGVyIiwiYmVmb3JlVmFsdWUiLCJERUZBVUxUX1ZBTFVFIiwiYmVmb3JlRWFjaCIsIml0IiwiZXhwZWN0IiwidG9CZSIsIk51bWJlciIsImFmdGVyRWFjaCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQs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QVUsWUFBTTtBQUNaUiw2QkFBcUJTLFNBQXJCO0FBQ0E1Qix3QkFBZ0I0QixTQUFoQjtBQUNBN0IsdUJBQWU2QixTQUFmO0FBQ0gsS0FKRDtBQU1ILENBNUVELEUiLCJmaWxlIjoidGVzdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcyZmVmOTMwZmQ5N2QyYWE1MDA2IiwiaW1wb3J0IFNwaW5ib3hNb2RlbCBmcm9tICcuL1NwaW5ib3hNb2RlbCc7XG5pbXBvcnQgU3BpbmJveFZpZXcgZnJvbSAnLi9TcGluYm94Vmlldyc7XG5cbmNsYXNzIFNwaW5ib3hDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vU3BpbmJveFZpZXcgPSBuZXcgU3BpbmJveFZpZXcoKTtcbiAgICAgICAgdGhpcy5vU3BpbmJveE1vZGVsID0gbmV3IFNwaW5ib3hNb2RlbCgpO1xuXG4gICAgICAgIHRoaXMub1NwaW5ib3hWaWV3LnJlbmRlcih0aGlzLm9TcGluYm94TW9kZWwuZ2V0RGF0YSgpKTtcbiAgICAgICAgdGhpcy5vU3BpbmJveFZpZXcuZWxJbmNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0luY3JlYXNlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm9TcGluYm94Vmlldy5lbERlY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrRGVjcmVhc2UuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25DbGlja0luY3JlYXNlKCkge1xuICAgICAgICB0aGlzLm9TcGluYm94TW9kZWwuaW5jcmVhc2UoKTtcbiAgICAgICAgdGhpcy5vU3BpbmJveFZpZXcucmVuZGVyKHRoaXMub1NwaW5ib3hNb2RlbC5nZXREYXRhKCkpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tEZWNyZWFzZSgpIHtcbiAgICAgICAgdGhpcy5vU3BpbmJveE1vZGVsLmRlY3JlYXNlKCk7XG4gICAgICAgIHRoaXMub1NwaW5ib3hWaWV3LnJlbmRlcih0aGlzLm9TcGluYm94TW9kZWwuZ2V0RGF0YSgpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5ib3hDb250cm9sbGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NwaW5ib3hDb250cm9sbGVyLmpzIiwiY2xhc3MgU3BpbmJveE1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDEwMCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpbmNyZWFzZSh2YWx1ZSA9IDEpIHtcbiAgICAgICAgdGhpcy5kYXRhICs9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgZGVjcmVhc2UodmFsdWUgPSAxKSB7XG4gICAgICAgIHRoaXMuZGF0YSAtPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGluYm94TW9kZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3BpbmJveE1vZGVsLmpzIiwiY2xhc3MgU3BpbmJveFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xuICAgICAgICB0aGlzLmVsSW5jcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5jcmVhc2UnKTtcbiAgICAgICAgdGhpcy5lbERlY3JlYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY3JlYXNlJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxSZXN1bHQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5ib3hWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NwaW5ib3hWaWV3LmpzIiwiaW1wb3J0IFNwaW5ib3hDb250cm9sbGVyIGZyb20gJy4uLy4uL3NyYy9TcGluYm94Q29udHJvbGxlcic7XG5cbmRlc2NyaWJlKCdTcGluYm94ID4nLCAoKSA9PiB7XG4gICAgbGV0IG9TcGluYm94Q29udHJvbGxlcjtcbiAgICBsZXQgb1NwaW5ib3hNb2RlbDtcbiAgICBsZXQgb1NwaW5ib3hWaWV3O1xuICAgIGxldCBiZWZvcmVWYWx1ZTtcblxuICAgIGNvbnN0IERFRkFVTFRfVkFMVUUgPSAxMDA7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgb1NwaW5ib3hDb250cm9sbGVyID0gbmV3IFNwaW5ib3hDb250cm9sbGVyKCk7XG4gICAgICAgIG9TcGluYm94TW9kZWwgPSBvU3BpbmJveENvbnRyb2xsZXIub1NwaW5ib3hNb2RlbDtcbiAgICAgICAgb1NwaW5ib3hWaWV3ID0gb1NwaW5ib3hDb250cm9sbGVyLm9TcGluYm94VmlldztcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCfstZzstIgg7J247Iqk7YS07Iqk66W8IOyDneyEse2VoCDrlYwsJywgKCkgPT4ge1xuICAgICAgICBpdCgn6riw67O46rCS7J2AIDEwMOydtOuLpC4nLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBnaXZlblxuICAgICAgICAgICAgLy8gd2hlblxuICAgICAgICAgICAgLy8gdGhlblxuICAgICAgICAgICAgZXhwZWN0KG9TcGluYm94TW9kZWwuZGF0YSkudG9CZShERUZBVUxUX1ZBTFVFKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ+q4sOuzuOqwkuydtCDsnbjtkovsl5Ag67CY7JiBIOuQmOyWtOyeiOuLpC4nLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBnaXZlblxuICAgICAgICAgICAgLy8gd2hlblxuICAgICAgICAgICAgLy8gdGhlblxuICAgICAgICAgICAgZXhwZWN0KE51bWJlcihvU3BpbmJveFZpZXcuZWxSZXN1bHQudmFsdWUpKS50b0JlKERFRkFVTFRfVkFMVUUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCfilrIg67KE7Yq87J2EIOuIhOultOuptCwnLCAoKSA9PiB7XG4gICAgICAgIGl0KFwi66qo64247J2YIOuNsOydtO2EsCDqsJLsnbQgMSDspp3qsIDtlZzri6QuXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gZ2l2ZW5cbiAgICAgICAgICAgIGJlZm9yZVZhbHVlID0gb1NwaW5ib3hNb2RlbC5nZXREYXRhKCk7XG4gICAgICAgICAgICAvLyB3aGVuXG4gICAgICAgICAgICBvU3BpbmJveENvbnRyb2xsZXIub25DbGlja0luY3JlYXNlKCk7XG4gICAgICAgICAgICAvLyB0aGVuXG4gICAgICAgICAgICBleHBlY3Qob1NwaW5ib3hNb2RlbC5nZXREYXRhKCkpLnRvQmUoYmVmb3JlVmFsdWUgKyAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCLrt7DsnZgg7J247ZKLIOqwkuydtCAxIOymneqwgO2VnOuLpC5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBnaXZlblxuICAgICAgICAgICAgYmVmb3JlVmFsdWUgPSBOdW1iZXIob1NwaW5ib3hWaWV3LmVsUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIC8vIHdoZW5cbiAgICAgICAgICAgIG9TcGluYm94Q29udHJvbGxlci5vbkNsaWNrSW5jcmVhc2UoKTtcbiAgICAgICAgICAgIC8vIHRoZW5cbiAgICAgICAgICAgIGV4cGVjdChOdW1iZXIob1NwaW5ib3hWaWV3LmVsUmVzdWx0LnZhbHVlKSkudG9CZShiZWZvcmVWYWx1ZSArIDEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCfilrwg67KE7Yq87J2EIOuIhOultOuptCwnLCAoKSA9PiB7XG4gICAgICAgIGl0KFwi66qo64247J2YIOuNsOydtO2EsCDqsJLsnbQgMSDqsJDshoztlZzri6QuXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gZ2l2ZW5cbiAgICAgICAgICAgIGJlZm9yZVZhbHVlID0gb1NwaW5ib3hNb2RlbC5nZXREYXRhKCk7XG4gICAgICAgICAgICAvLyB3aGVuXG4gICAgICAgICAgICBvU3BpbmJveENvbnRyb2xsZXIub25DbGlja0RlY3JlYXNlKCk7XG4gICAgICAgICAgICAvLyB0aGVuXG4gICAgICAgICAgICBleHBlY3Qob1NwaW5ib3hNb2RlbC5nZXREYXRhKCkpLnRvQmUoYmVmb3JlVmFsdWUgLSAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCLrt7DsnZgg7J247ZKLIOqwkuydtCAxIOqwkOyGjO2VnOuLpC5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBnaXZlblxuICAgICAgICAgICAgYmVmb3JlVmFsdWUgPSBOdW1iZXIob1NwaW5ib3hWaWV3LmVsUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIC8vIHdoZW5cbiAgICAgICAgICAgIG9TcGluYm94Q29udHJvbGxlci5vbkNsaWNrRGVjcmVhc2UoKTtcbiAgICAgICAgICAgIC8vIHRoZW5cbiAgICAgICAgICAgIGV4cGVjdChOdW1iZXIob1NwaW5ib3hWaWV3LmVsUmVzdWx0LnZhbHVlKSkudG9CZShiZWZvcmVWYWx1ZSAtIDEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICAgIG9TcGluYm94Q29udHJvbGxlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgb1NwaW5ib3hNb2RlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgb1NwaW5ib3hWaWV3ID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc3BlYy9TcGluYm94LnNwZWMuanMiXSwic291cmNlUm9vdCI6IiJ9