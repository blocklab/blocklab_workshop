pragma solidity ^0.4.2;

contract Presidency {

  address public trumpBet;
  address public hillaryBet;
  address public oracle;

  function Presidency() {
    oracle = tx.origin;
  }

  function bet(uint pick) payable {
    if (msg.value == 10000000000000000000) {
      if (pick == 1) {
        trumpBet = msg.sender;
      } else if (pick == 0) {
        hillaryBet = msg.sender;
      }
    } else {
      throw;
    }
  }

  function resolve(uint winner) {
    if (winner == 0) {
      if (!hillaryBet.send(this.balance)) {
        throw;
      }
    } else if (winner == 1) {
      if (!trumpBet.send(this.balance)) {
        throw;
      }
    }
  }
}
