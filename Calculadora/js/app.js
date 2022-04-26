function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números'
    }
    document.getElementById('resultado').innerHTML = `Resultado de la Suma: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}

function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números'
    }
    document.getElementById('resultado').innerHTML = `Resultado de la Resta: ${resultado}`;
    console.log(`Resultado: ${resultado}`)

}

function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números'
    }
    document.getElementById('resultado').innerHTML = `Resultado de la Multiplicación:  ${resultado}`;
    console.log(`Resultado: ${resultado}`)

} 
function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números'
    }
    document.getElementById('resultado').innerHTML = `Resultado de la Divisíon:  ${resultado}`;
    console.log(`Resultado: ${resultado}`)

} 