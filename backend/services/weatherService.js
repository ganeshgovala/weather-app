const axios = require("axios");

const getCoordinates = async (location) => {
    try {
        const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`);
        console.log(res.data);
        return {
            latitude : res.data.results[0].latitude,
            longitude : res.data.results[0].longitude,
            city : res.data.results[0].name,
            country : res.data.results[0].country
        };
    } catch(e) {
        throw new Error("Error Fetching Coordinates");
    }
}

const getWeather = async (latitude, longitude) => {
    try {
        const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        return res.data;
    } catch(e) {
        throw new Error("Unable to fetch weather");
    }
}

module.exports = {
    getCoordinates,
    getWeather
}