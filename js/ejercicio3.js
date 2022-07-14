let texto = " "

while(confirm("¿ingresar texto?") === true){
    if (confirm) {
        nuevoTexto = prompt("ingrese el texto");
    }
    texto = texto + "-" + nuevoTexto
}
document.write(texto);