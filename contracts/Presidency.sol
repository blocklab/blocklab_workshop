pragma solidity ^0.4.2;

contract Presidency {

  address public trumpBet;
  function betOnTrump() payable {
    trumpBet = msg.sender;
  }
}
