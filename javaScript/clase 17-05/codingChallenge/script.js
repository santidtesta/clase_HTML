function rendimientoAlumno(nota) {
    if (nota >= 0 && nota <= 2) {
        return "Muy mal"
    } else if (nota > 2 && nota <= 5) {
        return "Mal"
    } else if (nota > 5 && nota <= 6) {
        return "Tan cerca pero tan lejos"
    } else if (nota > 6 && nota <= 8) {
        return "¡Bien"
    } else if (nota > 8 && nota <= 10) {
        return "¡Muy Bien!"
    } else {
        return "Nota Invalida"
    }
}

console.log(rendimientoAlumno(4))
console.log(rendimientoAlumno(6.5))
console.log(rendimientoAlumno(9))
console.log(rendimientoAlumno(11))

function biggest_one(num1, num2, palabra) {
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return palabra[0] + palabra[palabra.length - 1]
    }
}

console.log(biggest_one(8, 5, "hola"))
console.log(biggest_one(3, 3, "adiós"))
console.log(biggest_one(2, 6, "programación"))

function filtrarFrutas(arreglo) {
    const frutasFiltradas = arreglo.filter(item => item.fruta !== undefined)
    const frutas = frutasFiltradas.map(item => item.fruta)
    return { frutas }
}

let frutasYVerduras = [
    { fruta: "banana" },
    { verdura: "apio" },
    { fruta: "manzana" },
    { fruta: "frutilla" },
    { verdura: "zanahoria" },
    { fruta: "kiwi" },
    { fruta: "sandia" },
    { fruta: "melon" },
    { verdura: "repollo" },
    { fruta: "mango" }
]

const resultado  = filtrarFrutas(frutasYVerduras)
console.log(resultado)

function dispenserGaseosas(unidades, gaseosas){
    let gaseosasEnStock = {}

    for (let i = 0; i < gaseosas.length; i++) {
        gaseosasEnStock[gaseosas[i]] = unidades[i]
        
    }

    return function (gaseosa){
        if(gaseosasEnStock.hasOwnProperty(gaseosa)){
            return `Sí, tenemos ${gaseosasEnStock[gaseosa]} unidades de ${gaseosa} en stock.`
        }else{
            return `Lo siento, no tenemos ${gaseosa} en stock.`
        }
    }
}

let unidades = [1, 2, 3, 4]
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"]

const consultarStock = dispenserGaseosas(unidades, gaseosas)

console.log(consultarStock("cocacola"))
console.log(consultarStock("pepsi"))

function agregarAnioNacimiento(personas){
    const añoActual = new Date().getFullYear()

    for (let persona of personas) {
        persona.añoNacimiento = añoActual - persona.edad
    }

    return personas
}

const arregloPersonas = [
    {nombre: "Juan", edad:19},
    {nombre:"Mario", edad: 22}
]

const arregloConAnioNacimiento = agregarAnioNacimiento(arregloPersonas)

console.log(arregloConAnioNacimiento)