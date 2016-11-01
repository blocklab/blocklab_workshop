contract('Presidency', function(accounts) {
  it('is defined', function() {
    var contract = Presidency.deployed();

    assert.isDefined(contract);
  });
});
