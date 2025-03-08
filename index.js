/*
    1. When you get elements from the DOM and store it in a variable it is always a best practice to declare this variables with const keyword to prevent any reassignments

    2. The same thing for the variables like passwordLength and randomChar. You just store some data inside that variables that shouldnt be reassigned in the future

    The rest of the code looks and works perfect. Great job using camel case for naming. Your functions are pretty descriptive, well organized and do they own task

    I hope that my code review will help you take your skills to next level. Good luck!
*/

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let box1 = document.getElementById("box1-h5")
let box2 = document.getElementById("box2-h5")

let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

function display(){
    box1.textContent = generateRandomPassword()
    box2.textContent = generateRandomPassword()
}
