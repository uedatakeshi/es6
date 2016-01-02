import BPlusA from './BPlusA';
import OneForm from './OneForm';

console.log(BPlusA.doCalc(1, 2));

$(function() {
    $('#member-form .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, 'confirm');
    });
    $('#member-confirm .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, '');
    });
});
