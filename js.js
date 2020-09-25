//declaring varables outside of the function

    var clickToPlay = confirm("Click Generate Password")
      
    var play = document.getElementById("password"); 
  
// declaring variables within the function
  function generatePassword() { 
      var pass = ''; 
      var number = "0123456789"; 
      var symbol = "!%^&@#$";
      var upeerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
      var lowerCase = "bcdefghijklmnopqrstuvwxyz";
      var str = ''; 
        
// promting the user         
      var userPassLength = prompt("Choose a length between 8 and 128?");
      var userUpperCase = confirm("Do you need uppercase character's in your password?");
      var userLowerCase = confirm ("Would you like lowercase letters in your password?");
      var userSymbol = confirm ("Would you like to use symbols in your password?");
      var userNumber = confirm ("Would you like to include numbers in your password?");

// creating my if statments and adding the characters into my empty string      

      if (userUpperCase === true) {
        str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
      if (userNumber === true) {
        str+="0123456789";
        }
      if (userLowerCase === true) {
        str+="bcdefghijklmnopqrstuvwxyz";
        }
      if (userSymbol === true) {
        str+="!%^&@#$";
        }

// error message when the user clicks cancel on all four booleans 

      if (userSymbol=== false && userUpperCase=== false && userNumber===false && userLowerCase===false) {
        alert ("Try again, you must use one set of characters");
        
      }
      
// randomizing all the characters that were added to the empty string when the user picked their choices      

      for (i = 1; i <= userPassLength; i++) { 
          var char = Math.floor(Math.random() 
                      * str.length + 1); 
            
          pass += str.charAt(char) 
      } 
        
      return pass; 
  } 
  
//calling the function & displaying their new password
  function run() { 
      play.innerHTML = generatePassword(); 
  } 


































