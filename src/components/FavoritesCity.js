import React from 'react';
import { connect } from "react-redux";
import '../css/favoritesCity.css';
import FavorCity from '../components/FavorCity';
import favoritesCityData from '../moka/favoritesCityData';

class FavoritesCity extends React.Component {
  render(){
    const favoritesCityItems = this.props.favoritesCityData.map(item => <FavorCity key={item.id} item={item} />)

    return (    
      <div className="FavoritesCity col-xs-12">
        { favoritesCityItems }
      </div>            
    );
  }
}

const mapStateToProps = state => ({
  favoritesCityData: state.favoritesCityData.favoritesCity
});

export default connect(mapStateToProps)(FavoritesCity);