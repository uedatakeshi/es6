(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var BPlusA = {
    doCalc: function doCalc(a, b) {
        var result = a + b;
        return result;
    }
};

exports.default = BPlusA;
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var OneForm = {
    handleClick: function handleClick(form, mode) {
        this.setMode(mode);
        this.doSubmit(form);
    },
    setMode: function setMode(mode) {
        if (mode == 'confirm') {
            $('input[name=mode]').val('confirm');
        }
    },
    doSubmit: function doSubmit(form) {
        form.submit();
    }
};

exports.default = OneForm;
},{}],3:[function(require,module,exports){
'use strict';

var _BPlusA = require('./BPlusA');

var _BPlusA2 = _interopRequireDefault(_BPlusA);

var _OneForm = require('./OneForm');

var _OneForm2 = _interopRequireDefault(_OneForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_BPlusA2.default.doCalc(1, 2));

$(function () {
    $('#member-form .submit-btn').on('click', function () {
        _OneForm2.default.handleClick(this.form, 'confirm');
    });
    $('#member-confirm .submit-btn').on('click', function () {
        _OneForm2.default.handleClick(this.form, '');
    });
});
},{"./BPlusA":1,"./OneForm":2}]},{},[3]);
