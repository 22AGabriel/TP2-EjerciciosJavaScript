let dni = parseInt(prompt("ingrese un dni entre 0 y 99999999"));

if(dni >= 0 && dni <= 99999999){
    let resultado = dni % 23;
    console.log(resultado)
    switch (resultado) {
        case 0:
            document.write("T");
            alert("T");
            break;
        default:
            alert("valor erroneo");
            break;
    }
}else {
    alert("ingrese un valor erroneo")
}