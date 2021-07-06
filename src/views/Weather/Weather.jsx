import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });        
        setWeather(res.data)
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])
    //[] diz para useEffect apenas ser executado quando o componente é carregado
    if (location == false) {
        return (
            <React.Fragment>
                Você precisa habilitar a localização no browser
            </React.Fragment>
        );
    } else {
        return (

            <div className="card">
                <div className="card-header">
                    <strong>Clima nas suas coordenadas: </strong> {weather.name} ({weather.weather ? weather.weather[0].description : ''})
                </div>
                <div className="card-body">
                    <ul>
                        <li><b>Temperatura atual: </b>{weather.main ? weather.main.temp : ''}º</li>
                        <li><b>Temperatura máxima: </b>{weather.main ? weather.main.temp_max : ''}º</li>
                        <li><b>Temperatura minima: </b>{weather.main ? weather.main.temp_min : ''}º</li>
                        <li><b>Sensação Térmica: </b>{weather.main ? weather.main.feels_like : ''}º</li>
                        <li><b>Pressão: </b>{weather.main ? weather.main.pressure : ''} hpa</li>
                        <li><b>Umidade: </b>{weather.main ? weather.main.humidity : ''}%</li>


                        <li><b>Velocidade do Vento: </b>{weather.wind ? (weather.wind.speed*3.6).toFixed(2) : ''} km/h</li>
                    </ul>
                </div>
            </div>
        );
    }
}
