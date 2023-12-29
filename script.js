// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characters = prompt("How many characters should the password contain (8-128)");
  var upperCase = prompt("Should the password contain uppercase letters?");
  var lowerCase = prompt("Should the password contain lowercase letters?");
  var numbers = prompt("Should the password contain numbers?");
  var symbols = prompt("Should the password contain symbols?");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(input) {
    if (input === "8") {
        console.log("characters");
        return getRandomNumber();
    }
    if (input === "yes") {
        console.log("upper");
        return getRandomUpper();
    }
    if (input === "yes") {
        console.log("lower")
        return getRandomLower();
      }
      if (input === "yes") {
        console.log("numbers")
        return getRandomNumber();
      }
      if (input === "yes") {
        console.log("symbols")
        return getRandomSymbol();
      }
}


