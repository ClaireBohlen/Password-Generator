//Dom Elements
const submit = document.querySelector('.submit-button')
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
    const length = +lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumber = numbersEl.checked;

    console.log(length, hasLower, hasNumber, hasSymbol, hasUpper)

})





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


console.log(randomUppercase())
console.log(randomLowerCase())
console.log(randomNumber())
console.log(randomSymbol())




    
        




 


































