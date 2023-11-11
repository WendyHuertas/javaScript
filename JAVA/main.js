// Funcion
function saludo(){

    alert("Bienvenido Usuario");

}

// Funcion parta la suma
function suma() {

    // Declaramos las varaables nesesarias 

    let a = 0;
    let b = 0;
    let Suma = 0;

    // Solicitar los valores

    alert ("Este algoritmos realiza la suma de dos valores ingresados por usted")

    a = parseInt(prompt("Ingrese el primer valor para la suma"));
    b = parseInt(prompt("Ingrese el segundo valor para la suma"));


    // Realizamos las operaciones
    Suma = a + b; 

    // Mostramos el resultado
    alert("El resultado de la suma es: " + Suma + ",en total");

}

// Funcion para las operaciones basicas
function OperacionesBasicas() {

    // Declaramos las variables nesesarias 
    let a = 0;
    let b = 0;

    let Suma = 0;
    let Resta = 0;
    let Multiplicacion = 0;
    let Division = 0;

    // Solicitar los valores

    alert ("Este algoritmos realiza todas las operaciones basicas")

    a = parseInt(prompt("Ingrese el primer valor"));
    b = parseInt(prompt("Ingrese el segundo valor"));

    // Realizamos las operaciones
    Suma = a + b; 
    Resta = a - b;
    Multiplicacion = a * b;
    Division = a / b;

    // Mostramos el resultado
    alert("El resultado de la suma es: " + Suma + ",en total");
    alert("El resultado de la resta es: " + Resta + ",en total");
    alert("El resultado de la multiplicación es: " + Multiplicacion + ",en total");
    alert("El resultado de la División es: " + Division + ",en total");

}

// Funcion para conocer el cuadrado de un numero 

function CuadradoNum() {
    // Declaramos la variable
    let a = 0;
    
    // Explicacion del algoritmo
    alert("Este algoritmo da a conocer el cuadrado de un número.");

    // Solicitamos los datos
    a = parseInt(prompt("Ingresa el número:"));

    valor = a * a;

    alert("El cuadrado del número es: " + valor);
    
}

// Funcion para conocer el area de un triangulo
function AreaTriangulo(){

    let base = 0;
    let altura = 0;

    alert("Este algoritmo da el área de un triángulo.")

    base = parseInt(prompt("Ingrese el valor de la base:"));
    altura = parseInt(prompt("Ingrese el valor de la altura"));

    sobre = base * altura / 2;

    alert("El area del triángulo es: " + sobre);
}

// Funcion para saber que numero es mayor 
function NumeroMayor(){

    // Declarar la variable 
    let a,b = 0;
    
    // Alerta para explicar el ejercicio
    alert("Este algoritmo compara los números y verifica cual es el mayor.");

    // Solicitamos los datos
    a = parseInt(prompt("Ingrese el primer valor"));
    b = parseInt(prompt("Ingrese el segundo valor"));

    if ( a == b) {
        alert("Los valores ingresados son iguales, ingresa otros.");
    } else if (a > b){  
        alert(a + " es mayor que: " + b);
    } else{
        alert(b + " es mayor que " + a);
    }

}

// Funcion para conversion de medidas 

function ConversionMedida(){
    let A = 0;

    alert("Este algoritmo es una conversión de metros en pulgadas, pie y kilometros");

    A = parseInt(prompt("Ingrese la cantida de de metros"));

    Pulgada = A * 39.37;
    Pie = A * 3.281;
    Kilometros = A / 1000;

    alert("El Valor de Pulgada es : " + Pulgada);
    alert("El Valor de Pie es : " + Pie);
    alert("El Valor de Kilometros es : " + Kilometros);

}

// Funcion para conversion de temperatura

function ConversionRankeiToCelsius() {
    let gradosRankei = 0;
    let gradosCelsius = 0;

    alert("Este algoritmo convierte de grados Rankei a grados Celsius");

    gradosRankei = parseFloat(prompt("Ingrese los grados Rankei:"));

    
    gradosCelsius = (gradosRankei - 491.67) * 5/9;

    alert("La conversión de Rankei: " + gradosRankei.toFixed(2) + " a grados Celsius es: " + gradosCelsius.toFixed(2));
}


// Funcion para el promediom del estudiante

function PromedioEstudiante(){
    let nombreEstudiante
    let sumaNotas = 0;
    let promedio = 0;
    nombreEstudiante = prompt("Ingrese su nombre:");
    

    for (let i = 1; i <= 10; i++) {
        const nota = parseFloat(prompt("Ingrese la nota:" + i));
        sumaNotas += nota;
    }

    promedio = sumaNotas / 10;

    let estado;

    if (promedio >= 6 & promedio <= 10) {
        estado = "Aprobo";
    } else {
        estado = "Perdio";
    }

    alert("El estudiante: " + nombreEstudiante + " obtuvo un promedio de:  " + promedio  + ". Por tanto usted: " + estado);
}

// Funcion para el descuento de la compra

function DescuentoCompra() {
    const precioPorKilo = 4500;
    let descuento = 0;
    let costoTotal = 0;
  
    let kilosComprados = parseInt(prompt("Ingrese los kilos que compró:"));
  
    if (kilosComprados >= 0 & kilosComprados <= 2) {
      descuento = 0;
    } else if (kilosComprados >= 3 & kilosComprados <= 5) {
      descuento = 0.1;
    } else if (kilosComprados >= 6 & kilosComprados <= 10) {
      descuento = 0.15;
    } else {
      descuento = 0.2;
    }
  
    costoTotal = kilosComprados * precioPorKilo * (1 - descuento);
  
    alert("El costo total para su compra fue de: " + costoTotal + " pesos.");
  }


// Funcion para par o impar
function ParImpar(){
    //Llamamos variables
    let a = 0;

    alert("Este algoritmo dice cual numero es par o impar.");

    a = parseInt(prompt("Ingrese el numero"));

    if (a % 2 == 0) {
        alert ("Es par");
        } 
        else{
            alert ("Es impar");
    }
}

// Funcion para el salario por hora

function SalarioHora(){
    // Lamamos variables
    let horas = 0;
    let horasTrabajadas = 0;
    let tarifaHoraRegular = 10000;  
    let tarifaHoraExtra = 20000;    

    let salario = 0;
    // Solicitamos datos
    horasTrabajadas = parseInt(prompt("Por favor, ingresa el número de horas trabajadas:"));
    salario = parseInt(prompt("Ingrese su salario habitual:"));
    horas = parseInt(horasTrabajadas);

    if (horas <= 40) {
        salario = horas * tarifaHoraRegular;
    } else {
        horasRegulares = 40;
        horasExtras = horas - horasRegulares;
        salario = (horasRegulares * tarifaHoraRegular) + (horasExtras * tarifaHoraExtra);
    }

    // Mostramoe el mensaje final
    alert("El salario semanal del obrero es: " + salario); 
    
}


// Funcion para menor de tres numeros

function Menor3Numero(){

    let a,b,c = 0;

    alert("Este algoritmo solicita 3 numeros y dice cual es el menor");

    a = parseInt(prompt("Ingrese el primer número:"));
    b = parseInt(prompt("Ingrese el segundo número:"));
    c = parseInt(prompt("Ingrese el tercer número:"));

    if (a <= b & a <= c) {
        alert(a + " es el menor.");
        } else if (b <= a & b <= c ) {
            alert(b  + " es el menor.");
            } else {
                alert(c + " es el menor.");
        }

}