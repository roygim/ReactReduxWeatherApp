import React from 'react';

function FavorCity(props) {
  return (    
    <div className="col-md-5ths">
        <div className="city text-center">
            <h3>{props.item.name}</h3>
            <div className="degrees">
                {props.item.degrees}
                <span>°c</span>
            </div>
            <h4>
              { props.item.dayWeather }
            </h4>
        </div>                    
    </div>              
  );
}

export default FavorCity;
