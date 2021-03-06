import axios from "axios";

// const API_KEY ="518a3622122496dc326171715e9de63d";



export const fetchWeather = async(query) =>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=518a3622122496dc326171715e9de63d`;
    const {data} = await axios.get(URL)
    return data;
    
}    