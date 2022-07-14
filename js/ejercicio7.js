let indice = parseInt(prompt("introduzca un número menor a 50"));

if(indice <=50){
    for(indice ; indice >= 1 ; indice--){
        for(let numero = 1 ; numero <= indice ; numero++){
            document.write(indice);
        }
        document.write("<br>");
    }
} else {
    document.write("El número ingresado es mayor a 50");
}