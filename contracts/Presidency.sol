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
}
