import { useState } from 'react';
import Conditions from "./Conditions";

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    function getForecast(e){
        e.preventDefault();
        if (city.length === 0){
            return setError(true);
        }

        setError(false);
        setResponseObj([]);
        setLoading(true);

        const uriEncodedCity = encodeURIComponent(city);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "5f15e469ccmshed8cc00faa4ddaep1dbce3jsnbf5b1a23c5a2"
    }
})
.then(response => response.json())
    .then(response => {
        if(response.cod !== 200){
            throw new Error()
        }
        setResponseObj(response);
        setLoading(false);
})
.catch(err => {
    setError(true);
    setLoading(false);
    console.log(err.message);
});
    }
    
    return(
        <div>
            <h2>Find Current Weather Conditions by City</h2>
            <form onSubmit={getForecast}>
                    <input
                        type = "text"
                        placeholder = "Enter City"
                        maxLength = "50"
                        value = {city}
                        onChange = {(e) => setCity(e.target.value)}
                        />
                    <label>
                        <input
                            type = "radio"
                            name = "units"
                            checked = {unit === "imperial"}
                            onChange = {(e) => setUnit(e.target.value)}
                            />
                            Fahrenheit
                    </label>
                    <label>
                        <input 
                            type = "radio"
                            name = "units"
                            checked = {unit === "metric"}
                            value = "metric"
                            onChange= {(e) => setUnit(e.target.value)}
                            />
                            Celsius
                    </label>
                    <button type = "submit" > Get Forecast!</button>
             </form>   
            <Conditions 
            responseObj={responseObj}
            error = {error}
            loading = {loading}
            />
        </div>
    )
}
export default Forecast

//contribution by Thomas
