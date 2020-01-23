import React from 'react';
import '../css/cityDetails.css';
import CityDetailsModal from './CityDetailsModal';

class CityDetails extends React.Component { 
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    return (    
      <div className="CityDetails">
        <img src={this.props.data.img} alt="city" />
        <div className="info">
            <h1>{this.props.data.name}</h1>
            <div className="degrees">
              {this.props.data.degrees}
              <span>°c</span>
            </div>
            <i className="fa fa-search-plus" onClick={this.openModal}></i>
        </div>
        <CityDetailsModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} images={this.props.data.images}/>
      </div>            
    );
  }
}

export default CityDetails;
