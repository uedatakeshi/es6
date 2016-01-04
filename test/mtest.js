import assert  from 'power-assert';
import BPlusA  from '../src/BPlusA.js';
import OneForm  from '../src/OneForm.js';


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

