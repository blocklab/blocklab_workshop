contract('Presidency', function(accounts) {

  var alice = accounts[1];
  var bob = accounts[2];
  var contract;

  var TRUMP_PICK = 1;

  beforeEach(function() {
    contract = Presidency.deployed();
  });

  it('accepts bets on trump', function() {
    return contract.bet(TRUMP_PICK, {
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
    return contract.bet(TRUMP_PICK, {
      from: bob,
      value: web3.toWei(9, 'ether')
    }).catch(function() {
    });
  });
});
