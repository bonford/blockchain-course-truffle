pragma solidity ^0.4.4;

contract Calculator {
  uint result;
  function Calculator(uint initial) {
    // constructor
    result = initial;
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

 function divideByNumber(uint num) {
    result = result / num;
}

function double(){
  result = 2 * result;
}

function half() {
  result = result / 2;
}

}
