/*let num = 19
while (num < 19 && num > -10) {
    console.log(num)
    num--
}



let num = 10

while (num >= 10 && num <= 40) {
    if (num%2 == 0) {
        console.log(num)
    }
    num++
}


let num = 300

while (num >= 300 && num <= 333) {
    if (num%2 != 0) {
        console.log(num)
    }
    num++
}

let num = 5

while (num >= 5 && num <= 50) {
    if (num%5 == 0 && num%3 == 0) {
        console.log(num)
    }
    num++
}

let numMesa = 1
let numClientes = 0

while (numMesa <= 20) {
    alert('Bienvenido a nustro cafe, su mesa es la numero ' + numMesa)
    numMesa++
    numClientes++
    console.log(numClientes)
}

let num


while(num != 0 || num < 0){
    num = prompt("Ingrese un numero: ")

    if (num%2==0) {
        alert('El numero que ingresó es par')
    }else{
        alert('El numero que ingreso es impar')
    }
}
*/
//DESAFIO FIZZBUZZ

let num = 1

while(num >= 1 && num <= 100){
    if(num % 5 == 0 && num % 3 == 0){
        console.log('FizzBuzz')
        num++
    }else if (num % 5 == 0) {
        console.log('Buzz')
        num++
    }else if (num%3==0) {
        console.log('Fizz')
        num++
    }else {
        console.log(num)
        num++
    }
}

/*
Contador de positivos

let numPos = 0
let num = 0


while(num >= 0){
    num = prompt('Ingrese un numero, el juego acabara cuando ingrese un numero negativo')
    numPos++
    if(num < 0){
        alert('La cantidad de numeros positivos que ingresaste fue de ' + numPos)
    }
}

Burro-Matico


let respuesta = prompt("¿Ya merito llegamos?");

while (respuesta.toLowerCase() !== "si") {
    respuesta = prompt("¿Ya merito llegamos?");
}

alert("¡Bienvenido a Muy Muy Lejano!");


¿Cual es el mayor?

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

while (numero1 !== 0 && numero2 !== 0) {
  if (numero1 === numero2) {
    alert("Por favor, ingresa números distintos.");
  } else if (numero1 > numero2) {
    alert("El primer número es mayor: " + numero1);
  } else {
    alert("El segundo número es mayor: " + numero2);
  }

  numero1 = parseInt(prompt("Ingresa el primer número:"));
  numero2 = parseInt(prompt("Ingresa el segundo número:"));
}

alert("Programa finalizado.");

Piedra, papel o tijera

var opciones = ["Piedra", "Papel", "Tijera"];

do {
  var usuario = prompt("Elige una opción: Piedra, Papel o Tijera").toLowerCase();

  while (!opciones.includes(usuario)) {
    usuario = prompt("Opción inválida. Por favor, elige Piedra, Papel o Tijera").toLowerCase();
  }

  var indiceAleatorio = Math.floor(Math.random() * opciones.length);
  var computadora = opciones[indiceAleatorio];

  var resultado = "";

  if (usuario === computadora) {
    resultado = "¡Es un empate!";
  } else if (
    (usuario === "Piedra" && computadora === "Tijera") ||
    (usuario === "Papel" && computadora === "Piedra") ||
    (usuario === "Tijera" && computadora === "Papel")
  ) {
    resultado = "¡Ganaste!";
  } else {
    resultado = "¡Perdiste!";
  }

  alert("Elegiste: " + usuario + "\nLa computadora eligió: " + computadora + "\n" + resultado);

  var volverAJugar = confirm("¿Te gustaría volver a jugar?");
} while (volverAJugar);

alert("¡Gracias por jugar!");
*/

