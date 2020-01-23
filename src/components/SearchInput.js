import React, { Component } from 'react';
import { connect } from "react-redux";
import Autocomplete from 'react-autocomplete';
import '../css/searchInput.css';
import { selectCity } from "../redux/actions"
import { API_KEY } from '../Config'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cityId: '',
      cityName: '',      
      autocompleteData: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
  }

  retrieveDataAsynchronously(searchText) {    
    let _this = this;
      if(searchText == ''){
        _this.setState({
          autocompleteData: []
      });
      return
    }
    
    let url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&metric=false&q=${searchText}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        let status = xhr.status;
        if (status == 200) {
          let dataNew = [];
          xhr.response.forEach(e => {
            let c = { label: e.LocalizedName, value: e.Key }
            dataNew.push(c);
          });
          _this.setState({
              autocompleteData: dataNew
          });
        } else {
            console.error("Cannot load data from remote source");
        }
    };

    xhr.send();
  }

  onChange(e){
    this.setState({
        cityName: e.target.value
    });
    this.retrieveDataAsynchronously(e.target.value);
  }

  onSelect(val, item){
    this.setState({
        cityName: item.label,
        cityId: item.value
    });
  }

  renderItem(item, isHighlighted){
    return (
        <div key={item.value} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
        </div>   
    ); 
  }

  getItemValue(item){
    return item.label;
  }

  handleClick(e){
    this.props.selectCity(this.state.cityName, this.state.cityId);
  }

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.props.selectCity(this.state.cityName, this.state.cityId);
    }    
  }

  render() {
      return (
        <div className="SearchInput text-center">
          <div className="inner-addon right-addon">
            <Autocomplete
                  getItemValue={this.getItemValue}
                  items={this.state.autocompleteData}
                  renderItem={this.renderItem}
                  value={this.state.cityName}
                  onChange={this.onChange}
                  onSelect={this.onSelect}
                  inputProps={{ className: "form-control", placeholder: "Search", onKeyPress: this.handleKeyPress}}
              />
            <i className="glyphicon glyphicon-search" onClick={this.handleClick}></i>
          </div>
          <br/>
          
        </div>
      );
  }
}

export default connect(null, { selectCity })(SearchInput);