do{
    var nombre = prompt("ìngrese su nombre:");
 }while(nombre.length < 3)
let edad;
do {
    edad = parseFloat(prompt("Ingrese su edad"));
} while(Number.isNaN(edad));
console.log(edad);
if (edad <= 12){
    console.log(`Hola ${nombre}`);
} else{
    if (edad < 50) console.log(`Buenos días ${nombre}`);
    else {
        if (edad > 50) console.log(`Buenos días respetado ${nombre}`)
    }
}
