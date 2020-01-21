import React from 'react';

function DayWeather(props) {
  return (    
    <div className="col-md-5ths">
        <div className="day text-center">
            <h3>{props.item.day}</h3>
            <div className="degrees">
                {props.item.degrees}
                <span>°c</span>
            </div>
        </div>                    
    </div>              
  );
}

export default DayWeather;
