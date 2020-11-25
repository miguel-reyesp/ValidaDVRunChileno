//validar rut
//metodo utilizado resto del modulo de 11
//se utiliza un rut X y se extraen los numeros antes del guion.
//se multiplican los digitos del rut de derecha a izquierda por la serie del 2 al 7
//si existe un octavo digito, se reinicia la cuenta.
//se suman los resultados individuales de las multiplicaciones (total)
//aplicamos modulo de 11
//al resto lo truncamos a entero
//multiplicamos el modulo del resto por 11 y restamos el resultado a al total
//finalmente a 11 le restamos el resultado anterior
//si el resultado es 11 el DV será 0 y si es 10 el DV será K

let run = prompt('Ingrese rut completo');
let a_numeros_run = [];
let suma_run = 0;
let dv_comparar = 0;
let dv_resultado = 0;

let multiplicador = 2;

run = run.trim();

for (const digito of run) {
    if (digito%1 == 0) {
        a_numeros_run.push(digito);
    }
}

console.log(a_numeros_run);

dv_comparar = a_numeros_run.pop();

console.log(a_numeros_run);
console.log(dv_comparar);

//8 multiplicaciones, con 1 reinicio hasta el 3 desde el 2 al 7

for (let digito = a_numeros_run.length - 1; digito >= 0 ; digito--){
    
    let resultado = a_numeros_run[digito] * multiplicador;

    console.log(`${a_numeros_run[digito]} X ${multiplicador} = ${resultado}`);

    suma_run += resultado;

    multiplicador++;

    if (multiplicador === 8) {
        multiplicador = 2;
    }
}

dv_resultado = 11 - Math.trunc(suma_run % 11);
//dv_resultado = 11 - (suma_run - (11 * Math.trunc(suma_run / 11)));

switch (dv_resultado) {
    case 11:

        dv_resultado = 0;
        break;

    case 10:

        dv_resultado = 'K';

    default:
        break;

}

//console.log(`El DV es: ${dv_comparar} y deberia ser: ${dv_resultado}`);

if (dv_resultado == dv_comparar) {
    console.log(`El run: ${run} es valido`);
}else{
    console.log(`El run: ${run} es invalido`);
}
