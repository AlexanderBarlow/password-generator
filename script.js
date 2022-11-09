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


//object declaration for potential password properties
characterList = {
  num: ['0','1','2','3','4','5','6','7','8','9'],
  character: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCharacter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  specialCharacter: ['!', '?', '#', '*'],
};

function generatePassword() {
  //Prompting user with password otions
  var selectUpperCase = confirm ("Would you like uppercased characters?");
  console.log(selectUpperCase)
  var selectLowerCase = confirm ("Would you like lowercased characters?")
  console.log(selectLowerCase)
  var selectSpecial = confirm ("Would you like special characters?");
  console.log(selectSpecial)
  var selectNum = confirm ("Would you like numbers?")
  console.log(selectNum)
  
  //if user selects none, user will be asked to accept one condition, will repeat until done
  if (selectUpperCase === false && selectLowerCase === false && selectSpecial === false){
    alert("Please select at least one.")
     selectUpperCase = confirm ("Would you like uppercased characters?")
    console.log(selectUpperCase)
     selectLowerCase = confirm ("Would you like lowercased characters?")
    console.log(selectLowerCase)
     selectSpecial = confirm ("Would you like special characters?")
    console.log(selectSpecial)
    selectNum = confirm ("Would you like numbers?")
    console.log(selectNum)
  }
  
  //prompting user for password length
  var characterAmount = prompt("How many characters would you like to include? ")
  console.log(characterAmount)

  if (isNaN(characterAmount)){
    alert("Please only enter a number in character form.")
    return
  }
  //verfying the password is at least 8 characters long and less than 128
  while (characterAmount < 8  || characterAmount > 128){
    characterAmount = prompt("Please choose a greater than 8, but less than 128.")
    return
  } 
  //Alerting user for successfully filling out criteria
  if(characterAmount >= 8  || characterAmount <= 128 ){
    alert("Thank you!")
  }

  var passwordPotential= []


  if (selectUpperCase === true){
    passwordPotential.push(characterList.upperCharacter)
  }

  if (selectLowerCase === true){
    passwordPotential.push(characterList.character)
  }

  if (selectSpecial === true){
    passwordPotential.push(characterList.specialCharacter)
  }
  if (selectNum === true){
    passwordPotential.push(characterList.num)
  }

var generatedPassword = ''
for (var i = 0; i < characterAmount; i++){
  var randomList = getRandomPasswordItem(passwordPotential)
  var randomCharacter = getRandomPasswordItem(randomList)
  generatedPassword += randomCharacter
}

return generatedPassword
}

//This function serves the purpose of generating a random number from the given arrays in characterList Object
function randomNum(min,max){
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand)+rand*max)
}

function getRandomPasswordItem(list){
  return list[randomNum(list.length)]
}