var Calculator = artifacts.require("./Calculator.sol");

contract('Calculator', function(accounts) {

  // Expected behavior - result is initialized to 10
  // Test Case #1
  it("should assert true", function() {
    var calculator;
    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.getResult.call();
    }).then(function (result) {
      assert.equal(result.valueOf(), 10, "Contract initialized with value NOT equal to 10");
      calculator.addToNumber(10);
      calculator.subtractFromNumber(5);
      calculator.multiplyWithNumber(10);
      calculator.divideByNumber(5);
      return calculator.getResult.call();
    }).then(function(result) {
      assert.equal(result.valueOf(), 30, "Contract initialized with value NOT equal to 30");
      calculator.double();  
      return calculator.getResult.call();    
    }).then(function(result) {
      assert.equal(result.valueOf(), 60, "Contract initialized with value NOT equal to 60");
      calculator.half(); 
      return calculator.getResult.call();         
    }).then(function(result) {
      assert.equal(result.valueOf(), 30, "Contract initialized with value NOT equal to 30");
              
    });        
  });
});
