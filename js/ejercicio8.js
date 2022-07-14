let valor = parseInt(prompt("introduzca un número menor a 50"));

if (valor <=50) {
    for(let indice = 1 ; indice <= valor ; indice++){
        for(let numero = 1 ; numero <= indice ; numero++){
            document.write(numero);
        }
        document.write("<br>");
    }
} else {
    document.write("El número ingresado es mayor a 50");
}