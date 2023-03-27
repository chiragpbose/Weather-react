import React, { useEffect, useState } from "react";

export default function WeatherCard({ tempInfo }) {
    const { temp, humidity, pressure, weathermood, name, speed, country, sunset } = tempInfo;
    const [weatherState, setWeatherState] = useState(""); //this is for the weather icon
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    //converting seconds into time
    let sec = sunset;
    let dateInMilliSeconds = new Date(sec * 1000);
    let sunsetTimeStr = `${dateInMilliSeconds.getHours()}:${dateInMilliSeconds.getMinutes()}`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>
                </div>
                <div className="date">
                    {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                </div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {sunsetTimeStr} PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} % <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} hPa <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} m/s <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
