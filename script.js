// Assignment Code
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "!@#$%^&*()_+-=[]{};:,<.>/?".split("");
const lengthMsg = `Enter the length of the password (8 - 128 characters): `;
const charTypeMsg = `Enter the letter of each type you would like your password to contain:\n
  U: uppercase, L: lowercase, N: numeric, S: special \n
  * Case and position of letters do not matter`;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var length = getDesiredLength(lengthMsg);
  var options = getCharacterTypes(charTypeMsg);

  passwordText.value = generatePassword(length, options);
}

function generatePassword(length, options) {
  let password = "";
  let cycle = options.slice();

  for (let i = 0; i < length; i++) {
    const typeIndex = Math.floor(Math.random() * cycle.length);
    const type = cycle.splice(typeIndex, 1);
    if (cycle.length === 0) {
      cycle = options.slice();
    }
    password += getRandomChar(type[0]);
  }

  return password;
}

// Get input from the user for the desired character types
function getCharacterTypes(msg = charTypeMsg) {
  let types = prompt(msg.toString()).toUpperCase();
  const permissableTypes = ["U", "L", "N", "S"];

  let selections = []; //This is the array that will actually return
  for (let i = 0; i < permissableTypes.length; i++) {
    if (types.includes(permissableTypes[i])) {
      selections.push(permissableTypes[i]);
    }
  }

  // At least one option must be selected
  if (selections.length === 0) {
    selections = getCharacterTypes(
      "Please input at least one valid entry.\n" + charTypeMsg
    );
  }

  return selections;
}

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
    case "L":
      return getRandomIndex(alphabet);
    case "U":
      const uppercaseArr = alphabet.map((letter) => letter.toUpperCase());
      return getRandomIndex(uppercaseArr);
    case "N":
      return getRandomIndex(numbers);
    case "S":
      return getRandomIndex(symbols);
    default:
      console.error("Invalid type: ", type);
      return getRandomIndex(alphabet);
  }
}

// Return a random index of a given array
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
