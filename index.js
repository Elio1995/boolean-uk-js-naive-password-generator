// let page = alert(`This is a Password Generator!`)
// let yourName = prompt(`What is your name?`)
// let yourSurname = prompt(`What is your surname?`)
// let yourColour = prompt(`What is your favourite colour?`)

// let password = yourName + yourSurname + yourColour + 42

// let passwordGenerate = alert(`Your Password is ${password}.`)

// console.log(passwordGenerate)


// let page = alert(`This is a Password Generator!`)
// let yourName = prompt(`What is your name?`)
// let yourSurname = prompt(`What is your surname?`)
// let yourColour = prompt(`What is your favourite colour?`)
// let numberGenerator = Number(prompt(`Pick a random number from 0 to 200`))
// let numberGenerator = Math.floor(Math.random() * 200) 

// let password = yourName + yourSurname + yourColour + numberGenerator

// let passwordGenerate = alert(`Your Password is ${password}.`)

// console.log(passwordGenerate)



let page = alert(`This is a Password Generator!`)
let yourName = prompt(`What is your name?`)
let yourSurname = prompt(`What is your surname?`)
let yourColour = prompt(`What is your favourite colour?`)
// let numberGenerator = Math.random(200).toFixed(2) * 10
let numberGenerator1 = Math.floor(Math.random() * 100)
let numberGenerator2 = Math.floor(Math.random() * 100)

let password = yourName + yourSurname + yourColour + numberGenerator1 + numberGenerator2

let passwordGenerate = alert(`Your Password is ${password}.`)

console.log(passwordGenerate)