import { useEffect, useState } from 'react';
import './App.css';
import React from "react";
import axios from "axios";
import { Box, Input } from '@chakra-ui/react';
import WeatherChanger from './Logic/WeatherChanger';

function App() {
  const apiKey = 'ec0d3b06feea5603e8a01748219480ea';
  const [selectedCity, setSelectedCity] = useState('Leipzig')
  const requestWay = 'https://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&appid=' + apiKey + '&units=metric';
  const [data, setData] = useState(null);
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);

  React.useEffect(() => {
    axios.get(requestWay).then((res) => {
      setCity(res.data.name)
      setTemp(res.data.main.temp)
      setWeather(res.data.weather[0].main)
      setWindSpeed(res.data.wind.speed)
      setHumidity(res.data.main.humidity)
      setFeelsLike(res.data.main.feels_like)
    })
    .catch((error) => {
      console.log('something went wrong: ' + error)
    })
  }, [selectedCity])
  const handleKeyEnter = (event) => {
    if (event.key === 'Enter') {
      setSelectedCity(event.target.value)
    }
  }
  return (
    <Box className='index' >
      <Box className='weatherBox'>
        <Box className='cityBox'>
          <Input className='citySearch' type='text' onKeyDown={handleKeyEnter} placeholder='Write your city'/>
        </Box>
        <Box className='weatherHeader'>
          <Box>
            <h3 className='cityStyle'>{city}</h3>
            <h1 className='tempStyle'>{Math.round(temp) + '°'}</h1>
          </Box>
          <Box className='verticalText'>{weather}</Box>
        </Box>
        <WeatherChanger Weather={weather}/>
        <Box className='infoBlock'>
          <Box className='infoParameter'>
            <p>{windSpeed + ' m/s'}<br/>Wind speed</p>
          </Box>
          <Box className='infoParameter'>
            <p>{humidity + '%'}<br/>Humidity</p>
          </Box>
          <Box className='infoParameter'>
            <p>{feelsLike + '°'}<br/>Feels</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
