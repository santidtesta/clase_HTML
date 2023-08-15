const inputPrincipal = document.querySelector('#input-principal')
const btnAgregar = document.querySelector('.boton-agregar')
const container = document.querySelector('.container')

class Item{
    constructor(valor){
        this.valor = valor
        this.crearDiv()
    }

    crearDiv(){
        const inputItem = document.createElement('input')
        inputItem.type = 'text'
        inputItem.disabled = true
        inputItem.classList.add('item-input')
        inputItem.value = this.valor

        const divItem = document.createElement('div')
        divItem.classList.add('item')

        const botonEditar = document.createElement('button')
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add('boton-editar')

        const botonRemover = document.createElement('button')
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add('boton-remover')

        divItem.appendChild(inputItem)
        divItem.appendChild(botonEditar)
        divItem.appendChild(botonRemover)

        container.appendChild(divItem)

        botonEditar.addEventListener('click', () => {
            inputItem.disabled = !inputItem.disabled

            if (inputItem.disabled) {
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
            } else {
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
            }
        })

        botonRemover.addEventListener('click', () => {
            divItem.remove()
        })
    }
}

function chequearInput(){
    const nuevoItemValor = inputPrincipal.value.trim()

    if (nuevoItemValor != ''){
        const nuevoItem = new Item(nuevoItemValor)

        inputPrincipal.value = ''
    }
}

btnAgregar.addEventListener('click', chequearInput)