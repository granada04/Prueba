//variables 
let x = 4;
let y = 3;
//Backtick string
console.log(`x + y = ${x + y}`);
console.log(`x - y = ${x - y}`);
console.log(`x * y = ${x * y}`);
console.log(`x / y = ${x / y}`);
console.log(`x % y = ${x % y}`);

//Condiciones y bucles
let w;
do {
    w = parseFloat(prompt("Ingrese un número"));
} while(Number.isNaN(w));

//parseFloat convierte caracteres en un numero decimal
//NaN: not a number
if (w > 0){
    console.log(`${w} es positivo`)
} else{
    if (w < 0) console.log(`${w} es negativo`);
    else console.log(`${w} es cero`);
}



let nombre = "Felipe"
console.log(`hola ${nombre}`);
console.log(`La longitud de mi nombre es ${nombre.length}`);
let edad;
do {
    edad = parseFloat(prompt("Ingrese su edad"));
} while(Number.isNaN(edad));
console.log(edad);