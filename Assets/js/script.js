// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var makePass = window.confirm("Would you like to generate a password? Click OK to continue.");

  if (makePass) {
    var passLength = window.prompt("How long would you like your password to be? Pick a number from 8 to 128.");
    parseInt(passLength);
    while (passLength < 8 || passLength > 128) {
      var passLength = window.prompt("Please pick a number from 8 to 128.");
      parseInt(passLength);
    }
    if (passLength) {
      var lowerCase = window.confirm("Would you like at least one lowercase character? OK for yes, Cancel for no.");
      if (lowerCase) {

      }
      else {

      }
    }
  }
  else {
    window.alert("Click 'Generate Password' if you change your mind!");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
