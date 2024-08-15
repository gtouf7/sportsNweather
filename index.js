const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

//express app setup
const app = express();
const port = process.env.PORT || 7798

//APIS
const getWeather = require('./modules/weather-api');
const getSports = require('./modules/football-api');
const getLocation = require('./modules/city-api');
const getCountryList = require("./modules/countryList-api");

//FOLDERS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//body parser setup
app.use(bodyParser.urlencoded({ extended: true }));

//GET REQUESTS
app.get("/league", async (req, res) => {
    let countryList = await getCountryList.getCountries();
    res.render('home', { title: 'Home', countries: countryList }); 
});

app.get("/", async (req, res) => {
    let countryList = await getCountryList.getCountries();
    res.render('home', { title: 'Home', countries: countryList }); 
});

//POST REQUESTS
app.post("/", async (req,res) => {
    let countryList = await getCountryList.getCountries();
    let weather = await getWeather.getLocationWeather(req.body.cityInput);
    let location = await getLocation.getCity(req.body.cityInput);
    res.render('home', { title: 'Home', conditions: weather, locInfo: location, countries: countryList });
});

app.post("/league", async (req,res) => {
    let country = req.body.selected;
    let countryList = await getCountryList.getCountries();
    let sports = await getSports.getLeagues(country);
    res.render('home', { title: 'Home', sportsInfo: sports, countries: countryList });
});

//SERVER
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});