/* Parte 1: Crear un objeto

let nave = {
    "Tipo de nave": "Espacial",
    "Pais": "Estados Unidos",
    "Cantidad de tripulantes": 6,
    "Tripulantes": ["Astronauta 1", "Astronauta 2", "Astronauta 3", "Astronauta 4", "Astronauta 5", "Astronauta 6"],
    "Estado": "Usada",
    "despegar": function(){
        console.log("¡Todo listo para el despegue!\nOh no ... ¡algo se rompió!")
        alert("¡BOOOOOOOOOM!")
    }
}

console.log(nave["Tipo de nave"])
console.log(nave["Pais"])
console.log(nave["Cantidad de tripulantes"])
console.log(nave["Tripulantes"])
console.log(nave["Estado"])

nave.despegar()*/

let autos = [
    {
        marca: "Citroen",
        modelo: "C3",
        año: 2013,
        dueño: "Juan",
        color:{
            capot: "gris",
            puertas: "negro"
        },
        dueñosAnteriores: [] // Lo compro 0KM
    },
    {
        marca: "Honda",
        modelo: "Fit",
        año: 2016,
        dueño: "Santiago",
        color:{
            capot: "rojo",
            puertas: "rojo"
        },
        dueñosAnteriores: ["Jorge", "Iván"]
    }
]

let autoJuan = autos.find(auto => auto.dueño === "Juan")

console.log(autos)

autoJuan.dueño = "Santiago"
autoJuan.color.capot = "negro"
autoJuan.dueñosAnteriores = ["Juan"]

console.log(autos)