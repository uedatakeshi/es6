$(function() {
    $('#member-form .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, 'confirm');
    });
    $('#member-confirm .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, '');
    });
});

var OneForm = {
    handleClick(form, mode) {
        this.setMode(mode);
        this.doSubmit(form);
    },
    setMode(mode) {
        if (mode == 'confirm') {
            $('input[name=mode]').val('confirm');
        }
    },
    doSubmit(form) {
        form.submit();
    }
};

var Tashizan = {
    doSubmit(a, b) {
        var result = a + b;
        return result;
    }
};
