var frase = prompt("Escriba una frase:");
var i = 0
console.log(frase)

while (i < frase.length - 1) {
        document.write(frase.charAt(i) + "-");
        i++
}
document.write(frase.charAt(i));