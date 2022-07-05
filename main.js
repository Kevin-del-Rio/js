// Calculadora muy basica
let opcion  = "E";
let numero1 = 0;
let numero2 = 0;
let resultado = 0;

function menu(){
    opcion = prompt('Ingrese la opción deseada:\n\n+    Sumar:          S\n -    Restar:          R\n *    Múltiplicar:  M\n ^   Potencia:      P\n /    Dividir:         D\n\n ->  SALIR:          E\n');
}
function potencia(num1, num2){
    resultado = 1;
    if (num1 === 1 && num2 != 0) {
        alert("El resultado = " + 1);
    }
    else if (num1 != 0 && num2 === 0) {
        alert("El resultado = " + 1);
    }
    else if (num1 === 0) {
        alert("El resultado = " + 0);
    }
    else if (num2 === 1) {
        alert("El resultado = " + num1);
    } else {
        for (let i = 0; i < num2; i++) {
            resultado = resultado * num1;
        }
        alert("El resultado  = " + resultado);
    }
}

menu(); 
while (opcion.toUpperCase() != "E"){
    switch (opcion.toUpperCase()) {
        case "S":
            alert("Vamos a Sumar dos números");
            numero1 = parseInt(prompt("Ingrese el Primer número: "));
            numero2 = parseInt(prompt("Ingrese el segundo número a Sumar: "));
            numero1 += numero2;
            alert("El Resultado = " + numero1);
            break;
        case "R":
            alert("Vamos a Restar dos números");
            numero1 = parseInt(prompt("Ingrese el Primer número: "));
            numero2 = parseInt(prompt("Ingrese el segundo número para Restar: "));
            resultado = numero1 - numero2;
            alert("La resta = " + resultado );
            break;
        case "M":
            alert("Vamos a Múltiplicar dos números");
            numero1 = parseInt(prompt("Ingrese el Primer número: "));
            numero2 = parseInt(prompt("Ingrese el segundo número a Múltiplicar: "));
            alert("La Múltiplicacion = " + numero1 * numero2);
            break;
        case "P":
            alert("Potencia de un Número:");
            numero1 = parseInt(prompt("Ingrese el Primer número, Base: "));
            numero2 = parseInt(prompt("Ingrese el segundo número, Exponente: "));
            potencia(numero1,numero2);
            break;
        case "D":
            alert("Vamos a Dividir dos números");
            numero1 = parseInt(prompt("Ingrese el Primer número: "));
            numero2 = parseInt(prompt("Ingrese el segundo número a Dividir: "));
            if (numero2 === 0) {
                alert("No se puede Divdir entre 0 ");
            }
            else {
                alert("La División = " + numero1 / numero2);
            }
            break;
        default:
            opcion = prompt("La opción ingresada no es correcta:\n\n Si desea salir Ingrese la letra E \n\n De lo contrario prersione cualquier tecla.\n\n ")

    }
    menu();
}
alert("Gracias por usar nuestra calculadora. :)");
