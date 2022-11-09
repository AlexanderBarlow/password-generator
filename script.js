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

//Global Declaration of variables for use across functions
var characterAmount;
var selectUpperCase;
var selectLowerCase;
var selectSpecial;

//object declaration for potential password properties
characterList = {
  num: ('0','1','2','3','4','5','6','7','8','9'),
  character: ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'),
  specialCharacter: ('!', '?', '#', '*'),
};


function writePassword(){
  //Prompting user with password otions
var selectUpperCase = confirm ("Would you like uppercased characters?");
console.log(selectUpperCase);
var selectLowerCase = confirm ("Would you like lowercased characters?")
console.log(selectLowerCase);
var selectSpecial = confirm ("Would you like special characters?");
console.log(selectSpecial);

//if user selects none, user will be asked to accept one condition, will repeat until done
if (selectUpperCase === false && selectLowerCase === false && selectSpecial === false){
  alert("Please select at least one.")
  var selectUpperCase = confirm ("Would you like uppercased characters?");
  console.log(selectUpperCase);
  var selectLowerCase = confirm ("Would you like lowercased characters?")
  console.log(selectLowerCase);
  var selectSpecial = confirm ("Would you like special characters?");
  console.log(selectSpecial);
}

//prompting user for password length
var characterAmount = prompt("How many characters would you like to include? ");
//verfying the password is at least 8 characters long and less than 128
while (characterAmount < 8  || characterAmount > 128){
  characterAmount = prompt("Please choose a greater than 8, but less than 128.");
} 
//Alerting user for successfully filling out criteria
if(characterAmount >= 8  || characterAmount <= 128 ){
  alert("Thank you!")
}
//calling generatePassword Function for password
  generatePassword();

  return password;
};


function generatePassword() {
  for (var i = 0; i < characterAmount.length; i++){
    password = Math.floor(Math.random * num.length)
  }
  return password;
};