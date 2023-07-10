function triplicador(num1) {
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
        console.log(num)
        num++
    }
}

console.log(contarDeA_n(8,12))