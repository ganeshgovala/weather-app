import { useState } from "react";
import getWeatherData from "./services/weatherApi"
import WeatherCard from "./components/WeatherCard";
import cloud from "./assets/TransparentCloud.svg";

function App() {
  return (
    <>
        <div className="bg-linear-to-br flex items-center justify-center from-[#0787ff] via-[#5700f9] to-[#6701ff] w-screen h-screen relative overflow-hidden">
            <WeatherCard></WeatherCard>
            <img className="absolute h-80 -bottom-32 -left-32 z-0" src={cloud}></img>
            <h1 className="absolute text-xs bottom-4 text-[#ffffff91] right-4">Designed and Developed by Ganesh</h1>
        </div>
    </>
  );
}

export default App;