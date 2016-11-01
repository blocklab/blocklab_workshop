contract('Presidency', function(accounts) {

  var alice = accounts[1];
  var bob = accounts[2];
  var contract;

  beforeEach(function() {
    contract = Presidency.deployed();
  });

  it('accepts bets on trump', function() {
    return contract.betOnTrump.sendTransaction({
      from: alice,
      value: web3.toWei(10, 'ether')
    });
  });

  it('knows who bet on trump', function() {
    return contract.trumpBet.call().then(function(better) {
      assert.equal(better, alice);
    })
  });

  it('does not accept a bet under 10 ether', function() {
    return contract.betOnTrump.sendTransaction({
      from: bob,
      value: web3.toWei(9, 'ether')
    }).catch(function() {
    });
  });
});
