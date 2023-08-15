function paresEimpares(num1, num2, palabra) {
    for (let i = 1; i <= num1; i++) {
        if (i % 2 == 0) console.log(i)
    }

    for (let i = 1; i < num1; i++) {
        if (i % 2 !== 0) {
            if (i % num2 === 0) {
                console.log(palabra)
            } else {
                console.log(i)
            }
        }

    }
}

function min(arr, modo) {
    if (modo === 'value') {
        const numeroMinimo = Math.min(...arr)
        console.log(numeroMinimo)
    } else if (modo === 'index') {
        const indiceMinimo = arr.indexOf(Math.min(...arr))
        console.log(indiceMinimo)
    } else {
        console.log('Modo no válido')
    }
}

function doubleFilter(paises, continente, numPoblacion) {
    const paisesFiltrados = {
        nombres: [],
        'poblacion total': 0,
        'mayor': 0,
        'menor': 0
    }

    let poblacionMayor = 0
    let poblacionMenor = Number.MAX_SAFE_INTEGER

    for (const pais of paises) {
        if (pais.continente === continente && pais.poblacion >= numPoblacion) {
            paisesFiltrados.nombres.push(pais.nombre)
            paisesFiltrados['poblacion total'] += pais.poblacion

            if (pais.poblacion > poblacionMayor) {
                poblacionMayor = pais.poblacion
                paisesFiltrados.mayor = pais.nombre
            }

            if (pais.poblacion < poblacionMenor) {
                poblacionMenor = pais.poblacion
                paisesFiltrados.menor = pais.nombre
            }
        }
    }

    return paisesFiltrados
}

let paises = [
    {
        nombre: "argentina",
        continente: "sudamerica",
        poblacion: 40000000
    },
    {
        nombre: "brasil",
        continente: "sudamerica",
        poblacion: 300000000
    },
    {
        nombre: "venezuela",
        continente: "sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "chile",
        continente: "sudamerica",
        poblacion: 10000000
    },
    {
        nombre: "australia",
        continente: "oceania",
        poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
        continente: "oceania",
        poblacion: 8000000
    },
    {
        nombre: "china",
        continente: "asia",
        poblacion: 1000000000
    },
    {
        nombre: "tailandia",
        continente: "asia",
        poblacion: 32000000
    },
    {
        nombre: "vietnam",
        continente: "asia",
        poblacion: 23000000
    },
    {
        nombre: "españa",
        continente: "europa",
        poblacion: 29000000
    },
    {
        nombre: "alemania",
        continente: "europa",
        poblacion: 33000000
    },
    {
        nombre: "francia",
        continente: "europa",
        poblacion: 65000000
    },
    {
        nombre: "portugal",
        continente: "europa",
        poblacion: 4000000
    },
    {
        nombre: "grecia",
        continente: "europa",
        poblacion: 12000000
    },
]


paresEimpares(10, 3, 'Divisible')
console.log('/************************************/')
min([5, 8, 2, 3, 4, 9, 1, 18], 'value')
min([5, 8, 2, 3, 4, 9, 1, 18], 'index')
console.log(doubleFilter(paises, 'sudamerica', 30000000))
