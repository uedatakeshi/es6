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