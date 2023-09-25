const {escribirJson} = require ("./escribir.js")
const {suma} = require ("./operaciones/suma")
const {resta} = require ("./operaciones/resta")
const {multiplicacion} = require ("./operaciones/multiplicacion")
const {division} = require ("./operaciones/division")
let a = process.argv[3]
let b = process.argv[4]
let operacion = process.argv[2].toLowerCase();
function calculadora(){
    switch(operacion){
        case "suma":
            result= sumar(a,b);
            console.log (result);
            registro = {"Operacion":operacion, "Resultado":result};
            escribirJson (registro)
            break;
        case "resta":
            result= resta(a,b);
            console.log (result);
            registro = {"Operacion":operacion, "Resultado":result};
            escribirJson (registro)
            break;
        case "multiplicacion":
            result= multiplicar(a,b);
            console.log (result);
            registro = {"Operacion":operacion, "Resultado":result};
            escribirJson (registro)
            break;
        case "division":
            result= division(a,b);
            console.log (result);
            registro = {"Operacion":operacion, "Resultado":result};
            escribirJson (registro)
            break;
        case "historial":
            console.log (leerJson());    
            break;
        default:
            console.log("Operaciones Validas : Sumar - Resta - Division - Multiplicacion - Historial");
    }
    }

calculadora();