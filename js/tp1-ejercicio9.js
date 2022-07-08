let frase = prompt("ingrese una frase:");
var i = 0
frase = frase.toLowerCase();
console.log(frase)

while (i < frase.length) {
    if (frase.charAt(i) === "a" || frase.charAt(i) === "á" || frase.charAt(i) === "e" || 
    frase.charAt(i) === "é" || frase.charAt(i) === "i" || frase.charAt(i) === "í" || 
    frase.charAt(i) === "o" || frase.charAt(i) === "ó" || frase.charAt(i) === "u" || 
    frase.charAt(i) === "ú") {
        document.write(frase.charAt(i))
        i++
    } else {
        i++
    }
}