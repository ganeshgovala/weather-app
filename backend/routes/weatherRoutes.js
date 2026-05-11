const express = require("express");
const router = express.Router();

const { getCoordinatesController, getWeatherController } = require("../controllers/weatherController");

router.get("/", getCoordinatesController);
router.get("/weather", getWeatherController);
module.exports = router;