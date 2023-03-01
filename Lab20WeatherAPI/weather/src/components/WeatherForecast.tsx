import { useEffect, useState } from "react";
import { Weather } from "../models/weather";
import { GetWeatherData } from "../services/WeatherService";



export function WeatherForecast(){

    const [weather, setWeather] = useState<Weather>();
    
    //useEffect hook
    useEffect(() => {
        GetWeatherData().then(data => setWeather(data));
    }, []);

    //dependency
    useEffect(() => {
        console.log(weather);
    }, [weather])
    
    let periods = weather?.properties.periods;

    let displayPeriods = periods?.map((period) =>
    <ul>
        <li><img src={period.icon}/> </li>
        <li>{period.name}</li>
        <li>{period.icon}</li>
        <li>{period.detailedForecast}</li>
        <li>{period.temperature}{period.temperatureUnit}</li>
    </ul>

    )

    return(
        <div className="WeatherForecast">
            { weather !== undefined && <>{displayPeriods}</> }
        </div>
    );
}