
function saludar(){
    let nombreSaludo = document.getElementById("saludo");
    let divSaludo  = document.getElementById("divSaludo");
    let Saludo = document.createElement("div");
    Saludo.textContent="Hola, "+ nombreSaludo.value;
    divSaludo.appendChild(Saludo);
}

function sumar(){
    let num1 =document.getElementById("num1").value;
    let num2 =document.getElementById("num2").value;
    let divResultado = document.getElementById("divSuma"); 
    let resultadoSuma = document.createElement("div");
    resultado.textContent= +num1 + +num2;
    divResultado.appendChild(resultadoSuma);
}
function convertir(){
    let celsius = document.getElementById("temp").value;
    let fahrenheit = (+celsius * 9/5) + 32;
    let resultadoTemp = document.createElement("div");
    resultadoTemp.textContent= fahrenheit + " °F";
    resultadoTemp.appendChild(fahrenheit);
}
    

