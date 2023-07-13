/*
let amigos = ["Maximo", "Matias", "Nahuel", "Harry", "Nahuel"]



function checkAmigos(nombre){

    nombre = prompt('Ingresa el nombre de quien quieras buscar como amigo')

    if (amigos.iOf(nombre) != -1) {
        alert("Tengo un amigo llamado " + nombre)
    }else{alert("Seria bueno tener un amigo que se llame " + nombre)}

}

checkAmigos()

if (amigos.iOf("Felix") == -1) {
    alert("Seria bueno tener un amigo que se llame Felix")
}else{alert("Tengo un amigo llamado Felix")}


let listaDeSuper = []

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

Map: ejercicios 1


let numbers = [3, 7, 13, 99];

let dobles = numbers.map(function(x){
    return x * 2;
})
// CODEA LA SOLUCIÓN 
console.log(numbers); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]

/*
let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
let frasesExclamadas = frases.map(function (frase) {
    return frase.
})
// CODEA LA SOLUCIÓN
console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]


//Reduce Ejercicios 1
*/
let numbers = [6, 1, 34, 94, 3, 17];

console.log(numbers)
/*

const mul = numbers.reduce((acc, num) => acc * num)// CODEA LA SOLUCIÓN

console.log(mul);
// debería mostrar 977976

let numeros = [3, 7, 6, 13, 2, 24, 99];

let impares = numeros.reduce((acc, numero) =>{
    if (numero % 2 != 0) {
        acc.push(numero)
    }
    return acc;
}, [])// CODEA LA SOLUCIÓN

console.log(impares) // [3, 7, 13, 99]

let numbers2 = [5, 4, 1, 9, 2]

let max = numbers2.reduce((maximo, numero)=>{
    for (let maximo = 0; maximo < numbers2.length; maximo++) {
        if (numbers2[maximo] > numero) {
            numero = numbers2[maximo]
        }

    }

    return numero;
} )// CODEA LA SOLUCIÓN

console.log(max)
// debería mostrar 9
*/

let join = arr => {
    // CODEA LA SOLUCIÓN
    const arreglo = arr.join('');
    return arreglo;
}
   
console.log(join([1, 2, 3])) // "123"

let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]
let sinRepetidos = numeros.reduce((resultado, numero) => { 
    if (!resultado.includes(numero)) {
        resultado.push(numero)        
    }
    return resultado
}, [])// CODEA LA SOLUCIÓN
console.log(sinRepetidos)
// debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

let notasDeTPs = [4, 7, 8, 5, 10];

let notaFinal = notasDeTPs.reduce(function (acumulador, nota) {
  return acumulador + nota;
}, 0) / notasDeTPs.length;

console.log(notaFinal);



   