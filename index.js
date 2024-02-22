/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

function convert(num) {
    let inputValue = document.getElementById("input-box").value
    
    let feet = inputValue * 3.281
    let gallons = inputValue * 0.264
    let pounds = inputValue * 2.204
    let meters = inputValue / 3.281
    let liters = inputValue / 0.264
    let kilograms = inputValue / 2.204
    
    let outputLength = `<p>${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters</p>`
        lengthResult.innerHTML = outputLength
    let outputVolume = `<p>${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters</p>`
        volumeResult.innerHTML = outputVolume
    let outputMass = `<p>${inputValue} kilograms = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilograms.toFixed(3)} kilograms</p>`
        massResult.innerHTML = outputMass
}

convertBtn.addEventListener("click", function(){
    convert()
})