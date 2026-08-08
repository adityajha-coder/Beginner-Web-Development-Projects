const cityInput = document.querySelector('.city-input')
const searchButton = document.querySelector('.search-btn')

const notFoundSection = document.querySelector('.not-found')
const serachCitySection = document.querySelector('.search-city')
const weatherInfoSection = document.querySelector('.weather-info')

const countryTxt = document.querySelector('.country-txt')
const tempTxt = document.querySelector('.temp-text')
const conditionTxt = document.querySelector('.condition-txt')
const humidityTxt = document.querySelector('.humidity-value-txt')
const windValueTxt = document.querySelector('.wind-value-txt')
const weatherSummaryimg = document.querySelector('.weather-summary-img')
const currentDatatxt = document.querySelector('.current-date-text')

const forecastItemsConatiner = document.querySelector('.forecast-items-conatiner')

const apikey = 'f8e2d846897bdebf9498151930d9b1cf'


searchButton.addEventListener('click', () =>{
    if (cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
})
cityInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && 
        cityInput.value.trim() != ''
    ) {
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
})

async function getfetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`

    const response = await fetch(apiUrl)
    return response.json()
}

function getWeatherIcon(id){
    if(id <= 232) return 'thunderstorm.svg'
    if(id <= 321) return 'drizzle.svg'
    if(id <= 531) return 'rain.svg'
    if(id <= 622) return 'snow.svg'
    if(id <= 781) return 'atmosphere.svg'
    if(id <= 800) return 'clear.svg'
    else return 'clouds.svg'
}

function getCurrentData(){
    const currentDate = new Date()
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
    }
    return currentDate.toLocaleDateString('en-Gb', options)
}

async function updateWeatherInfo(city) {
    const weatherData = await getfetchData('weather', city)

    if(weatherData.cod != 200) {
        showDisplaySection(notFoundSection)
        return
    }
    console.log(weatherData)

    const {
        name: country,
        main: {temp, humidity},
        weather: [{id, main}],
        wind: {speed}
    } = weatherData

    countryTxt.textContent = country
    tempTxt.textContent = Math.round(temp) + ' °C '
    conditionTxt.textContent = main
    humidityTxt.textContent = humidity + '%'
    windValueTxt.textContent = speed + ' M/s'

    currentDatatxt.textContent = getCurrentData()
    console.log(getCurrentData())
    weatherSummaryimg.src = `assets/weather/${getWeatherIcon(id)}`

    const forecastData = await getfetchData('forecast', city)
    const timeTaken = '12:00:00'
    const todayDate = new Date().toISOString().split('T')[0]

    forecastItemsConatiner.innerHTML = ''
    forecastData.list.forEach(forecastWeather => {
        if (forecastWeather.dt_txt.includes(timeTaken) &&
            !forecastWeather.dt_txt.includes(todayDate)) {
            updateForecatItems(forecastWeather)
        }
    })

    showDisplaySection(weatherInfoSection)
}

function updateForecatItems(weatherData){
    console.log(weatherData)
    const {
        dt_txt: date,
        weather: [{id}],
        main: {temp}
    } = weatherData

    const dateTaken = new Date(date)
    const dateOption = {
        day: '2-digit',
        month: 'short'
    }
    const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

    const forecastItems = `
     <div class="forecast-item">
            <div class="forecast-item-data regular-txt">${dateResult}</div>
            <img src="assets/weather/${getWeatherIcon(id)}" alt="" class="forecast-item-img">
            <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
          </div>
    `

    forecastItemsConatiner.insertAdjacentHTML('beforeend', forecastItems)
}

function showDisplaySection(section){
    [weatherInfoSection, serachCitySection, notFoundSection]
        .forEach(section => section.style.display = 'none')

        section.style.display = 'flex'
}