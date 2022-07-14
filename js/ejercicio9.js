for (let indice = 1 ; indice <= 500 ; indice++) {
    document.write(indice);
    if (indice % 4 === 0) {
        document.write(" Es multiplo de 4");
    }
    if (indice % 9 === 0) {
        document.write(" Es multiplo de 9");
    }
    document.write("<br>");
    if (indice % 5 === 0) {
        document.write("<hr>");
    }
}