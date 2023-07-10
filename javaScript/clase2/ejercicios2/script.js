/*let num = 19
while (num < 19 && num > -10) {
    console.log(num)
    num--
}



let num = 10

while (num >= 10 && num <= 40) {
    if (num%2 == 0) {
        console.log(num)
    }
    num++
}


let num = 300

while (num >= 300 && num <= 333) {
    if (num%2 != 0) {
        console.log(num)
    }
    num++
}

let num = 5

while (num >= 5 && num <= 50) {
    if (num%5 == 0 && num%3 == 0) {
        console.log(num)
    }
    num++
}

let numMesa = 1
let numClientes = 0

while (numMesa <= 20) {
    alert('Bienvenido a nustro cafe, su mesa es la numero ' + numMesa)
    numMesa++
    numClientes++
    console.log(numClientes)
}*/

let num


while(num != 0 || num < 0){
    num = prompt("Ingrese un numero: ")

    if (num%2==0) {
        alert('El numero que ingresó es par')
    }else{
        alert('El numero que ingreso es impar')
    }
}