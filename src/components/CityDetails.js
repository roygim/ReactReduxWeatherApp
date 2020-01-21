import React from 'react';
import '../css/cityDetails.css';

function CityDetails(props) {    
    return (    
      <div className="CityDetails">
        <img src={props.data.img} alt="city" />
        <div className="info">
            <h1>{props.data.name}</h1>
            <div className="degrees">
              {props.data.degrees}
              <span>°c</span>
            </div>
        </div>
      </div>            
    );
}

export default CityDetails;
