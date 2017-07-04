pragma solidity ^0.4.4;

contract Calculator {
  uint result = 10;
  function Calculator() {
    // constructor
  }

  function getResult() constant returns (uint) {
    return result;
}

  function addToNumber(uint num){
    result += num;
}

  function subtractFromNumber(uint num) {
    result -= num;
}

 function multiplyWithNumber(uint num) {
    result *= num;
}

 function divideByFromNumber(uint num) {
    result /= num;
}

}
