import React from 'react';
import '../css/favoriteBtn.css';

function FavoriteBtn(props) {
  let heart = 'glyphicon-heart-empty';
  let btnStyle = 'btn-primary';
  let btnTxt = 'Add to Favorites';

  if(props.isFavorite) {
    heart = 'glyphicon-heart';
    btnStyle = 'btn-default';
    btnTxt = 'Remove from Favorite';
  }

  return (    
    <div className="FavoriteBtn pull-right">
        <i className={"glyphicon " + heart}></i>
        <button type="submit" className={"btn " + btnStyle} onClick={props.changeFavoriteBtn}>{btnTxt}</button>                    
    </div>          
  );
}

export default FavoriteBtn;
