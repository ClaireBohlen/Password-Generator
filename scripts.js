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

    outputEl.innerText = generatePass (
    length, 
    hasLower, 
    hasNumber, 
    hasSymbol, 
    hasUpper
    )

})

//Generate the Final password based on the user input and checked boxes
function generatePass(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0){
        return ''

    }
    for(let i=0; i<length; i+=typesCount){
        typesArray.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

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




    
        




 


































