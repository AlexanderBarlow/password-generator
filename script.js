// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = writePassword.generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

characterList = {
  num: ('0','1','2','3','4','5','6','7','8','9'),
  character: ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'),
  specialCharacter: ('!', '?', '#', '*'),
}
var selectUpperCase = '';
var selectSpecial = '';
var characterAmount = '';


function writePassword(){

var selectUpperCase = confirm ("Would you like uppercased characters?");
console.log(selectUpperCase);
var selectLowerCase = confirm ("Would you like lowercased characters?")
console.log(selectLowerCase);
var selectSpecial = confirm ("Would you like special characters?");
console.log(selectSpecial);
var characterAmount = prompt("How many characters would you like to include? ");

while (characterAmount < 8  || characterAmount > 128){
  characterAmount = prompt("Please choose a greater than 8, but less than 128.");
} 

if(characterAmount >= 8  || characterAmount <= 128 ){
  alert("Thank you!")
}

}

function generatePassword(){

  if (selectUpperCase === true && selectSpecial === true){
    for (var i = 0; i <= characterAmount; i++){
      password = math.floor(math.random() * characterList.num.length);
    }
    return;
  }

}