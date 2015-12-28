
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "form test", function( assert ) {
  assert.ok( Tashizan.doSubmit(2, 3) == 4, "Passed!"  );
});

QUnit.test( "set hidden mode test", function( assert ) {
  var fixture = $( "#qunit-fixture" );
  fixture.append("<input type=\"hidden\" name=\"mode\" value=\"\">");
  OneForm.setMode('confirm');
  assert.ok( 'confirm' == $('input[name=mode]').val(), "mode value is confirm!");
});

