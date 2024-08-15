const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

/*
* A function that processes the weather data from a given
* city input and provides the temperature,
* conditions and city name along with the country.
*/

async function getLocationWeather(cityIn) {
    const openWeatherKey = process.env.OPENWEATHER_CLIENT_KEY;
    let city = cityIn;
    let locUrl = `${weatherBaseUrl}q=${city}&appid=${openWeatherKey}&units=metric`;
    let response = await fetch(
        locUrl,
        {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            }
        }
    );
    return await response.json();
};

module.exports = {
    getLocationWeather
};