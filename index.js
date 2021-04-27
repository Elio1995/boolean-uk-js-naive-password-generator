let page = alert(`This is a Password Generator!`)
let yourName = prompt(`What is your name?`)
let yourSurname = prompt(`What is your surname?`)
let yourColour = prompt(`What is your favourite colour?`)

let password = yourName + yourSurname + yourColour + 42

let passwordGenerate = alert(`Your Password is ${password}.`)

console.log(passwordGenerate)