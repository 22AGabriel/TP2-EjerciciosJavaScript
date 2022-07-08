let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
    document.write("Cumple con la edad mínima necesaria para poder conducir");
} else if (edad < 18) {
    document.write("No cumple con la edad mínima necesaria para poder conducir");
}