// Assignment Code
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "!@#$%^&*()_+-=[]{};:,<.>/?".split("");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = getDesiredLength(
    "Enter the length of the password (8 - 128 characters): "
  );
  console.log("length: ", length);

  // passwordText.value = password;
}

// Prompts: character types

// Prompt for length, calls recursively until a valid length is entered
function getDesiredLength(msg) {
  var requestLength = prompt(msg.toString());
  if (isNaN(requestLength)) {
    requestLength = getDesiredLength("Please enter a number.");
  }
  if (requestLength < 8 || requestLength > 128) {
    requestLength = getDesiredLength(
      "Please enter a number between 8 and 128."
    );
  }
  return parseInt(requestLength);
}

// Get a random character of a given type
function getRandomChar(type) {
  switch (type) {
    case "lowercase":
      return getRandomIndex(alphabet);
    case "uppercase":
      const uppercaseArr = alphabet.map((letter) => letter.toUpperCase());
      return getRandomIndex(uppercaseArr);
    case "numeric":
      return getRandomIndex(numbers);
    case "special":
      return getRandomIndex(symbols);
    default:
      return getRandomIndex(alphabet);
  }
}

// Return a random index of a given array
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
