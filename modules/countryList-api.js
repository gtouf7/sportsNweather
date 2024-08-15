/*
* A function that provides a list of all countries
* and makes them available in the dropdown list
* for selection.
*/

async function getCountries() {
    const url = `https://restcountries.com/v3.1/all`;
    let response = await fetch(
        url,
        {
            method: 'get',
            headers: {
                "content-type": "application/json"
            }
        }
    );
    console.log(response.json);
    return response.json(); 
}

module.exports = {
    getCountries
}