import sun from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import rainy from "../assets/Raining.svg"
import hotSun from "../assets/HighSun.svg"
import snow from "../assets/snow.svg"
import cloudySun from "../assets/CloudyWithSun.svg"
import rain from "../assets/rain.svg"
import thunderstrom from "../assets/Thunderstroms.svg"

export function clasifyImage(code) {
    switch(code) {
        case 0 : return sun;
        case 1 : return cloudySun;
        case 2 : return cloudySun;
        case 3 : return cloudy;
        case 45: return snow;
        case 48: return sun;
        case 51: return rain;
        case 53: return rain;
        case 55: return rain;
        case 61: return rainy;
        case 63: return rainy;
        case 65: return rainy;
        case 71: return snow;
        case 73: return snow;
        case 75: return snow;
        case 95: return thunderstrom;
        default: return sun;
    }
}

function FutureWeatherCard({date, min, max, code}) {
    return <>
        <div className="border p-6 border-gray-200 rounded-xl w-42 m-1">
            <h1 className="text-md font-semibold text-gray-400 text-center">{date}</h1>
            <div className="h-26 flex items-center justify-center">
                <img className="mx-auto h-18" src={clasifyImage(code)} alt="" />
            </div>
            <h1 className="text-md font-semibold text-gray-700">Min : {min}</h1>
            <h1 className="text-md font-semibold text-gray-700">Max : {max}</h1>
        </div>
    </>
}

export default FutureWeatherCard;