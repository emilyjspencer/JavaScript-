(function(exports) {
  function testCheckThatFivePlusFiveIsTen() {
    var number =  5
    var number2 = 5
    if(number + number2 !== 10) {
      throw new Error("Incorrect answer!")
    } 

  };
  testCheckThatFivePlusFiveIsTen()
})(this);

