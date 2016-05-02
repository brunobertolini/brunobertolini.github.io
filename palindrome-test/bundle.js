/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Palindrome = (function () {
	    function Palindrome() {
	        _classCallCheck(this, Palindrome);

	        var self = this;

	        this.element = document.getElementById('words');
	        this.success = document.getElementById('results-success');
	        this.error = document.getElementById('results-error');

	        this.element.onkeyup = function test() {
	            self.value = this.value;
	            self.test();
	        };
	    }

	    _createClass(Palindrome, [{
	        key: 'test',
	        value: function test() {
	            var inverted = this.value.split('').reverse().join('');
	            this.value === inverted ? this.onSuccess() : this.onError();
	        }
	    }, {
	        key: 'onSuccess',
	        value: function onSuccess() {
	            this.error.style.display = 'none';
	            this.success.style.display = 'block';
	        }
	    }, {
	        key: 'onError',
	        value: function onError() {
	            this.success.style.display = 'none';
	            this.error.style.display = 'block';
	        }
	    }]);

	    return Palindrome;
	})();

	new Palindrome();

/***/ }
/******/ ]);