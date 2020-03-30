(function(exports) {
  var SMILEY_COUNT = 10

  function makeSmiley(string) {
    return string + "!".repeat(SMILEY_COUNT);
  };

  exports.makeSmiley = makeSmiley;
})(this);