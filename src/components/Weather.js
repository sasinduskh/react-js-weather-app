import React, { useState } from 'react'
import './Weather.css'
import WeatherCard from './WeatherCard'

export default function Weather() {

    const [formData, setFormData] = useState([]);
    const [data, setData] = useState(null);

    const apiKey = '2e06c5fda171bf5616ec9c5e604cc3e7';

    const handlerChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handlerSubmit = async () => {
        if (!formData.city) {
            alert("Please Eneter City");
            return
        }

        if (!formData.country) {
            alert("Please Eneter Country");
            return
        }


        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&appid=${apiKey}`).then((res) => {
            res.json().then((data) => {
                setData(data);
                console.log(data);
            });
            ;
        }).catch((err) => {
            console.log(err);
            setData(null)
            return
        })




    }

    return (
        <div className='weather'>

            <br />

            {!data ? (
                <div>
                    <span className='title' style={{
                        fontSize: 35
                    }}>This is Your weather</span>
                    <input type="text" onChange={handlerChange} className='input-control' name="city" placeholder="Enter your city" />
                    <input type="text" onChange={handlerChange} className='input-control' name="country" placeholder="Enter your Country" />
                    <button className='btn' onClick={handlerSubmit}>
                        Find Now Weather
                    </button>
                </div>
            ) : (
                <>
                    <WeatherCard {...data} />

                    <div class="location-container">
                        <button onClick={() => setData(null)} class="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
                    </div>
                </>

            )}


            {/* Weather Card */}
            {/* */}

        </div>
    )
}
