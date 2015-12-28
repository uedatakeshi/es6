'use strict';

$(function () {
    $('#member-form .submit-btn').on('click', function () {
        OneForm.handleClick(this.form, 'confirm');
    });
    $('#member-confirm .submit-btn').on('click', function () {
        OneForm.handleClick(this.form, '');
    });
});

var OneForm = {
    handleClick: function handleClick(form, mode) {
        self.setMode(mode);
        self.doSubmit(form);
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

var Tashizan = {
    doSubmit: function doSubmit(a, b) {
        var result = a + b;
        return result;
    }
};
