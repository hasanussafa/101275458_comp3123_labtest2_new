import axios from "axios"
import {useEffect, useState} from "react";
import './App.css';

function App() {
  const [weather, getWeatherValue] = useState("");
  const [temperature, getTemperatureValue] = useState(0);
  const [cityName, getCityName] = useState("");
  const [humidityShow, getHumidity] = useState("");
  const [latitude, getLatitudeValue] = useState(0);
  const [longitude, getLongitudeValue] = useState(0);
 
  const savePositionToState = (position) =>{
    getLatitudeValue(position.coords.latitude);
    getLongitudeValue(position.coords. longitude);
  }
  
  useEffect(() => {
    weather_func();
  }, [])

const weather_func = async () => {
  try{
    await window.navigator.geolocation.getCurrentPosition(savePositionToState);
    const res = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e9bdb44137fdbf0cbca55a342f39596e'
      
    );
    getHumidity(res.data.main.humidity)
    getTemperatureValue(res.data.main.temp)
    getCityName(res.data.name);
    getWeatherValue(res.data.weather[0].main);
    console.log(res.data);

  }
  catch(err) {
    console.error(err);
  }
}

  return (
    <div className="app">
      <div>
        <h1>Lab Test 2</h1>
        
        </div>
      <div className="app_container">
      <h2 className="font_size">Temp.: {temperature} °C</h2>
      <h2>City: {cityName}</h2>
      <h2>Weather: {weather}</h2>
      <h2>Humidity: {humidityShow}</h2>
      </div>
    </div>
  );
}

export default App;
