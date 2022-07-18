let resultado = 0
let indice = 1

do{
    let numero = parseInt(prompt("ingrese un número"));
    if(numero >= 0){
        resultado = resultado + numero
        document.write(indice + "° número ingresado: " + numero);
        document.write("<br>");
        indice++
    } else {
        alert("el carácter ingresado no es un número");
    }
} while (confirm("¿Desea ingresar otro número?"))
document.write("Resultado de la suma: " + resultado);