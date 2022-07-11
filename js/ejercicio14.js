var frase = prompt("Escriba una frase:");
var i = 0

while (i < frase.length - 1) {
        document.write(frase.charAt(i) + "-");
        i++
}
document.write(frase.charAt(i));