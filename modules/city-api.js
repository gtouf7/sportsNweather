const cityUrl = `https://api.api-ninjas.com/v1/city?`;

/*
* A function that gets the given
* city input and provides the estimated city's population number
* to be displayed as a fact.
*/

async function getCity(cityIn) {
    let city = cityIn;
    let endCityUrl = `${cityUrl}name=${city}`;
    let response = await fetch(
        endCityUrl,
        {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': process.env.CITY_API_KEY
            }
        }
    );
    console.log(response.json);
    return response.json();

}

module.exports = {
    getCity
}