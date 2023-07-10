/*alert("Bienvenido a mi website");

let nombre;
nombre = prompt("¿Cuál es tu nombre?");

alert("Bienvenido "+nombre);

let edad;
edad = prompt("¿Cuantos años tienes?");

console.log(edad);

alert('Tu nombre es: ' + nombre + ' y tu edad es de: ' + edad + ' años.');*/
/*
let nombre = 'Mara';
let edad = 18;
let cumpleaños = '23/12/04'
let ciudad = 'Quilmes';
let ocupaciones = 'estudiante';
let pasatiempos = 'leer, estudiar, jugar al Genshin Impact';
console.log('Tu nombre es ' + nombre + ', tienes ' + edad + ' años, ' + 'tu cumpleaños es el ' + cumpleaños +
            '. Vives en ' + ciudad + '. Sos ' + ocupaciones + ' y tus pasatiempos son ' + pasatiempos);
*/
/*var texto = document.getElementById("texto").value;

numeroCaracteres = texto.length;

console.log('El numero de caracteres es' + numeroCaracteres);*/

/*let edad2 = prompt("¿Cuantos años tienes?")

let resultadoEdad = edad2 * 365;

console.log('Has vivido ' + resultadoEdad + ' dias');

let num1, num2, resultado*/

/*
num1 = prompt('Ingrese un numero')
num2 = prompt('Ingrese otro numero')

resultado = (Number(num1)+Number(num2));

console.log('La suma de num1 y num2 da como resultado: ' + resultado)
*/

console.log("Abastecimiento de por vida")

let edad = prompt("Indique su edad")
let edadMax = prompt('Indique la edad que cree que va a llegar a tener')
let snackFav = prompt('Indique su snack favorito')
let snackXDia = prompt('Indique cuantos snacks cree que comera por dia')
let precioPUnidad = 820

let diasPorVivir = (Number(edadMax)-Number(edad))*365

let snackPorComer = (Number(snackXDia)*diasPorVivir)

console.log('Usted va a comer ' + snackPorComer + ' paquetes de ' + snackFav + ' hasta llegar a esa edad maxima')
console.log('Por lo que usted va a gastar ' + precioPUnidad*snackPorComer + ' pesos, en lo que le queda hasta la edad maxima')

console.log('Vacaciones')

let diasVacaciones = prompt('Indique la cantidad de dias que se va de Vacaciones')
let presupuestoMax = prompt('Indique cual es su presupuesto maximo')
let comida = prompt('Cuantas comidas va a tener por dia?')


let comidasTotal = Number(comida)*Number(diasVacaciones)
let presupuestoPComida = Number(presupuestoMax)/Number(comidasTotal)

alert('Usted va a poder gastar ' + presupuestoPComida + ' pesos en cada comida para que te alcance la plata durante los ' + diasVacaciones + ' dias de viaje')