let objeto_demo = {
    uno: 1,
    dos: 2,
    tres: 3
}

let uno = "tres"

let capitales = {
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
}

let lugar = 'Uruguay'

let usuarioNuevo = {
    usuario: '',
    edad: 0,
    direccion: '',
    fechaDeNacimiento: '',
    contraseña: ''
}

usuarioNuevo.usuario = 'UnNuevoUsuario'
usuarioNuevo.edad = 23
usuarioNuevo.direccion = 'Calle de Mentira'
usuarioNuevo.fechaDeNacimiento = '14/03/1999'
usuarioNuevo.contraseña = 'unacontraseñamuysegura'

console.log(usuarioNuevo)

let miAuto = {}

miAuto.marca = 'Peugeot'
miAuto.año = '2013'
miAuto.nuevo = false

let propertyKey = 'modelo'
miAuto[propertyKey] = '207'

console.log(miAuto)

let anotherPropertyKey = 'precio'
miAuto[anotherPropertyKey] = '2000000'

console.log(miAuto)

let nextProperty = 'color'
miAuto[nextProperty] = 'Gris Graffito'

console.log(miAuto)

// Aumento de nota

let estudiantes = [
    { nombre: 'Juan', nota: 6 },
    { nombre: 'Mario', nota: 8 },
    { nombre: 'Julia', nota: 10 },
    { nombre: 'Sofía', nota: 2 }
]


for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > 5 && estudiantes[i].nota < 10) {
        estudiantes[i].nota += 2
    }
}

console.log(estudiantes)


//Base de datos de peliculas

let películas = [
    { titulo: "El Señor de los Anillos", rating: '5 estrellas', loHasVisto: true },
    { titulo: "Titanic", rating: '4 estrellas', loHasVisto: true },
    { titulo: "Avengers: Endgame", rating: '4 estrellas', loHasVisto: false },
    { titulo: "Toy Story", rating: '4 estrellas', loHasVisto: true },
    { titulo: "Jurassic Park", rating: '3 estrellas', loHasVisto: false }
]

for (let i = 0; i < películas.length; i++) {
    let película = películas[i];
    let estadoVisto = película.loHasVisto ? 'visto' : 'no visto';
    console.log(`Película: ${película.titulo} - Rating: ${película.rating} - Estado: ${estadoVisto}`);
}

// Numeros duplicados

let numeros = [2, 4, 5, 37, 0]

let numerosDuplicados = {}

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    numerosDuplicados[`numero_${i + 1}`] = [numero, numero * 2];
}

console.log(numerosDuplicados);

// Desafio + 27

let personas = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'María', edad: 24 },
    { nombre: 'José', edad: 31 }
]

let personasConMasDe27 = personas.filter(persona => persona.edad > 27)

console.log(personasConMasDe27)

// Camino al oscar

let actoresVocales = []
let actoresPrincipales = [
    "Tom Hanks", "Johnny Depp", "Elizabeth Taylor", "Morgan Freeman",
    "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kushter"
]

const vocales = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < actoresPrincipales.length; i++) {
    let nombreCompleto = actoresPrincipales[i]
    let nombres = nombreCompleto.split(' ')

    for (let nombre of nombres) {
        if (vocales.includes(nombre[0].toLowerCase())) {
            actoresVocales.push(nombreCompleto)
            break
        }
    }
}

console.log(actoresVocales)

let peliculas = []
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr.",
    "Soy Leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
}

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula]
    actoresPrincipales.push(actor)
}

console.log(actoresPrincipales)

for (let pelicula in actoresPrincipalesPorPelicula) {
    peliculas.push(pelicula)
}

console.log(peliculas)

let peliculaPorActor = []

peliculaPorActor['Johnny Depp'] = ['Piratas del Caribe', 'Alicia en el pais de las maravillas']
peliculaPorActor['Tom Hanks'] = ['Forrest Gump', 'Naufrago']
peliculaPorActor['Natalie Portman'] = ['Cisne Negro', 'El club de la pelea']
peliculaPorActor['Ashton Kutcher'] = ['Efecto Mariposa', 'Amigos con beneficios']

console.log(peliculaPorActor)

// Posicion Adecuada

let personas2 = [
    { nombre: "Alba", edad: 15 },
    { nombre: "Estrella", edad: 30 },
    { nombre: "Belen", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katherine", edad: 55 }
];

personas2.sort((a, b) => a.edad - b.edad)

personas2.forEach((persona, index) => {
    persona.posicion = index + 1
})

console.log(personas2)

let ecommerce = [
    { nombre: 'Samsung TV', precio: 6000, articulos: 10 },
    { nombre: 'DELL notebook', precio: 4000, articulos: 30 },
    { nombre: 'Auriculares Sony', precio: 1500, articulos: 15 },
    { nombre: 'Monitor Phillips', precio: 12000, articulos: 20 },
    { nombre: 'Teclado Logitech', precio: 3000, articulos: 5 }
]

let productosValorTotal = ecommerce.map(producto => {
    return {
        nombre: producto.nombre,
        valorTotal: producto.precio * producto.articulos
    }
})

console.log(productosValorTotal);
