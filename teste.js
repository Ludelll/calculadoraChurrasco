let inputMen = document.getElementById("calcMen");
let inputWomen = document.getElementById("calcWomen");
let inputChild = document.getElementById("calcChild");
let divResult = document.getElementById("calcDiv")

let button = document.getElementById("calcButton");

button.addEventListener("click", function() {
    let resultMen = Number (inputMen.value) * 450;
    let resultWomen = Number (inputWomen.value) * 350;
    let resultChild = Number (inputChild.value) * 170;
    let resultFinal = (resultChild + resultMen + resultWomen) / 1000
    divResult.innerText = `Você precisa de ${resultFinal}kg de carne para o churrasco todo.`

})