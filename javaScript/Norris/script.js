const apiURL = 'https://api.chucknorris.io/jokes/random'

function getJSON(url, callback){
    $.getJSON(url, callback)
}

document.addEventListener('DOMContentLoaded', function() {
    const actualizarBtn = document.getElementById('actualizarBtn')
    const h2 = document.querySelector('h2')

    actualizarBtn.addEventListener('click', function() {
        getJSON(apiURL, function(data) {
            const chiste = data.value
            h2.textContent = chiste
        })
    })
})