/*let palabra = prompt("Ingrese una opcion: casa, perro, pelota, arbol o genio")
let palabraTraducida

switch (palabra) {
    case 'casa':
        palabraTraducida = 'House'
        break;

    case 'perro':
        palabraTraducida = 'Dog'
        break;

    case 'pelota':
        palabraTraducida = 'Ball'
        break;

    case 'arbol':
        palabraTraducida = 'Tree'
        break;

    case 'genio':
        palabraTraducida = 'Genius'
        break;

    default:
        palabraTraducida = 'Palabra Incorrecta'
        break;
}

alert("Palabra traducida: " + palabraTraducida)

let valoracion = prompt('¿Cómo valoras la pelicula? (Muy mala, Mala, Mediocre, Buena, Muy buena)').toLowerCase()

switch (valoracion) {
    case "muy mala":
        alert('Calificaste la pelicula como Muy Mala. Lo lamentamos mucho')
        break;

    case 'mala':
        alert('Calificaste la pelicula como Mala. Lo lamentamos')
        break;

    case 'mediocre':
        alert('Calificaste la pelicula como Mediocre. Gracias por tu opinion')
        break;

    case 'buena':
        alert('Calificaste la pelicula como Buena. Nos alegra que te haya ')
        break;

    case 'muy buena':
        alert('Calificaste la pelicula como Muy Buena. ¡Gracias por tu valoracion positiva!')
        break;

    default:
        alert('Ingresaste un valor invalido')
        break;
}

alert('Gracias por tu visita. ¡Esperamos que hayas disfrutado la funcion!')

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1
    } else {
        let resultado = 1
        for (let i = numero; i >= 1; i--) {
            resultado *= i
        }
        return resultado
    }
}

console.log(factorial(4))
console.log(factorial(3))
console.log(factorial(5))


const longitudNombre = (nombre = '') => nombre.length

console.log(longitudNombre())
console.log(longitudNombre('Ana'))


*/
function solution(year) {
    let siglo = Math.ceil(year / 100)
    return siglo
}

console.log(solution(2005))
console.log(solution(1990))
console.log(solution(1880))
console.log(solution(1760))


function solution2(inputString) {
    const length = inputString.length;
    for (let i = 0; i < length / 2; i++) {
        if (inputString[i] !== inputString[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(solution2("aabaa")); // true
console.log(solution2("abac")); // false
console.log(solution2("a")); // true


a = [50, 60, 60, 45, 70]

function solution3(a) {
    let equipo1 = 0
    let equipo2 = 0

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            equipo1 += a[i]
        } else{
            equipo2 += a[i]
        }
    }

    return [equipo1, equipo2]
}

console.log(solution3([50, 60, 60, 45, 70]))

