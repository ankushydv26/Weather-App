import React ,{useState} from "react";
import './App.css';
import { fetchWeather} from "./api/FetchWeather"

function App() {
  const [query, setQuery] = useState('');
  const [weather , setWeather] = useState({});
  const search = async(e)=>{
      if(e.key === "Enter"){
          const data = await fetchWeather(query);
          setWeather(data)
          setQuery('')
      }
  } 

  return (
    <div className="main-container">
     <h1 style={{color:'#ffff', padding:'1rem 0'}}>Search Your City </h1>
      <div className="container">
          <input 
            type="text"
            placeholder="Search"
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
         {weather.main &&(
            <div className="weather">
            <div className="city">
                <h1 className="city-name">
                    <span>{weather.name}</span>
                    <sup className="country">{weather.sys.country}</sup>
                </h1>
                <div className="city-temp">
                      {Math.round(weather.main.temp)}
                  <sup>&deg;C</sup>
                </div>
                <div className="info">
                       <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                </div> 
            </div>
        </div>
         )}
      </div>
    </div>
  );
}

export default App;
