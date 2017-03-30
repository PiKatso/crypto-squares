var translateString = function(string) {
  var numChars = string.length;
  var charArray = string.split('');
  var columns = Math.floor(Math.sqrt(numChars));
  var numberOfRows = Math.ceil(Math.sqrt(numChars));
  var bigArray = [];
  while (charArray.length > 0) {
    bigArray.push(charArray.splice(0, columns));
  }
  var cryptoArray = [];
  for(var i = 0; i < columns; i++) {
    bigArray.forEach(function(row) {
      cryptoArray.push(row[i]);
    });
  }
  return cryptoArray.join('');
}

var validateString = function(string) {
  return true;
}

$(document).ready(function() {
  $('form').submit(function(){
    var input = $('input').val();
    if (validateString(input) === true) {
      //compute result
      var result = translateString(input);
      $('#output').text(result);
    }
    return false;
  });
});
