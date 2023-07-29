/*let listaDeSuper = []

listaDeSuper[0] = "leche"
listaDeSuper[1] = "Oreo"
listaDeSuper[2] = "Arroz"
listaDeSuper[3] = "carne"

let primero = listaDeSuper[0]

let ultimoElemento = listaDeSuper[listaDeSuper.length - 1]

console.log(ultimoElemento)

listaDeSuper.push('Yerba', 'Azucar')

listaDeSuper.unshift('Desodorante', 'Shampoo')

console.log(listaDeSuper.length)

let noHabia = listaDeSuper.pop('Azucar')

let comprado = listaDeSuper.shift('carne')

console.log(listaDeSuper.length)

function logItems(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])        
    }
}

let colores=["Rojo", "Azul", "Verde", "Amarillo"]

logItems(listaDeSuper)
logItems(colores)

var logItems = function(item){
    console.log(item)
}

listaDeSuper.forEach(logItems)


function printReverse(arreglo) {
    for (let i = arreglo.length - 1; i >= 0; i--) {
        console.log(arreglo[i])
    }
}

function reverser(arreglo) {
    let arregloInvertido = []
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i])
    }
    return arregloInvertido
}

printReverse(["a", "b", "c"])
// c
// b
// a
printReverse([1, 2, 3, 4])
// 4
// 3
// 2
// 1

console.log(reverser(["a", "b", "c"])) // ["c","b", "a"]
console.log(reverser([1, 2, 3, 4])) // [4, 3, 2, 1]


let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"

let arregloDesordenado = poemaDesordenado.split(' ')

let arregloOrdenado = []

while (arregloDesordenado.length > 0) {
    arregloOrdenado.push(arregloDesordenado.shift())
    if (arregloDesordenado.length > 0) {
        arregloOrdenado.push(arregloDesordenado.pop())
    }
}

let poemaOrdenado = arregloOrdenado.join(' ')

console.log(poemaOrdenado)


function isUniform(arreglo){
    if (arreglo.length === 0) {
        return true
    }

    const primerElemento = arreglo[0]
    for (let i = 1; i < arreglo.length; i++){
        if(arreglo[i] !== primerElemento){
            return false
        }
    }

    return true
}

console.log(isUniform([1,1,1,1]))
console.log(isUniform([1,2,1,1]))
console.log(isUniform(["a","b","p"]))
console.log(isUniform(["b","b","b"]))

let numeros = [111, 27, 31, 44, 101, 213, 33, 58]

function biggest_Smallest(arreglo){
    let max = arreglo[0]
    let min = arreglo[0]
    
    arreglo.forEach(function(numero){
        if (numero > max) {
            max = numero
        }
        if(numero < min){
            min = numero
        }
    });

    return [min, max]
}

let resultado = biggest_Smallest(numeros)

console.log(resultado)*/

let mayoresOIgualesA5 = arr => {
    // Codeá la solución
    return arr.filter(numero => numero >= 5)
   }
   

console.log(mayoresOIgualesA5([3, 6, 8, 21])); // [6, 8, 21]

let numeros = [3, 7, 6, 13, 2, 24, 99];

   // Codeá la solución
   let pares = numeros.filter(numero => numero % 2 == 0)

console.log(pares); // [6, 2, 24]

let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']

const palabrasCortas = palabras.filter(palabra => palabra.length <= 3)

console.log(palabrasCortas)
// [ 'Et', 'Sed', 'At' ]


const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
   ];
   
   const soloStrings = mix.filter(dato => typeof dato === 'string')
   
   console.log(soloStrings);
   // Debería mostrar
   // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]


   function fibonacci(numeroPosicion) {
    if (numeroPosicion <= 0) {
      return 0;
    } else if (numeroPosicion === 1) {
      return 1;
    } else {
      let numAnterior = 0;
      let numActual = 1;
      let resultado = 0;
  
      for (let i = 2; i <= numeroPosicion; i++) {
        resultado = numAnterior + numActual;
        numAnterior = numActual;
        numActual = resultado;
      }
  
      return resultado;
    }
  }
  
  // Ejemplos de uso
  console.log("Fibonacci (2):", fibonacci(2)); // Debería mostrar 1
  console.log("Fibonacci (5):", fibonacci(5)); // Debería mostrar 3
  console.log("Fibonacci (8):", fibonacci(8)); // Debería mostrar 13
