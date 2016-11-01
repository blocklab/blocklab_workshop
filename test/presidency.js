contract('Presidency', function(accounts) {

  var oscarTheOracle = accounts[0];
  var aliceForTrump = accounts[1];
  var bobForHillary = accounts[2];
  var contract;

  var TRUMP_PICK = 1;
  var HILLARY_PICK = 0;

  beforeEach(function() {
    contract = Presidency.deployed();
  });

  it('accepts bets on trump', function() {
    return contract.bet(TRUMP_PICK, {
      from: aliceForTrump,
      value: web3.toWei(10, 'ether')
    });
  });

  it('accepts bets on hillary', function() {
    return contract.bet(HILLARY_PICK, {
      from: bobForHillary,
      value: web3.toWei(10, 'ether')
    }).then(function() {
      contract.hillaryBet.call().then(function(better) {
        assert.equal(better, bobForHillary);
      })
    });
  });

  it('knows who bet on trump', function() {
    return contract.trumpBet.call().then(function(better) {
      assert.equal(better, aliceForTrump);
    })
  });

  it('does not accept a bet under 10 ether', function() {
    return contract.bet(TRUMP_PICK, {
      from: bobForHillary,
      value: web3.toWei(9, 'ether')
    }).catch(function() {
    });
  });

  it('sets the contract creator as an oracle', function() {
    return contract.oracle.call().then(function(oracle) {
      assert.equal(oracle, oscarTheOracle);
    });
  });
});
