let texto = " "

do{
    let nuevoTexto = prompt("Ingrese el texto");
    texto = texto + "-" + nuevoTexto
} while (confirm("¿Desea ingresar más texto?"))
document.write(texto);