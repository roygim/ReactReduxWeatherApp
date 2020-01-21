import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" id="my-navbar">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="icon-bar"></span>
  					<span className="icon-bar"></span>
  					<span className="icon-bar"></span>
  					<span className="icon-bar"></span>
          </button>
          
          <Link to='/'>
            <a href="javascript:void(0)" className="navbar-brand">Herolo Home Assignment</a>
          </Link>          
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <div className="navbar-right">
            <Link to='/home'>
              <a href="javascript:void(0)" className="btn btn-warning navbar-btn">Home</a>
            </Link>
            <Link to='/favorite'>
              <a href="javascript:void(0)" className="btn btn-warning navbar-btn">Favorites</a>
            </Link>            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
