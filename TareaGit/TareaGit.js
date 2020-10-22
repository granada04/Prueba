let input = document.querySelector("#Marca");
let input2 = document.querySelector("#Objeto");
let input3 = document.querySelector("#Descripcion")
let Marca = input.value
let Objeto = input2.value
let Descripcion = input3.value

let inputs = [Marca, Objeto, Descripcion];
let tabla = document.querySelector("#tablaMarcas");
function addHeaders() {
  let fila = document.createElement("tr");
  let enc1 = document.createElement("th");
  enc1.innerHTML = "Marca";
  let enc2 = document.createElement("th");
  enc2.innerHTML = "Objeto";
  let enc3 = document.createElement("th");
  enc3.innerHTML = "Descripcion";

  fila.appendChild(enc1);
  fila.appendChild(enc2);
  fila.appendChild(enc3);
  tabla.appendChild(fila);
  console.log("Here");
}
addHeaders();
function hacerTabla() {
  
    let fila = document.createElement("tr");

    let tdMarca = document.createElement("td");
    tdMarca.innerHTML = input.value; 
    let tdObjeto = document.createElement("td");
    tdObjeto.innerHTML = input2.value; 
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = input3.value; 
    fila.appendChild(tdMarca);
    fila.appendChild(tdObjeto);
    fila.appendChild(tdDescripcion);
    tabla.appendChild(fila);
  
}
let btn = document.querySelector("#btnAdd");
// Event listener
function addItem() {
  // leer el valor que el usuario escribio
  let item = input.value;
  let item2 = input2.value;
  let item3 = input3.value;
  inputs.push(item);
  inputs.push(item2);
  inputs.push(item3);
 hacerTabla();
  //Borrar lo que el usuario escribio
  input.value = "";
  input2.value = "";
  input3.value = "";
}
btn.onclick = addItem;
hacerTabla();