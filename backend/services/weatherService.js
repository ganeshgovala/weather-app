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
        const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`);
        console.log(res.data);
        return res.data;
    } catch(e) {
        console.log(e);
        throw new Error("Unable to fetch weather");
    }
}

module.exports = {
    getCoordinates,
    getWeather
}