//Dom Elements
const submit = document.querySelector('.submit-button')
const symbolsEl = document.querySelector('.symbols-check')
const numbersEl = document.querySelector('.numbers-check')



//Event listener for the submit button





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




    
        




 


































