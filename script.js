///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890"
var specChar = "!@#$%^&*()_+-={}|[]\:<>?,./~`";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var num = ["0","1","2","3","4","5","6","7","8","9"];
  var password = "";
  var getLength = "";


  // var randUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
  // var randLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  // var randNum = num[Math.floor(Math.random() * num.length)];
  // var randSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

  
document.querySelector("#generate").addEventListener("click", generatePassword);
function generatePassword() {
  var getLength = prompt ("Password must be between 8-128 characters.");
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
    return (password,getLength);
  } 
  generatePassword();

  for (var i = 0; i < getLength; i++) {
    
  }



  // for (var i=0; i < pwLength.length; i=i+1) {
  //   password = pwLength(upperCase[randUpper] + lowerCase[randLower] + num[randNum] + specialChar[randSpecialChar]);
  //   console.log(password);
  //  }
