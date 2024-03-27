const tempInput = document.getElementById("temp-input");
const button = document.getElementById("button");
const outputDiv = document.getElementById("output-div");



button.addEventListener("click", () => {
    convertCelsius()
    outputDiv.style.display = "block";
})


let fahrenheit = "";

let celsius;

const convertCelsius = () =>{
    celsius = tempInput.value;
    fahrenheit = (9/5 * celsius) + 32;
    let rounded = Math.round(fahrenheit * 10) / 10;
    outputDiv.innerHTML = rounded + " °F";
    tempInput.value = "";
}



