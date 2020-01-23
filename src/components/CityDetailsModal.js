import React from 'react';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/cityDetailsModal.css';

const customStyles = {
  content : {
    width                 : '600px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class CityDetailsModal extends React.Component { 
  render() {
    const cityImages = this.props.images.map(item => <div key={item.id}><img src={item.src} /></div>)

    return (    
      <div className="CityDetailsModal">
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Images Modal"
        > 
          <div className="CityImgModal">
            <i className="glyphicon glyphicon-remove" onClick={this.props.closeModal}></i>
            <Carousel showThumbs={false} infiniteLoop={true}>
                { cityImages }
            </Carousel>
          </div>
        </Modal>
      </div>            
    );
  }
}

export default CityDetailsModal;
