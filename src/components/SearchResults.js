import React from 'react';
import { connect } from "react-redux";
import '../css/searchResults.css';
import CityDetails from '../components/CityDetails';
import FavoriteBtn from '../components/FavoriteBtn';
import WeeklyWeather from '../components/WeeklyWeather';
import { getFavoritesCity } from "../redux/actions"

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
                
        this.handleFavoriteBtn = this.handleFavoriteBtn.bind(this);
        this.handleMyLocationWeather = this.handleMyLocationWeather.bind(this);
    }

    checkFavorite(){
        let isFavorite = false;
        const { cityData } = this.props;
        this.props.favoritesData.forEach(element => {
            if(element.id == cityData.cityDetails.id)
                isFavorite = true;
        });
        return isFavorite
    }

    handleFavoriteBtn(){
        const { cityData } = this.props;
        let city = cityData.cityDetails;
        city.isFavorite = !this.checkFavorite();
        this.props.getFavoritesCity(city);    
    }

    handleMyLocationWeather(){
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } 
        else {
            navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError);
        }
    }

    geolocationSuccess(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert(`lat: ${latitude} , long: ${longitude}`);
    }
    
    geolocationError() {
        alert('Unable to retrieve your location');
    }

    getInitialHtml(){
        return(
            <div className="SearchResultsInitial">
                <h2>Select City</h2>
                <a href='#' onClick={this.handleMyLocationWeather}>Show me the weather for my location</a>
            </div>            
        )
    }

    getSelectedCityHtml(cityData){
        let isFavorite = this.checkFavorite();
        
        return (
            <div className="SearchResults">
                <div className="row">
                    <div className="col-xs-6">
                        <CityDetails data={cityData.cityDetails} />                      
                    </div>
                    <div className="col-xs-6">
                        <FavoriteBtn isFavorite={isFavorite} changeFavoriteBtn={this.handleFavoriteBtn} />                                  
                    </div>
                </div>
                <div className="row">
                    <div className="jumbotron">
                        <div className="container text-center">
                            <h2>{ cityData.cityDetails.dayWeather }</h2>                     
                        </div>                      
                    </div>            
                </div>
                <div className="row">
                    <WeeklyWeather data={cityData.weeklyWeather} />
                </div>
            </div>
        )
    }

    render(){
        const { cityData } = this.props;
        
        if(cityData == null) {
            return( this.getInitialHtml() )
        }
        else {
            return ( this.getSelectedCityHtml(cityData) )
        }
    }    
}

const mapStateToProps = state => ({
    cityData: state.selectedCityData.selectedCity,
    favoritesData: state.favoritesCityData.favoritesCity
  });

export default connect(mapStateToProps, { getFavoritesCity })(SearchResults);