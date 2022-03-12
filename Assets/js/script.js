// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLow = "abcdefghijklmnopqrstuvwxyz";
var passHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passNum = "0123456789";
var passChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  // asking if you want to make a password, if not then quit
  var makePass = window.confirm("Would you like to generate a password? Click OK to continue.");
  // to determine what is in password
  if (makePass) {
    var passLength = window.prompt("How long would you like your password to be? Pick a number from 8 to 128.");
    // won't proceed unless value is a number between 8 and 128
    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
      var passLength = window.prompt("Please pick a number from 8 to 128.");
    }
    if (passLength) {
      var lowerCase = window.confirm("Would you like at least one lowercase character? OK for yes, Cancel for no.");
      if (!lowerCase) {
        var passContent = "";
      }
      else {
        var passContent = passLow;
      }
      var upperCase = window.confirm("Would you like at least one uppercase character? OK for yes, Cancel for no.");
      if (upperCase) {
        var passContent = passContent + passHigh;
      }
      var incNum = window.confirm("Would you like at least one number? OK for yes, Cancel for no.");
      if (incNum) {
        var passContent = passContent + passNum;
      }
      var incChar = window.confirm("Would you like at least one special character? OK for yes, Cancel for no.");   
      if (incChar) {
        var passContent = passContent + passChar;
      }
    }
  }
  else {
    window.alert("Click 'Generate Password' if you change your mind!");
  }

  var password = "";

  // loop to select a random character from passContent
  for (i = 0; i < passLength; i++) {
    var choice = Math.floor(Math.random() * passContent.length);
    password += passContent.substring(choice, choice +1);
  }
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  // window.alert(password); // to see if password gets generated - it does at the moment
  // window.alert(passContent); // to see if each selection works - it does at the moment
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
