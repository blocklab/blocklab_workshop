var betOnTrump = function() {
  Presidency.deployed().bet(1, {
    from: web3.eth.coinbase,
    value: web3.toWei(10, 'ether')
  });
};

var betOnHillary = function() {
  Presidency.deployed().bet(0, {
    from: web3.eth.coinbase,
    value: web3.toWei(10, 'ether')
  });
};

var resolve = function() {
  Presidency.deployed().resolve(document.getElementById('winner').value, {
    from: web3.eth.coinbase
  });
};