
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "add test", function( assert ) {
  assert.ok( BPlusA.doCalc(2, 3) == 5, "Passed!"  );
});

QUnit.test( "set hidden mode test", function( assert ) {
  var fixture = $( "#qunit-fixture" );
  fixture.append("<input type=\"hidden\" name=\"mode\" value=\"\">");
  OneForm.setMode('confirm');
  assert.ok( 'confirm' == $('input[name=mode]').val(), "mode value is confirm!");
});

