let nombre1 = prompt("ingrese el primer nombre:");
let edad1 = parseInt(prompt("ingrese la edad de " + nombre1 + ":"));
let nombre2 = prompt("ingrese el segundo nombre:");
let edad2 = parseInt(prompt("ingrese la edad de " + nombre2 + ":"));
let nombre3 = prompt("ingrese el tercer nombre:");
let edad3 = parseInt(prompt("ingrese la edad de " + nombre3 + ":"));

if (edad1 > edad2 && edad1 > edad3){
    document.write("El/la mayor es: " + nombre1);
} else if (edad2 > edad1 && edad2 > edad3){
    document.write("El/la mayor es: " + nombre2);
} else if (edad3 > edad1 && edad3 > edad2){
    document.write("El/la mayor es: " + nombre3);
}

