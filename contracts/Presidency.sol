pragma solidity ^0.4.2;

contract Presidency {

  address public trumpBet;

  function bet(uint pick) payable {
    if (msg.value == 10000000000000000000) {
      trumpBet = msg.sender;
    } else {
      throw;
    }
  }
}
