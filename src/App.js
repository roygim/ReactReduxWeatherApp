import React from 'react';
import '../src/css/common.css';
import Header from './components/Header.js';
import MainContent from './components/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <Router basename='/ReactReduxWeatherApp'>
        <div className="App">
          <Header />
          <MainContent />
        </div>
      </Router>
  );
}

export default App;
