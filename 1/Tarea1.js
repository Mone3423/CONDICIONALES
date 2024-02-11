function verificarBelleza() {
    const respuesta = document.getElementById("respuestaSelect").value.toLowerCase();
    if (respuesta === "si") {
        alert("Ciertamente");
    } else {
        alert("No te creo");
    }
}

function verificarDivisibilidad() {
    const numero = parseInt(document.getElementById("respuestaInput").value);
    if (numero % 2 === 0) {
        alert(`${numero} es divisible entre 2`);
    } else {
        alert(`${numero} no es divisible entre 2`);
    }    
}
