let filas = parseInt(prompt("ingrese un numero de filas"));
let columnas = parseInt(prompt("ingrese un numero de columnas"));
let resultado = filas * columnas;

document.write(`<table class="tablaDatos"><tbody>`);
for(let indiceFila = 0 ; indiceFila < filas ; indiceFila++){
    document.write("<tr>");
    for(let indiceColumna = 0 ; indiceColumna < columnas ; indiceColumna++){
        document.write(`<td>${resultado}</td>`);
        resultado--
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);