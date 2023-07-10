console.log('Sentencias IF')
/*
if (2%2 == 0) {
    console.log('Bienvenido')
}

if (2%2 != 0) {
    console.log('gilaso')
}

let estadoAnimo = prompt('¿Como estas?')

if (estadoAnimo == 'triste') {
    alert('No te procupes, si tu te lo propones, podrás hacerlo.')
}

let numSecreto = 21

let numSecretoRes = prompt('¿Cual es el numero secreto?')

if (numSecretoRes != numSecreto) {
    alert('Ese no es el numero secreto')
}

let passwd = prompt('Ingrese su contraseña')

if (passwd == 1234) {
    window.location = "http://www.google.com"
}*/
/*
let num = prompt("Ingrese un numero")

if (num%2 == 0) {
    alert('El numero que ingreso es par')
}else{alert('El numero que ingreso es impar')}

*/
/*
let edad=prompt("Ingrese su edad.")

if(edad < 0){
    alert('Su edad no es valida.')
}else if(edad<18) {
alert("No puede pasar al bar.")
}
else if(edad<21){
alert("Puede pasar al bar, pero no puede tomar alcohol.")
}else if(edad >=21){
alert("Puede pasar al bar y tomar alcohol. Felicidades por haber llegado a la mayoria de edad.")
}

if(edad%2!=0){
    alert('¿Sabias que tu edad es impar?')
}*/

/*En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, o no, de jubilarse.

let edad_mujer = parseInt(prompt('Buenos dias sra., ¿Cuantos años tiene?'))
if (edad_mujer >= 60) {
    alert('Felicidades, tiene la edad para jubilarse')
}else{
    alert('Disuclpe, debe tener al menos 60 años para jubilarse')
}

 Parte 2

En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse. Para esto, además de pedirle la edad de la persona, deberás confirmar si es hombre o mujer. */

let genero = prompt('Buenas, usted es hombre o mujer?').toLowerCase
let edad = parseInt(prompt('¿Cuantos años tiene?'))

if (genero === 'mujer') {
    edad < 59
    ? alert('Buenisimo Sra! Te podes jubilar')
    : alert('Perdon señora, debe tener al menos 60 años para poder jubilarse')
}
if (genero === "hombre") {
    edad > 64
      ? alert("Buenisimo Sr! Te podes jubilar ")
      : alert("Perdon Sr , no te puedes jubilar ");
  }