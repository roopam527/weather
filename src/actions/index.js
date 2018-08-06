import axios from 'axios';

const API_KEY ="86f98cb4831408b6cdd84124bf39cd62";
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},india`;
    const request = axios.get(url);
console.log(url);
    return{
        type: FETCH_WEATHER,
        payload:request

    }
}