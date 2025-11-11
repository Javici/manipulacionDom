
function saludar(){
    let nombreSaludo = document.getElementById("saludo");
    let divSaludo  = document.getElementById("divSaludo");
    divSaludo.innerHTML = "";
    let Saludo = document.createElement("div");
    Saludo.textContent="Hola, "+ nombreSaludo.value;
    divSaludo.appendChild(Saludo);
}

function sumar(){
    let num1 =document.getElementById("num1").value;
    let num2 =document.getElementById("num2").value;
    let divResultado = document.getElementById("divSuma"); 
    divResultado.innerHTML = "";
    let resultadoSuma = document.createElement("div");
    resultadoSuma.textContent= +num1 + +num2;
    divResultado.appendChild(resultadoSuma);
}
function convertir(){
    let celsius = document.getElementById("temp").value;
    let fahrenheit = (+celsius * 9/5) + 32;
    let divFahren = document.getElementById("FHT"); 
    divFahren.innerHTML = "";
    let resultadoTemp = document.createElement("div");
    resultadoTemp.textContent= fahrenheit + " °F";
    divFahren.appendChild(resultadoTemp);
}

function contador(){
    let divContador = document.getElementById("divContador");
    let count = parseInt(divContador.textContent);
    count++;
    divContador.textContent= count;
        }

function lista() {
    let listadiv = document.getElementById("listadin");
    let listaCompras = document.getElementById("lista").value;
    if(listaCompras.trim() === "") return; 
    let item = document.createElement("li");
    item.textContent = listaCompras;
    listadiv.appendChild(item);
    document.getElementById("lista").value = ""; 
}

function arrayNumeros() {}

function rojo() {
    document.body.style.backgroundColor = "#e3735f";
}    
function verde() {
    document.body.style.backgroundColor = "#6aba71";
}
function azul() {
    document.body.style.backgroundColor = "#84b4e0";
}
function blanco() {
    document.body.style.backgroundColor = "white";
}

function ocultar() {
    let texto = document.getElementById("oculto");
    let boton = document.getElementById("mostrar");

    if (texto.style.display === "block") {
        texto.style.display = "none";
        boton.textContent = "Mostrar";
    } else {
        texto.style.display = "block";
        boton.textContent = "Ocultar";
    }
}

function suma1() {
    let suma = document.getElementById("numero");
    let count = parseInt(suma.textContent);
    count++;
    suma.textContent= count;
        }

function resta1() {
    let resta = document.getElementById("numero");
    let count = parseInt(resta.textContent);
    count--;
    resta.textContent= count;
        }