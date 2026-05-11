const { getCoordinates, getWeather } = require("../services/weatherService")

const getCoordinatesController = async (req, res) => {
    try {
        const location = req.query.location;

        const coordinates = await getCoordinates(location);

        res.status(200).json({
            success : true,
            data : coordinates
        });
    } catch(e) {
        res.status(500).json({
            success : false,
            message : e.message
        })
    }
}

const getWeatherController = async (req, res) => {
    try {
        const location = req.query.location;

        const coordinates = await getCoordinates(location);
        const weatherData = await getWeather(coordinates.latitude, coordinates.longitude);

        res.status(200).json({
            success : true,
            data : weatherData
        });
    } catch(e) {
        res.status(500).json({
            success : false,
            message : e.message
        })
    }
}

module.exports = {
    getCoordinatesController,
    getWeatherController
}