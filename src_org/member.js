$(function() {
    $('#member-form .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, 'confirm');
    });
    $('#member-confirm .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, '');
    });
});

var OneForm = {
    handleClick: function(form, mode) {
        this.setMode(mode);
        this.doSubmit(form);
    },
    setMode: function(mode) {
        if (mode == 'confirm') {
            $('input[name=mode]').val('confirm');
        }
    },
    doSubmit: function(form) {
        form.submit();
    }
};

var Tashizan = {
    doSubmit: function(a, b) {
        var result = a + b;
        return result;
    }
};
