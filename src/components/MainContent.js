import React from 'react';
import '../css/mainContent.css';
import HomeScreen from '../screens/HomeScreen.js';
import FavoriteScreen from '../screens/FavoriteScreen.js';
import { Route, Switch } from 'react-router-dom';

function MainContent() {
  return (
    <div className="MainContent">
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/ReactReduxWeatherApp' component={HomeScreen} />
        <Route path='/home' component={HomeScreen} />
        <Route path='/favorite' component={FavoriteScreen} />
      </Switch>       
    </div>
  );
}

export default MainContent;