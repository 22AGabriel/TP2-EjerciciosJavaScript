let frase = prompt("ingrese una frase:");
frase = frase.toLowerCase();
var i = frase.length
console.log(frase)

while (i >= 0) {
    document.write(frase.charAt(i));
    i--
}