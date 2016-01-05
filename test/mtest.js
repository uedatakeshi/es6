import assert  from 'power-assert';
import BPlusA  from '../src/BPlusA.js';
import OneForm  from '../src/OneForm.js';
import EasySelect  from '../src/EasySelect.js';


describe('test b plus a', () => {
  it('1+2は3である', () => {
    const sum = BPlusA.doCalc(1, 2);
    assert(sum === 3);
  });
});


describe( 'test set mode', () => {
  before(() => {
    document.body.innerHTML = window.__html__["test/fixtures/index.html"];
  });
  after(() => {
    document.body.innerHTML = "";
  });

  it('hiddenのmodeのvalueはconfirmである', () => {
    var fixture = $("#fixture");
    fixture.append("<input type=\"hidden\" name=\"mode\" value=\"\">");
    OneForm.setMode('confirm');
    assert( 'confirm' === $('input[name=mode]').val());
  });
});

describe( 'test element', () => {
  before(() => {
    document.body.innerHTML = window.__html__["test/fixtures/index.html"];
    var fixture = $("#fixture");
    fixture.append("<div id=\"loading\"></div>");
    fixture.append("<div id=\"detail-select\"></div>");
    fixture.append("<div id=\"light-select\"></div>");
    fixture.append("<div id=\"graph-select\"></div>");
    var  elm = EasySelect.element;
  });
  after(() => {
    document.body.innerHTML = "";
  });


  it('loadingを隠す', () => {
    EasySelect.hideLoading();
    assert( $('#loading').css('display') === 'none');
  });

  it('loadingを出す', () => {
    EasySelect.showLoading();
    assert( $('#loading').css('display') === 'block');
  });

  it('detailを隠す', () => {
    EasySelect.hideDetail();
    assert( $('#detail-select').css('display') === 'none');
  });

  it('lightを隠す', () => {
    EasySelect.hideLight();
    assert( $('#light-select').css('display') === 'none');
  });

  it('lightを出す', () => {
    EasySelect.handleClick();
    assert( $('#light-select').css('display') === 'block');
  });

});
