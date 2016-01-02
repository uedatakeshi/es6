
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

export default OneForm;
