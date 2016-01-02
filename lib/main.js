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