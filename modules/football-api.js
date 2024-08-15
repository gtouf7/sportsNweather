const footballBaseUrl =  `https://v3.football.api-sports.io/leagues`

/*
* A function that processes the sports data from a selected
* country and provides the name of the country's main soccer division,
* and the logo of that league.
*/

async function getLeagues(passedCountry) {
    let fullUrl = `${footballBaseUrl}?code=${passedCountry}`;
    let response = await fetch(
        fullUrl,
        {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.LIVESOCCER_KEY
            }
        }
    );
    return await response.json();
};

module.exports = {
    getLeagues
}
