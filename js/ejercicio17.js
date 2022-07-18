let texto = prompt("ingrese un texto");
texto = texto.toLowerCase();
console.log(texto)
let i = 0

while (i < texto.length) {
    if (texto.charAt(i) === "a" || texto.charAt(i) === "á" || texto.charAt(i) === "e" || 
    texto.charAt(i) === "é" || texto.charAt(i) === "i" || texto.charAt(i) === "í" || 
    texto.charAt(i) === "o" || texto.charAt(i) === "ó" || texto.charAt(i) === "u" || 
    texto.charAt(i) === "ú") {
        document.write("La primer vocal del texto se encuentra en la posición: " + (i + 1));
        i = texto.length
    } else {
        i++
    }
}

