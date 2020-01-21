import React from 'react';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

function HomeScreen() {
  return (
    <div className="HomeScreen">
        <div className="container">
            <div className="row">
                <SearchInput />
                <SearchResults />
            </div>
        </div>  
    </div>
  );
}

export default HomeScreen;
