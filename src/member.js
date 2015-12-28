$( document ).ready(function() {
    $('#member-form .submit-btn').on('click', function(event){
        OneForm.handleClick('confirm');
    });
    $('#member-confirm .submit-btn').on('click', function(event){
        OneForm.handleClick();
    });
});

var OneForm = {
    handleClick: function(mode) {
        this.doSubmit(mode);
    },
    doSubmit: function(mode) {
        var form = $('form');
        if (mode == 'confirm') {
            $('input[name=mode]').val('confirm');
        }
        form.submit();
    }
};
