/*function triplicador(num1) {
    return num1*3
}

console.log(triplicador(12))

function multiplicador(num1, num2) {
    return num1*num2
}

console.log(multiplicador(12, 18))

function division(num1, num2){
    return num1/num2
}

console.log(division(150, 5))

function resto(num1, num2){
    return num1%num2
}

console.log(resto(8,2))

let trip = triplicador(5)
let mult = multiplicador(trip, 12)
let divi = division(mult, 12)
let rest = resto(divi, 3)

console.log('calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3. El resultado es el siguiente: ' + rest)

function contarDeA_n(contar_de_a, contar_hasta){

    let num = contar_de_a
    
    while (num >= contar_de_a && num <= contar_hasta) {
        result += 
        
    }
}

console.log(contarDeA_n(8,12))

DESAFIO FIZZBUZZ v.2
*/

let num = 1
let numUsuario = parseInt(prompt('Indique hasta que numero contar'))
let fizz_num = parseInt(prompt('Indique los numeros que sean multiplos de qué numero deben ser reemplazados por fizz'))
let buzz_num = parseInt(prompt('Indique los numeros que sean multiplos de qué numero deben ser reemplazados por buzz'))

var result = '';

 for (let i = 1; i <= numUsuario; i++){
    if(num % fizz_num === 0 && num % buzz_num === 0){
        result += 'FizzBuzz'
    }else if (num % buzz_num === 0) {
        result += 'buzz'
        
    }else if (num%fizz_num === 0) {
        result += fizz
        
    }else {
        result += i
    }

    if (i < numUsuario) {
        result += ','
    }
}  




console.log(result)

//DESAFIO FIZZBUZZ


/* 
Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de palabras
 ocurra en los números múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).

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
} */