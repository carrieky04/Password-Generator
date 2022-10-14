///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////


var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890"
var specialChar = "!@#$%^&*()_+-={}|[]\:<>?,./~`";
var password = "";
var getLength = "";

  

function generatePassword() {
  var getLength = prompt ("Choose between 8-128 characters.");
    
  var useUpperCase = confirm ("Would you like upper case letters?");
    if (useUpperCase === true) {
      password += upperCase;
    }
  var useLowerCase = confirm ("Would you like lower case letters?");
    if (useLowerCase === true) {
      password += lowerCase;
    }
  var useNum = confirm ("Would you like numbers?");
    if (useNum === true) {
      password += num;
    }
  var useSpecialChar = confirm ("Would you like special characters?");
    if (useSpecialChar === true) {
      password += specialChar;
    }
   
  var passwordText="";
    for (var i = 0; i < getLength; i++) {
      passwordText += password[Math.floor(Math.random() * password.length)];
    }
      return passwordText;
  } 


  




