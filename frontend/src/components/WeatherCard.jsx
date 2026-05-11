import { useState } from "react";
import React from "react";
import getWeatherData from "../services/weatherApi";
import sun from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import rainy from "../assets/Raining.svg"
import hotSun from "../assets/HighSun.svg"
import snow from "../assets/snow.svg"
import cloudySun from "../assets/CloudyWithSun.svg"
import rain from "../assets/rain.svg"
import thunderstrom from "../assets/Thunderstroms.svg"
import FutureWeatherCard from "./FutureWeatherCard";
import { clasifyImage } from "./FutureWeatherCard";

function WeatherCard() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [value, setValue] = useState("Enter City");

    const months = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];

    function getDate() {
        const current = new Date();
        const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`

        return date;
    }

    const getWeather = async () => {
        if(loading) return;
        try {
            setLoading(true);
            const data = await getWeatherData(value);
            setWeather(data);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="bg-white w-fit h-3/4 p-3 rounded-4xl flex items-center justify-start">
                <div className="w-76 h-full p-5 rounded-3xl bg-linear-to-br from-[#0077ff] via-[#0040ff] to-[#5900ff] space-y-2 relative overflow-hidden">
                    <h1 className="text-white">{getDate()}</h1>
                    <input onBlur={getWeather} className="cursor-pointer text-3xl font-semibold text-white outline-none h-14" onChange={(e) => setValue(e.target.value)} type="text" value={value} />
                    <h1 className="text-8xl font-bold bg-linear-to-b from-white to-[#ffffff8d] bg-clip-text text-transparent tracking-tighter">
                        {loading ? <span className="text-3xl tracking-normal">Loading...</span> : weather?.data?.data?.current?.temperature_2m ?? '--'}°
                    </h1>
                    <h1 className="text-md font-semibold text-white mt-5">Wind Speed : {weather?.data?.data?.current?.wind_speed_10m ?? "--"}</h1>
                    <img className="h-36 mx-auto absolute -right-10 -top-6" src={clasifyImage(weather?.data?.data?.current?.weather_code ?? 0)} alt="" />
                </div>
                <div className="h-full w-230 p-5">
                    <h1 className="text-gray-600 font-semibold text-md uppercase">Next 7 Days Forecast</h1>
                    <div className="flex flex-wrap mt-4">
                        {weather?.data?.data?.daily?.temperature_2m_min.map((value, index) => {
                            const date = weather.data.data.daily.time[index];
                            const max = weather?.data?.data?.daily.temperature_2m_max[index];
                            const code = weather.data.data.daily.weather_code[index];
                            return (
                                <FutureWeatherCard key={index} date={date} min={value} max={max} code={code}></FutureWeatherCard>
                            );
                        }) ?? "---"}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherCard;