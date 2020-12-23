//Dom Elements
const submit = document.querySelector('.submit')
const symbolsEl = document.querySelector('.symbols-check')
const numbersEl = document.querySelector('.numbers-check')
const lowerEl = document.querySelector('.lower-check')
const upperEl = document.querySelector('.upper-check')
const lengthEl = document.querySelector('.length-check')
const outputEl = document.querySelector('.output-area')
//add clipboard

//Put random functions into an object
const randomFunc = {
    lower: randomLowerCase,
    upper: randomUppercase,
    numer: randomNumber,
    symbol: randomSymbol
    
    
}




//Event listener for the submit button

submit.addEventListener('click', ()=> {
    const length = + lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumber = numbersEl.checked;
    // console.log(length)
    // console.log(hasLower)
    // console.log(hasUpper)
    // console.log(hasNumber)
    // console.log(hasSymbol)


    outputEl.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper,length)
    

})

//Generate the Final password based on the user input and checked boxes
function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    
   //number of checked boxes 
   //gets the object with true or false object 
    const typesCount = lower + upper + number + symbol ;
    
    
    
    
     //Array of Objects by wrapping in curly braces
    //If false it will be filtered out of the array
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
   
    
    //If none are checked it will return nothing
    if(typesCount === 0){
        return ''

    }
    
    //Loop though the typesArray and call the 
    for(let i=0; i<length; i+=typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log(funcName)

            generatedPassword += randomFunc[funcName]();
            // generatedPassword += randomFunc[funcName]();
            

        })

    }
    
	

    const finalPassword = generatedPassword.slice(0, length)
    console.log(finalPassword)
    
    

    return finalPassword

}





// Randon Functions 
function randomLowerCase (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomUppercase (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function randomNumber (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 49)
}
function randomSymbol (){
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}



// console.log(randomUppercase())
// console.log(randomLowerCase())
// console.log(randomNumber())
// console.log(randomSymbol())




    
        




 


































