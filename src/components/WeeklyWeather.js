import React from 'react';
import '../css/WeeklyWeather.css';
import DayWeather from '../components/DayWeather';

function WeeklyWeather(props) {
    const dayWeatherItems = props.data.map(item => <DayWeather key={item.id} item={item} />)
  
    return (
        <div className="WeeklyWeather col-xs-12">
            { dayWeatherItems }                      
        </div>        
    );
}

export default WeeklyWeather;
