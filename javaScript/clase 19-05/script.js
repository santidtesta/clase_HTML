const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
]
let palabraAleatoria = randomWords()
let time = 10
let score = 0
let interval

function randomWords(){
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

function addToDOM() {
    const h1 = document.getElementById('randomWord')
    h1.textContent = palabraAleatoria
}

function handleInputEvent(e){
    const palabraIngresada = e.target.value.trim().toLowerCase()
    if(palabraIngresada === palabraAleatoria){
        e.target.value = ''
        updateScore()
    }
}

const input = document.getElementById('text')
input.addEventListener('input', handleInputEvent)

function actualizarTiempo(){
    if(time > 0){
        time--
        const timeDisplay = document.getElementById('timeSpan')
        timeDisplay.textContent = time
    }else{
        clearInterval(interval)
        gameOver()
    }
}

function updateScore(){
    score++
    time+=3
    const scoreDisplay = document.getElementById('score')
    scoreDisplay.textContent = score
    palabraAleatoria = randomWords()
    addToDOM()
}

function gameOver(){


    const endGameContainer = document.getElementById('end-game-container')
    endGameContainer.style.display = 'block'

    const title = document.createElement('h2')
    title.textContent = '¡Juego Terminado!'
        
    const scoreParagraph = document.createElement('p')
    scoreParagraph.textContent = `Puntaje final ${score}`
    
    const restartButton = document.createElement('button')
    restartButton.textContent = 'Jugar de Nuevo'
    restartButton.addEventListener('click', ()=>{
        location.reload()
    })

    endGameContainer.appendChild(title)
    endGameContainer.appendChild(scoreParagraph)
    endGameContainer.appendChild(restartButton)

    const mainContainer = document.querySelector('main')
    mainContainer.remove()
    
}

addToDOM()
updateScore()
interval = setInterval(actualizarTiempo, 1000)