// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters should the password contain (8-128)?");
  
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  var includeUpperCase = confirm("Should the password contain uppercase letters?");
  var includeLowerCase = confirm("Should the password contain lowercase letters?");
  var includeNumbers = confirm("Should the password contain numbers?");
  var includeSpecialCharacters = confirm("Should the password contain special characters?");

  // Validate that at least one character type is selected
  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialCharacters) {
    alert("Please select at least one character type.");
    return;
  }

  var password = generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSpecialCharacters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate password based on criteria
function generatePassword(length, upperCase, lowerCase, numbers, specialCharacters) {
  var allCharacters = "";
  
  if (upperCase) {
    allCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCase) {
    allCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    allCharacters += "0123456789";
  }
  if (specialCharacters) {
    allCharacters += "!@#$%^&*()_+[]{}|;:,.<>?";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
