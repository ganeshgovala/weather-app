import axios from "axios";

const getWeatherData = async (location) => {
    try {
        const data = await axios.get(`http://localhost:3000/api/weather?location=${location}`);
        console.log(data);
        return data;
    } catch(e) {
        return e;
    }
}

export default getWeatherData;