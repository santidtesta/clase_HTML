document.addEventListener('DOMContentLoaded', function () {
    const cityButton = document.getElementById('cityButton')
    cityButton.addEventListener('click', cargarCiudad)
})

function cargarCiudad() {
    const cityInput = document.querySelector('input')
    const cityNameElement = document.getElementById('ciudad')
    const temperaturaElement = document.getElementById('temperatura')
    const weatherDescriptionElement = document.getElementById('descripcion')
    const weatherIconElement = document.getElementById('wicon')
    const containerElement = document.querySelector('.container')

    const ciudad = cityInput.value
    const apiKeys = [
        "fdd533266e28101881f610f2b8f1ebe1",
        "1a9b3670ada3ece0551373f7325e028d",
        "dcec7df661b1e6b0edab51d796b7339c"
    ]
    
    containerElement.style.visibility = 'visible'

    cityInput.value = ''

    if(ciudad.trim() === ''){
        alert('Por favor, ingrese el nombre de una ciudad')
        return
    }

    for (const apiKey of apiKeys) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                if (data.cod === '404') {
                    alert('Ciudad no encontrada. Por favor, ingrese un nombre de ciudad valido')
                    return
                }

                const cityName = data.name
                const temperatura = data.main.temp
                const weatherDescription = data.weather[0].description
                const weatherIcon = data.weather[0].icon

                temperaturaElement.innerHTML = `${temperatura}<sup>°C</sup>`
                weatherDescriptionElement.textContent = weatherDescription

                cityNameElement.textContent = cityName
                
                weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`
                weatherIconElement.alt = weatherDescription

                
            })
            .catch(error => {
                console.error('Error fetching weather data: ', error)
            })
    }
}