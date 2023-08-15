const inputPrincipal = document.querySelector('#input-principal')
const botonAgregar = document.querySelector('#boton-agregar')
const container = document.querySelector('.container')

class Item {
    constructor(valor) {
        this.valor = valor
        this.crearDiv()
    }

    crearDiv() {
        const div = document.createElement('div')
        div.className = 'item'
        div.innerHTML = `
        <input type="text" class="input-tarea" value="${this.valor}" disabled>
        <button class="boton-editar"><i class="fas fa-lock"></i></button>
        <button class="boton-remover">Remover</button>
        `
        container.appendChild(div)

        const botonEditar = document.createElement('button')
        const botonRemover = document.createElement('button')

        botonEditar.addEventListener('click', this.editarTarea(div))
        botonRemover.addEventListener('click', this.removerTarea(div))
    }

    editarTarea(div){
        const inputTarea = document.createElement('input')
        const botonEditar = document.createElement('button')

        if(inputTarea.disabled){
            inputTarea.removeAttribute(disabled)
            botonEditar.innerHTML('<i class="fas fa-lock-open"></i>')
        } else {
            inputTarea.setAttribute('disabled', 'true')
            botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        }
    }

    removerTarea(div){
        const container = document.querySelector('.container')
        container.removeChild(div)
    }
}

function chequearInput() {
    const inputTarea = document.getElementById('input-tarea')
    const valorTarea = inputTarea.value.trim()

    if (valorTarea != '') {
        const newItem = new Item(valorTarea)
        inputTarea.value = ''
    }
}

botonAgregar.addEventListener('click', chequearInput)