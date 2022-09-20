import React from 'react'
import './WeatherCard.css'

export default function WeatherCard({ name, sys, main, weather, wind,visibility }) {
    return (
        <div>

            <div class="container">
                <div class="weather-side">
                    <div class="weather-gradient"></div>
                    <div class="date-container">
                        <h2 class="date-dayname"></h2><span class="date-day">
                            {new Date().toLocaleDateString()}
                        </span><i class="location-icon" data-feather="map-pin"></i><span class="location">
                            {name} {sys.country}
                        </span>
                    </div>
                    <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
                        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} width={85} />
                        <span>

                        </span>
                        <h1 class="weather-temp">{Math.floor(main.temp - 273.15)} °C</h1>
                        <h4>
                        Hight/Low {" - "}
                            {Math.floor(main.temp_max - 273.15)}
                            / {" "}
                            {Math.floor(main.temp_max - 273.15)} °C
                        </h4>

                       

                        <h3 class="weather-desc">{weather[0].main} ({weather[0].description})</h3>
                    </div>
                </div>
                <div style={{
                    width: '350px'
                }} class="info-side">
                    <div class="today-info-container">
                        <div class="today-info">
                            <div class="precipitation"> <span class="title">PRESSURE</span><span class="value">{main.pressure} hPa</span>
                                <div class="clear"></div>
                            </div>
                            <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">{main.humidity} %</span>
                                <div class="clear"></div>
                            </div>
                            <div class="wind"> <span class="title">WIND</span><span class="value">{Math.floor((wind.speed * 18) / 5)} km/h</span>
                                <div class="clear"></div>
                            </div>
                            <div class="wind"> <span class="title">VISIBILITY</span><span class="value">{visibility / 1000} km</span>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div class="week-container">
                      
                    </div>

                </div>
            </div>
        </div>
    )
}
