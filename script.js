function saludar() {
  let nombreSaludo = document.getElementById("saludo");
  let divSaludo = document.getElementById("divSaludo");
  divSaludo.innerHTML = "";
  let Saludo = document.createElement("div");
  Saludo.textContent = "Hola, " + nombreSaludo.value;
  divSaludo.appendChild(Saludo);
}

function sumar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let divResultado = document.getElementById("divSuma");
  divResultado.innerHTML = "";
  let resultadoSuma = document.createElement("div");
  resultadoSuma.textContent = +num1 + +num2;
  divResultado.appendChild(resultadoSuma);
}
function convertir() {
  let celsius = document.getElementById("temp").value;
  let fahrenheit = (+celsius * 9) / 5 + 32;
  let divFahren = document.getElementById("FHT");
  divFahren.innerHTML = "";
  let resultadoTemp = document.createElement("div");
  resultadoTemp.textContent = fahrenheit + " °F";
  divFahren.appendChild(resultadoTemp);
}

function contador() {
  let divContador = document.getElementById("divContador");
  let count = parseInt(divContador.textContent);
  count++;
  divContador.textContent = count;
}

function lista() {
  let listadiv = document.getElementById("listadin");
  let listaCompras = document.getElementById("lista").value;
  if (listaCompras.trim() === "") return;
  let item = document.createElement("li");
  item.textContent = listaCompras;
  listadiv.appendChild(item);
  document.getElementById("lista").value = "";
}

let numerosArray = [];
let personas = [];

function arrayNumeros(input) {
  if (input.dataset.added === "true") return;
  if (input.value === undefined || input.value.toString().trim() === "") return;
  let valor = +input.value;
  if (isNaN(valor)) return;

  input.dataset.added = "true";
  numerosArray.push(valor);

  let cont = document.getElementById("arrayContainer");
  let nuevo = document.createElement("input");
  nuevo.type = "number";
  nuevo.id = "arrayNum" + cont.querySelectorAll("input").length;
  nuevo.onblur = function () {
    arrayNumeros(this);
  };
  cont.appendChild(nuevo);
  nuevo.focus();
}

function sumarray() {
  let cont = document.getElementById("arrayContainer");
  let inputs = cont.querySelectorAll("input");
  let suma = 0;

  inputs.forEach(function (inp) {
    let val = inp.value;
    if (val === undefined || val.toString().trim() === "") return;
    let num = +val;
    if (!isNaN(num)) suma += num;
  });

  let divRes = document.getElementById("divArraySuma");
  divRes.innerHTML = "";
  let resultado = document.createElement("div");
  resultado.textContent = "Suma: " + suma;
  divRes.appendChild(resultado);
}

function registrar() {
  let nombre = document.getElementById("nombreReg").value;
  let edadVal = document.getElementById("edadReg").value;
  if (!nombre || nombre.toString().trim() === "") return;
  let edad = +edadVal;
  if (isNaN(edad)) return;

  personas.push({ nombre: nombre.toString().trim(), edad: edad });
  document.getElementById("nombreReg").value = "";
  document.getElementById("edadReg").value = "";

  let cont = document.getElementById("listaRegistro");
  cont.innerHTML = "";
  let tabla = document.createElement("table");
  tabla.style.width = "100%";
  tabla.style.borderCollapse = "collapse";

  let thead = document.createElement("thead");
  let headRow = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.textContent = "Nombre";
  th1.style.textAlign = "left";
  th1.style.padding = "6px 8px";
  let th2 = document.createElement("th");
  th2.textContent = "Edad";
  th2.style.textAlign = "right";
  th2.style.padding = "6px 8px";
  headRow.appendChild(th1);
  headRow.appendChild(th2);
  thead.appendChild(headRow);
  tabla.appendChild(thead);

  let tbody = document.createElement("tbody");

  personas.forEach(function (p) {
    let row = document.createElement("tr");
    let cellNombre = document.createElement("td");
    cellNombre.textContent = p.nombre;
    cellNombre.style.padding = "6px 8px";
    let cellEdad = document.createElement("td");
    cellEdad.textContent = p.edad;
    cellEdad.style.textAlign = "right";
    cellEdad.style.padding = "6px 8px";
    row.appendChild(cellNombre);
    row.appendChild(cellEdad);
    tbody.appendChild(row);
  });

  tabla.appendChild(tbody);
  cont.appendChild(tabla);
}

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
  suma.textContent = count;
}

function resta1() {
  let resta = document.getElementById("numero");
  let count = parseInt(resta.textContent);
  count--;
  resta.textContent = count;
}
