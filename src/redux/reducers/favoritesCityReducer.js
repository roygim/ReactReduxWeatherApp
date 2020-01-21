import { FAVORITES_CITY } from "../actions/types";

const initialState = {
  favoritesCity: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case FAVORITES_CITY:
      const { id, isFavorite} = action.payload
      if(isFavorite){
        return {
          ...state,
          favoritesCity: [...state.favoritesCity, action.payload]
        };
      }
      else{
        let newFavoritesCity = [];
        state.favoritesCity.forEach(element => {
          if(element.id != id)
            newFavoritesCity.push(element)
        });
        return {
          ...state,
          favoritesCity: newFavoritesCity
        };
      }
      
    default:
      return state;
  }
}