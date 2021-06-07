/*
Codeland Username Validation

Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function CodelandUsernameValidation(str) { 
    // code goes here  
    var n = str.length;
    if(str[n-1] ==='_' || n<4 || n>25 || !(/^[a-zA-Z()]+$/.test(str[0]))) {
      return false; 
    }
    else{  
      return /^[a-zA-Z()]+$/.test(str) || isNaN(str) 
    }
    
  }
     
  // keep this function call here 
console.log(CodelandUsernameValidation("aaaa"));

document.querySelector("#result").innerHTML= CodelandUsernameValidation("aaa_")