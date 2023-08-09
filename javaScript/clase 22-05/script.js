const confirmaciones = document.getElementsByClassName('confirmaciones')
const btnCargar = document.getElementById('cargar')
const btnRefresh = document.getElementById('refrescar')
const listaDesordenada = document.querySelector('ul')

const inputLibro = document.getElementById('libro')
const inputAutor = document.getElementById('autor')
const inputDireccion = document.getElementById('direccion')


class Pedido{
    constructor(titulo, autor, direccion){
        this.titulo = titulo
        this.autor = autor
        this.direccion = direccion

        this.confirmaciones = confirmaciones
        this.listaDesordenada = listaDesordenada

        this.cargarItems()
        this.configurarEventListeners()
    }

    cargarItems(){
        const item = this.crearDiv(this.titulo, this.autor, this.direccion)
    }

    crearDiv(titulo, autor, direccion){
        const item = document.createElement('li')
        item.textContent = `El libro titulado ${titulo}, del autor ${autor} será llevado a la direccion ${direccion}`
        listaDesordenada.appendChild(item)
    }

    // configurarEventListeners(){
    //     btnCargar.addEventListener('click', () => {
    //         this.cargarItems()
    //     })

    //     btnRefresh.addEventListener('click', () => {
    //         this.listaDesordenada.innerHTML = ''
    //     })
    // }
}

btnCargar.addEventListener('click', function(){
    if(listaDesordenada.childElementCount < 5 ){
        const titulo = inputLibro.value
        const autor = inputAutor.value
        const direccion = inputDireccion.value

        const pedido = new Pedido(titulo, autor, direccion)
    } else {
        alert('Has alcanzado el limite maximo de ítems por pedido (5). Por favor, presione REFRESCAR para comenzar un nuevo pedido')
    }
})

btnRefresh.addEventListener('click', function() {
    while(listaDesordenada.firstChild){
        listaDesordenada.firstChild.remove()
    }
})

