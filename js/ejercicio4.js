let resultado = 0
let indice = 1

while(confirm("¿ingresar número?") === true){
    numero = parseInt(prompt("ingrese número"));
    if(numero >= 0){
        resultado = resultado + numero
        document.write(indice + "° número ingresado: " + numero);
        document.write("<br>");
        indice++
    } else {
        alert("el carácter ingresado no es un número");
    }
}
document.write("Resultado de la suma: " + resultado);