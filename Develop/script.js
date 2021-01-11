// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of different Characters
num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword(){
var confirmLength = "";

confirmLength = prompt('How many characters would you like your password to contain? Choose between 8 and 128.');

  if (!confirmLength) {
    alert('Please enter number of characters!');
  }
  else if(confirmLength <= 7 || confirmLength >= 129) {
    alert('Password length must be between 8-128 characters, Try Again!');
  } 

  else{
    var confirmNum = confirm("Will this contain numbers?");
    var confirmSpecialChar = confirm("Will this contain special characters?");
    var confirmUppercase = confirm("Will this contain Uppercase letters?");
    var confirmLowercase = confirm("Will this contain Lowercase letters?");
    alert('Your password will contain ' + (confirmLength) + ' characters!')
  }

  var selection;

  if (!confirmNum  && !confirmSpecialChar  && !confirmUppercase  && !confirmLowercase) {
    alert('Please confirm numbers, special characters, upper & lowercase selection!');
  }
  else if (confirmNum === true && confirmSpecialChar === true && confirmUppercase === true && confirmLowercase === true) {

    selection = num.concat(specialChar, upperAlpha, lowerAlpha);

    alert('Your password will contain number, special characters, upper & lowercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === true && confirmUppercase === true) {

    selection = num.concat(specialChar, upperAlpha);

    alert('Your password will contain number, special characters, uppercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === true && confirmLowercase === true) {

    selection = num.concat(specialChar, lowerAlpha);

    alert('Your password will contain number & special character & lowercase letter!');
  }

  else if (confirmNum === true && confirmUppercase === true && confirmLowercase === true) {

    selection = num.concat(upperAlpha, lowerAlpha);

    alert('Your password will contain numbers, upper & lowercase letters!');
  }

  else if (confirmSpecialChar === true && confirmUppercase === true && confirmLowercase === true) {

    selection = specialChar.concat(upperAlpha, lowerAlpha);

    alert('Your password will contain special character upper & lowercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === true) {

    selection = num.concat(specialChar);

    alert('Your password will contain numbers & special character!');
  }

  else if (confirmSpecialChar === true && confirmLowercase === true) {

    selection = specialChar.concat(lowerAlpha);

    alert('Your password will contain special character & lowercase letters!');
  }

  else if (confirmSpecialChar === true && confirmUppercase === true) {

    selection = specialChar.concat(upperAlpha);

    alert('Your password will contain special character & uppercase letters!');
  }

  else if (confirmNum === true && confirmLowercase === true) {

    selection = num.concat(lowerAlpha);

    alert('Your password will contain numbers & lowercase letters!');
  }
  else if (confirmNum === true && confirmUppercase === true) {

    selection = num.concat(upperAlpha);

    alert('Your password will contain numbers & uppercase letters!');
  }

  else if (confirmUppercase === true && confirmLowercase === true) {

    selection = upperAlpha.concat(lowerAlpha);

    alert('Your password will contain upper & lowercase letters!');
  }

  else if (confirmSpecialChar === true && confirmLowercase === true) {

    selection = specialChar.concat(lowerAlpha);

    alert('Your password will contain special characters & lowercase letters!');
  }

  else if (confirmNum) {

    selection = num;

    alert('Your password will contain numbers!');
  }

  else if (confirmSpecialChar) {

    selection = specialChar;

    alert('Your password will contain special characters!');
  }

  else if (confirmUppercase) {

    selection = upperAlpha;

    alert('Your password will contain uppercase letters!');
  }

  else if (confirmLowercase) {

    selection = lowerAlpha;

    alert('Your password will contain lowercase letters!');
  };

  var generatedPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    generatedPassword = generatedPassword + selection[Math.floor(Math.random() * selection.length)];
    console.log(generatedPassword)
  }

  return generatedPassword;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
