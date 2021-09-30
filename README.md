# Password Generator

![Password Generator Preview](https://github.com/iatenine/password-generator/blob/b35997e10b4a654dd0f46cd0de8b3adeb1ab58ac/password-screenshot.png)

## Description

This repo was created as part of a project to plan and implement the logic of deploying a password generator
The requirements involved getting effectively 2 pieces of information from a user, validating the input
and generating a password dynamically on their respons

When the Generate Password button is clicked, the user should be prompted for the length of the password they
want created and which character types they would like included: uppercase, lowercase, numeric and/or special

User input for length must be restricted to a range of 8 and 128 inclusive and user _must_ select at least
onc character type from the list

The password generated should include at least one of each type selected but no characters outside of those bounds

## Approach

I approached this assignment from a broad perspective first, breaking down the overall "writePassword()" function
to its base components that could be delegated to smaller helper functions, the pseudo code looked something like
as follows:

```
function writePassword(){
    var length = getLength();     //Break off user prompts to handle input validation in isolation
    var options = getOptions();

    var password = generatePassword(length, options);

    // Write password to DOM
}
```

## Challenges

Handling user input directly in the function that returned the result increased the risk of WET code but this was handled
by making the message displayed in the prompt an argument and using recursion

generating the password and ensuring it would have at least one of each character type was resolved by slicing the options
array into a different array which would be _spliced_ at a random index each loop to determine the type of the next character.
When the final element has been spliced out, the options array is sliced again and the cycle repeats While this may run the
risk of generating less randomized passwords by looping through the same types every nth interation (at least when n > 1),
it would still take a considerable amount of time to brute force so long as a user chose sufficient length for their selected
options (10+ recommended for all options, 25+for numbers only):

![reference](https://millionairetrek.com/wp-content/uploads/2020/09/hacker-to-brute-force-your-password.png)
