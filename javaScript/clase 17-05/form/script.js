const form = document.createElement("form")
form.id = 'myform'

const nombreApellidoLabel = document.createElement('label')
nombreApellidoLabel.textContent = 'Nombre y Apellido: '
const nombreApellidoInput = document.createElement('input')
nombreApellidoInput.type = 'text'
nombreApellidoInput.name = 'nombreApellido'
nombreApellidoInput.placeholder = 'Guillermo Garcia'

const emailLabel = document.createElement('label')
emailLabel.textContent = 'Email: '
const emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.name = 'email'
emailInput.placeholder = 'ejemplo@ejemplo.com'

const generoLabel = document.createElement("label")
generoLabel.textContent = "Género:"
const generos = ["Femenino", "Masculino", "No binario", "Prefiero no decirlo"]
const generoInputs = generos.map(genero => {
    const input = document.createElement("input")
    input.type = "radio"
    input.name = "genero"
    input.value = genero
    const label = document.createElement("label")
    label.textContent = genero
    generoLabel.appendChild(input)
    generoLabel.appendChild(label)
    return input
})

const edadLabel = document.createElement('label')
edadLabel.textContent = 'Rango de Edad: '
const edadDropdown = document.createElement('select')
const edades = ['Menor de 18', '18-30', '31-45', '46-55', 'Mayor de 56']
edades.forEach(rango =>{
    const option = document.createElement('option')
    option.value = rango
    option.textContent = rango
    edadDropdown.appendChild(option)
})
edadLabel.appendChild(edadDropdown)

const nacionalidadLabel = document.createElement('label')
nacionalidadLabel.textContent = '¿Eres Argentino?'
const nacionalidadCheckbox = document.createElement('input')
nacionalidadCheckbox.type = 'checkbox'
nacionalidadCheckbox.name = 'nacionalidad'
nacionalidadLabel.appendChild(nacionalidadCheckbox)


const submitButton = document.createElement('input')
submitButton.type = 'submit'
submitButton.value = 'Enviar'

form.appendChild(nombreApellidoLabel)
form.appendChild(nombreApellidoInput)
form.appendChild(document.createElement('br'))
form.appendChild(emailLabel)
form.appendChild(emailInput)
form.appendChild(document.createElement('br'))
form.appendChild(generoLabel)
form.appendChild(document.createElement("br"))
form.appendChild(edadLabel)
form.appendChild(document.createElement("br"))
form.appendChild(nacionalidadLabel)
form.appendChild(document.createElement('br'))
form.appendChild(submitButton)

document.body.appendChild(form)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const nombreApellido = nombreApellidoInput.value
    const email = emailInput.value
    const genero = generoInputs.find(input => input.checked).value
    const rangoEdad = edadDropdown.value
    const esArgentino = nacionalidadCheckbox.checked

    console.log("Nombre y Apellido: ", nombreApellido)
    console.log("Email: ", email)
    console.log("Genero: ", genero)
    console.log("Rango de Edad: ", rangoEdad)
    console.log('¿Eres Argentino? ', esArgentino)
})