import { SELECTED_CITY } from './types'
import { FAVORITES_CITY } from './types'
import { API_KEY } from '../../Config'

export const selectCity = (cityName, cityId) => dispatch => {
    getCityWeather(cityName, cityId, dispatch);
}

function getCityWeather(cityName, cityId, dispatch){
    let url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?metric=true&apikey=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(res => {
                res.cityName = cityName;
                res.cityId = cityId;
                getCityPhoto(res, cityId, dispatch)
            }            
        );  
}

function getCityPhoto(cityWeatherRes, cityId, dispatch){
    let url = `https://dataservice.accuweather.com/currentconditions/v1/${cityId}?getPhotos=true&apikey=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(res => {
            cityWeatherRes.Images = res;
            dispatch({
                    type: SELECTED_CITY,
                    payload: cityWeatherRes
                })
            }            
        ); 
}  

/*export const selectCity = (cityName, cityId) => dispatch => {
    debugger
    let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?metric=true&apikey=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(res => {
                res.cityName = cityName;
                res.cityId = cityId;
                dispatch({
                    type: SELECTED_CITY,
                    payload: res
                })
            }            
        );    
}*/

export const getFavoritesCity = (city) => {
    return {
        type: FAVORITES_CITY,
        payload: city
    }    
}

