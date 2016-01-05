import BPlusA from './BPlusA';
import OneForm from './OneForm';

console.log(BPlusA.doCalc(1, 2));

/*
$(function() {
    $('#member-form .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, 'confirm');
    });
    $('#member-confirm .submit-btn').on('click', function(){
        OneForm.handleClick(this.form, '');
    });
});
*/

// 簡易設定クリックで
$('#setting-select').on('click', '#light-btn', function(e) {
    $('#loading').show();
    $('#detail-select').empty();
    $('.type03').removeClass("current");
    $(this).addClass("current");
    $('#light-select').hide(); 
    $('#detail-select').hide(); 
    $('#light-select').load( "members/light_select.php?key=" + key, function() {
        $('#graph-select').load( "members/graph_select.php?m=l&key=" + key, function() {
            $('#loading').hide();
        });
    }).show(); 
});

/*
 *
 * クリックで、ローディング画像を表示して、
 * 詳細選択の画面は空に
 * 今いるのクラスを除去してクリックしたボタンに今いるクラスをつけて
 * 簡易選択を隠し、詳細選択を隠し、
 * 簡易選択にロード
 * その中でグレフ選択にロード
 * ローディング隠す
 *
